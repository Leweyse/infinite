import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import {Title} from "../../blocks";
import {useRef} from "react";

export default function Section (props) {
    const sectionRef = useRef(null);
    const divRef = useRef(null)

    useEffect(() => {
        setAreas();
    }, [])

    function setAreas() {
        const rowsLength = new Array(9);
        const columnsLength = new Array(14);
        const columnsValues = ['space', 'txt'];

        let columns = "";
        let row = "";
        let gridArea = "";

        for (let i = 0; i < columnsLength.length; i++) {
            if (i < columnsLength.length / 2) {
                columns += `${columnsValues[0]} `;
            } else {
                columns += `${columnsValues[1]} `;
            }
        }

        row = `"${columns}"`;

        for (let i = 0; i < rowsLength.length; i++) {
            gridArea += `${row}\n`;
        }

        sectionRef.current.style.setProperty('grid-template-areas', gridArea)
        gsap.to(divRef.current, {gridArea: columnsValues[0]})
    }

    return (
        <>
            <section className={"section"} ref={sectionRef}>
                    <span ref={divRef} className={"title"}>
                        <Title content={"A DEV"} />
                    </span>
            </section>
        </>
    )
}














