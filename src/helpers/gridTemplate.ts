import getRandom from './getRandom';

interface RawGridCoord {
    value: string;
    coord: [number, number];
}

class GridRandomTemplate {
    // Final result is a string
    gridTemplateAreas = '';

    elementsToDisplay: { value: string; rows: number; columns: number }[] = [];

    // Define constants
    rowsNum = 9; // template rows
    columnsNum = 14; // template columns

    // Array of coordinates
    gridCoord: Array<Array<RawGridCoord>> = []; // Coordinates are the position of each area: [x, y]
    // Collection of all coordinates
    coordinates: RawGridCoord[] = [];

    // "areas" contains basic information of each grid-area
    areas: {
        value: string;
        x: number;
        y: number;
        rows: number;
        columns: number;
    }[] = []; // {value: grid-name, x: x-coord, y: y-coord, rows: horizontal-length, columns: vertical-length}

    // Collection of objects for each "area": {value: name, coord: []}
    // gridAreas: name and ALL coordinates
    gridAreas: { value: string; coord: [number, number][] }[] = []; // [{value: name1, coord: [[0, 1], [0, 2], ...]}, {value: name2, coord: [[1, 1], [1, 2], ...]}, ...]
    // areasCollection: name and ONE coord
    areasCollection: RawGridCoord[] = []; // [{value: name1, coord: [0, 1]}, {value: name1, coord: [0, 2]}, ...]

    // Array version of template
    gridArrayTemplate: string[][] = [];

    constructor(
        elementsToDisplay: {
            value: string;
            rows: number;
            columns: number;
        }[] = []
    ) {
        this.elementsToDisplay = elementsToDisplay;

        // Generate layout for coordinates
        this._generateCoordTemplate();
        // Provide random coordinates for Elements
        this._generateElementsData();
        // Create collection of areas with their coordinates
        this._generateGridAreas();
        // Generate collection of each coordinate with a value different from "."
        this._generateAreasCollection();
        // Set areas' value in template based on their coordinates
        this._setValuesInTemplate();
        // Generate string - grid-template-areas
        this._generateGridTemplateAreas();
    }

    _generateCoordTemplate() {
        // Loop to set values on gridCoord array: format -> [row, row] -> row = [column, column]
        for (let i = 0; i < this.rowsNum; i++) {
            // Each row will be represented as an array
            this.gridCoord[i] = [];

            for (let j = 0; j < this.columnsNum; j++) {
                this.gridCoord[i].push({
                    // value is the grid-name
                    value: '.',
                    // coord is the position of each area: format -> [0, 0]
                    coord: [j, i],
                });
            }
        }

        // Copy gridCoord as one array of objects: format -> [{value: ..., coord: ...}, ...]
        this.coordinates = [...this.gridCoord].flat();
    }

    // Helper to get random coordinates, and remove them when they're not available
    _helperGetRandomCoord(
        rowLength: number,
        columnLength: number
    ): [number, number] {
        // Get random coordinate
        let rand: RawGridCoord[] = getRandom(this.coordinates, 1);

        if (
            // Avoid conflict with Navbar position
            rand[0].coord[0] >= 2 && // Position from left
            rand[0].coord[0] <= this.columnsNum - columnLength - 2 && // Position from right
            rand[0].coord[1] >= 2 && // Position from top
            rand[0].coord[1] <= this.rowsNum - rowLength - 2 // Position from bottom
        ) {
            // Loop to remove coordinates not available
            for (let i = 0; i < rowLength; i++) {
                for (let j = 0; j < columnLength; j++) {
                    // Get index from object
                    const idx = this.coordinates.findIndex(
                        (gridCoord) =>
                            JSON.stringify(gridCoord.coord) ===
                            JSON.stringify([
                                rand[0].coord[0] + j,
                                rand[0].coord[1] + i,
                            ])
                    );

                    // Remove object from available coordinates
                    if (idx > -1) this.coordinates.splice(idx, 1);
                    else
                        return this._helperGetRandomCoord(
                            rowLength,
                            columnLength
                        );
                }
            }

            return rand[0].coord;
        }

        // Recursion used to find an available coordinate
        return this._helperGetRandomCoord(rowLength, columnLength);
    }

    _generateElementsData() {
        this.elementsToDisplay.forEach((el) => {
            const coord = this._helperGetRandomCoord(el.rows, el.columns);

            this.areas.push({
                value: el.value,
                x: coord[0],
                y: coord[1],
                rows: el.rows,
                columns: el.columns,
            });
        });
    }

    // Set values in coordinates
    _generateGridAreas() {
        this.areas.forEach((area, idx) => {
            this.gridAreas[idx] = { value: '', coord: [] };

            this.gridAreas[idx].value = area.value;
            for (let i = 0; i < area.rows; i++) {
                for (let j = 0; j < area.columns; j++) {
                    this.gridAreas[idx].coord.push([area.x + j, area.y + i]);
                }
            }
        });
    }

    _generateAreasCollection() {
        this.gridAreas.forEach((area) => {
            area.coord.forEach((coord) => {
                this.areasCollection.push({
                    value: area.value,
                    coord: coord,
                });
            });
        });
    }

    // Set values in gridArrayTemplate
    // Each coordinate has a grid-name
    _setValuesInTemplate() {
        // Compare areasCollection with each coordinate on gridCoord
        this.gridCoord.forEach((row, idxRow) => {
            this.gridArrayTemplate[idxRow] = [];

            row.forEach((area) => {
                this.areasCollection.forEach((block) => {
                    if (
                        JSON.stringify(area.coord) ===
                        JSON.stringify(block.coord)
                    ) {
                        area.value = block.value;
                    }
                });

                this.gridArrayTemplate[idxRow].push(area.value);
            });
        });
    }

    // Convert ArrayTemplate to String
    _generateGridTemplateAreas() {
        let columnGrid = '';
        let rowGrid = '';

        for (let i = 0; i < this.gridArrayTemplate.length; i++) {
            columnGrid = this.gridArrayTemplate[i].join(' ');
            rowGrid = `"${columnGrid}"`;
            this.gridTemplateAreas += `${rowGrid}\n`;
        }
    }
}

export default GridRandomTemplate;
