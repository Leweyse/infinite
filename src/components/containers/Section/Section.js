import { useEffect, useRef } from "react";

import { gridTemplate } from "../../../utils";
import { Img } from "../../../store";

import { Title } from "../../blocks";

export default function Section() {
    // IMG data
    const imgData = new Img();
    imgData._setValues(Math.random());
    
    // Variables related to IMG data
    const imageData = imgData._getValues();
    // const randImg = imageData.img;
    const imageColor = imageData.clr;
    const colorsArray = imageData.clrArr;

    // To reference elements
    const sectionRef = useRef(null);

    // Using references to avoid warnings
    // related with useEffect dependencies
    // const imageInfo = useRef({
    //     url: randImg.urls.small,
    //     urlRegular: randImg.urls.regular,
    //     description: randImg.description,
    //     credit: randImg.user.name,
    //     creditUrl: randImg.links.html
    // });

    const colorScheme = useRef({
        bgColor: imageColor,
        txtColor: "#" + colorsArray[2],
        accent1: "#" + colorsArray[0],
        accent2: "#" + colorsArray[1],
        accent3: "#" + colorsArray[3]
    });

    // Grid template
    const template = gridTemplate();

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
            value: template
        }
    ]);

    useEffect(() => {
        setValues.current.forEach((element) => {
            sectionRef.current.style.setProperty(element.property, element.value);
        });
    }, [])

    return (
        <>
            <section ref={sectionRef} className={"section"}>
                {Array.from(Array(10)).map((el, idx) => {
                    return (
                        <Title key={idx} content={"A DEV"} className={"title-text"} />
                    )
                })}
            </section>
        </>
    )
}














