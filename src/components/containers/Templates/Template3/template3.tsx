import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { Title, Text } from '@/components/blocks';

const Template3 = (props: any) => {
    let imageInfo = props.imageInfo;
    let colorScheme = props.scheme;

    const main = useRef<HTMLDivElement>(null);
    const clipPath = useRef<HTMLDivElement>(null);
    const imgContainer = useRef<HTMLDivElement>(null);
    const t1 = useRef<HTMLDivElement>(null);
    const t2 = useRef<HTMLDivElement>(null);

    const imgBg = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let centerX = main.current!.clientWidth / 2;
        let centerY = main.current!.clientHeight / 2;

        main.current?.addEventListener('mousemove', (event) => {
            gsap.to(clipPath.current, {
                duration: 0.5,
                ease: 'power1.out',
                x: (event.clientX - centerX) / 5,
                y: (event.clientY - centerY) / 5,
            });
            gsap.to(imgContainer.current, {
                duration: 0.5,
                ease: 'power1.out',
                x: (centerX - event.clientX) / 4.5,
                y: (centerY - event.clientY) / 4.5,
            });
            gsap.to(t1.current, {
                delay: 0.2,
                duration: 1,
                ease: 'power1.out',
                x: (event.clientX - centerX) / 5,
                y: (event.clientY - centerY) / 5,
            });
            gsap.to(t2.current, {
                duration: 1.2,
                ease: 'power1.out',
                x: (event.clientX - centerX) / 5,
                y: (event.clientY - centerY) / 5,
            });
        });
    }, []);

    return (
        <div ref={main} id={'t3-main'}>
            <div ref={t1} id={'t3-title1'}>
                <Title
                    class={'t3-title'}
                    content={'Welcome!'}
                    color={colorScheme.txtColor}
                />
            </div>
            <div ref={clipPath} id={'t3-imgContainer'}>
                <span ref={t2} id={'t3-title2'}>
                    <Title
                        class={'t3-title'}
                        content={'Welcome!'}
                        color={colorScheme.accent3}
                    />
                </span>
                <div ref={imgContainer} id={'imageContainer'}>
                    <div
                        ref={imgBg}
                        id={'imageBg'}
                        style={{
                            background: `url(${imageInfo.urlRegular}) center center / cover`,
                        }}
                    ></div>
                </div>
            </div>
            <Text id={'t3-text'} text={'scroll'} accent={colorScheme.accent1} />
        </div>
    );
};

export default Template3;
