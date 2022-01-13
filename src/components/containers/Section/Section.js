import { useEffect, useRef } from "react";
import { getRandom } from "../../../utils";
import { Img } from "../../../store";

import { Nav } from "../../blocks";
import { Template1, Template2, Template3 } from  "../Templates";

function Section() {
    // IMG data
    const imgData = new Img();
    imgData._setValues(Math.random());
    
    // Variables related to IMG data
    const imageData = imgData._getValues();
    const randImg = imageData.img;
    const imageColor = imageData.clr;
    const colorsArray = imageData.clrArr;

    // To reference the section element
    const sectionRef = useRef();

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
        }
    ]);

    useEffect(() => {
        // Update new values for section component
        setValues.current.forEach((element) => {
            sectionRef.current.style.setProperty(element.property, element.value);
        })
    }, [])

    return (
        <>
            <section ref={sectionRef} className={'section'}>
                <Nav />
                {/* 
                    Implemented getRandom helper
                    It returns two possible templates
                    We choose the first one
                */}
                {getRandom(templates, 2)[0]}
            </section>
        </>
    )
}

export default Section;