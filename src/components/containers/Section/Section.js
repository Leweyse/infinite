import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

import { getRandom } from "../../../utils";
import { Img } from "../../../store";

import { Title } from "../../blocks";
import { Template1, Template2, Template3 } from  "../Templates";

export default function Section() {
    // IMG data
    const imgData = new Img();
    imgData._setValues(Math.random());
    
    // Variables related to IMG data
    const imageData = imgData._getValues();
    const randImg = imageData.img;
    const imageColor = imageData.clr;
    const colorsArray = imageData.clrArr;

    // To reference elements
    const sectionRef = useRef(null);
    const divRef = useRef(null)

    // Using references to avoid warnings
    // related with useEffect dependencies
    const imageInfo = useRef({
        url: randImg.urls.small,
        urlRegular: randImg.urls.regular,
        description: randImg.description,
        credit: randImg.user.name,
        creditUrl: randImg.links.html
    });

    const colorScheme = useRef({
        bgColor: imageColor,
        txtColor: "#" + colorsArray[2],
        accent1: "#" + colorsArray[0],
        accent2: "#" + colorsArray[1],
        accent3: "#" + colorsArray[3]
    });

    // List of templates
    // New templates should be added here
    const templates = [
        <Template1 imageInfo={imageInfo.current} scheme={colorScheme.current}/>,
        <Template2 imageInfo={imageInfo.current} scheme={colorScheme.current}/>,
        <Template3 imageInfo={imageInfo.current} scheme={colorScheme.current}/>
    ]

    const gridAreas = () => {
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
      
        return gridArea;
    }

    // List of values that will be updated
    const setValues = useRef([
        {
            property: '--bg',
            value: colorScheme.current.bgColor
        },
        {
            property: '--txt',
            value: colorScheme.current.accent3
        },
        {
            property: '--clr-difference',
            value: colorScheme.current.accent1
        },
        {
            property: 'grid-template-areas',
            value: gridAreas()
        }
    ]);
    
    useEffect(() => {
        setValues.current.forEach((element) => {
            sectionRef.current.style.setProperty(element.property, element.value);
        });
      
        gsap.to(divRef.current, {gridArea: "txt"});
    }, [])

    return (
        <>
            <section ref={sectionRef} className={"section"}>
                <div>
                    {Array.from(Array(10)).map(el => {
                        return (
                            <span ref={divRef} className={"title"}>
                                <Title content={"A DEV"} />
                            </span>
                        )
                    })}
                </div>

            </section>
        </>
    )
}














