import { useEffect, useRef } from "react";

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
        const rowsArray = new Array(9);
        const columnsArray = new Array(14);
        const gridArray = [];

        let gridElements = [
            {
                value : 'img',
                columns: 3,
                rows: 3,
                blocks: 9
            },
            {
                value : 'txt',
                columns: 3,
                rows: 1,
                blocks: 3
            },
            {
                value : 'space',
                columns: 1,
                rows: 1,
                blocks: 1
            }
        ];

        let columns = "";
        let row = "";
        let gridArea = "";

        for (let i = 0; i < rowsArray.length; i++) {
            let elem = getRandom(gridElements, 1)[0];

            gridArray[i] = [];
            
            for (let j = 0; j < columnsArray.length; j++) {
                
            }
        }

        for (let i = 0; i < gridElements.length; i++) {
            let elem = getRandom(gridElements, 1)[0];
            console.log(elem.blocks)
        }

        row = `"${columns}"`;
        gridArea += `${row}\n`;
      
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
    }, [])

    return (
        <>
            <section ref={sectionRef} className={"section"}>
                {Array.from(Array(10)).map(el => {
                    return (
                        <Title content={"A DEV"} className={"title-text"} />
                    )
                })}
            </section>
        </>
    )
}














