import getRandom from "./getRandom";

const templates = [
    [
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", "txt", "txt", "txt", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "img", "img", "img", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "img", "img", "img", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", "img", "img", "img", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ],
    [
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "txt", "txt", "txt", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "img", "img", "img"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "img", "img", "img"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "img", "img", "img"],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
    ]
]

const gridRandomTemplate = () => {
    const rowsNum = new Array(9);
    const columnsNum = new Array(14);

    const gridTemplate = [];

    for (let i = 0; i < rowsNum.length; i++) {
        gridTemplate[i] = [];
        
        for (let j = 0; j < columnsNum.length; j++) {
            gridTemplate[i].push([j, i]);
        }
    }

    return gridTemplate;
}

// This function returns random template
// from the array templates
const gridTemplate = () => {
    console.log(gridRandomTemplate());

    const template = getRandom(templates, 1);

    let columns = "";
    let row = "";
    let gridArea = "";

    for (let i = 0; i < template[0].length; i++) {
        columns = template[0][i].join(' ');
        row = `"${columns}"`;
        gridArea += `${row}\n`;
    }

    return gridArea;
}

export default gridTemplate;

// const intersection = array1.filter(element => array2.indexOf(element) !== -1);

// let gridElements = [
//     {
//         value : 'img',
//         x: 3,
//         y: 3,
//         blocks: 9
//     },
//     {
//         value : 'txt',
//         x: 3,
//         y: 1,
//         blocks: 3
//     },
//     {
//         value : '.',
//         x: 1,
//         y: 1,
//         blocks: 1
//     }
// ];