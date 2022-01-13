

import React from 'react';

import { gsap } from 'gsap';
import {Title} from "../../blocks";




class Section extends React.Component {


    constructor(props) {
        super(props);
        // References
        this.sectionRef = React.createRef();
        this.ref = React.createRef();

        // Using references to avoid warnings
        // related with useEffect dependencies

    }

    componentDidMount() {
        // Set grid area
        this._setAreas();
        // Figure follows cursor
    }

    _setAreas() {
        this.rowsLength = new Array(9);
        this.columnsLength = new Array(14);
        this.columnsValues = ['space', 'txt'];

        this.columns = "";
        this.row = "";
        this.gridArea = "";

        for (let i = 0; i < this.columnsLength.length; i++) {
            if (i < this.columnsLength.length / 2) {
                this.columns += `${this.columnsValues[0]} `;
            } else {
                this.columns += `${this.columnsValues[1]} `;
            }
        }

        this.row = `"${this.columns}"`;

        for (let i = 0; i < this.rowsLength.length; i++) {
            this.gridArea += `${this.row}\n`;
        }

        this.sectionRef.current.style.setProperty('grid-template-areas', this.gridArea)
        //gsap.to(this.ref.current, {gridArea: this.columnsValues[0]})

    }



    render() {
        return (
            <>
                <section className={"section"} ref={this.sectionRef}>
                    <span ref={this.ref} className={"title"}>
                        <Title content={"A DEV"} />
                    </span>
                </section>
            </>
        )
    }
}

export default Section;