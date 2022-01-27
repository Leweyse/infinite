import { useEffect, useRef } from "react";

import { GridRandomTemplate, ContrastRatio } from "../../../utils";
import { Img } from "../../../store";

import { Title, Figure, Nav } from "../../blocks";

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

    // Using references to avoid warnings
    // related with useEffect dependencies
    const imageInfo = useRef({
        url: randImg.urls.regular,
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

    const elementsToDisplay = [
        {
            value: "img",
            rows: 3,
            columns: 3
        },
        {
            value: "txt1",
            rows: 1,
            columns: 3
        },
        {
            value: "txt2",
            rows: 1,
            columns: 3
        },
        {
            value: "txt3",
            rows: 1,
            columns: 3
        }
    ];

    // Grid template
    const template = (new GridRandomTemplate(elementsToDisplay)).gridTemplateAreas;

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
            property: '--contrast',
            value: 'screen'
        },
        {
            property: 'grid-template-areas',
            value: template
        }
    ]);

    useEffect(() => {
        const firstContrast = (new ContrastRatio(colorScheme.current.bgColor, colorScheme.current.accent3)).ratio;
        const secondContrast = (new ContrastRatio(colorScheme.current.bgColor, colorScheme.current.accent1)).ratio;

        if (
            firstContrast < 1.9 &&
            secondContrast < 1.9 &&
            (Math.max(firstContrast, secondContrast) - Math.min(firstContrast, secondContrast) < 0.42))
        {
            setValues.current[3].value = 'exclusion';
        } else if (firstContrast >= 4 || secondContrast >= 4) {
            setValues.current[3].value = 'screen';
        } else {
            setValues.current[3].value = 'color-dodge';
        }

        setValues.current.forEach((element) => {
            sectionRef.current.style.setProperty(element.property, element.value);
        });
    }, [])

    return (
        <>
            <section ref={sectionRef} className={"section"}>
                <Nav />

                <Title content={"AESTHETICS"} className={"section-text__1"} />
                <Title content={"ENERGY"} className={"section-text__2"} />
                <Title content={"AMBITION"} className={"section-text__3"} />

                <Figure imageInfo={imageInfo.current} className={"figure-img"} />
            </section>
        </>
    )
}














