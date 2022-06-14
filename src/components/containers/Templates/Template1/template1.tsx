import { useEffect, useRef } from 'react';
import { Figure, Title } from '@/components/blocks';

const Template1 = (props: any) => {
    let imageInfo = props.imageInfo;
    let colorScheme = props.scheme;

    const templateRef = useRef<HTMLDivElement>(null);

    const setValues = useRef([
        {
            property: '--accent',
            value: colorScheme.accent2,
        },
    ]);

    useEffect(() => {
        setValues.current.forEach((element) => {
            templateRef.current?.style.setProperty(
                element.property,
                element.value
            );
        });
    }, []);

    return (
        <div ref={templateRef} className={'main t1'}>
            <aside className={'left'}>
                <Title class='t1-title' content="I'm such a big title" />
            </aside>

            <aside className={'right'}>
                <Figure
                    className='image imgCenter imgMedium t1-img'
                    imageInfo={imageInfo}
                />
            </aside>
        </div>
    );
};

export default Template1;
