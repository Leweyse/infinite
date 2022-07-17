import { createRef, useRef, useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

import { Figure, Title } from '@/components/blocks';

import './template2.scss';

const Template2 = (props: any) => {
    let imageInfo = props.imageInfo;
    let colorScheme = props.scheme;

    const img = useRef<HTMLImageElement>(null);
    const titleRefs = useRef<RefObject<HTMLHeadingElement>[]>([]);
    const title = useRef(['A DEV', 'CAN BE', 'A DESIGNER']);

    if (titleRefs.current.length !== title.current.length) {
        titleRefs.current = Array(title.current.length)
            .fill(0)
            .map((_, i) => titleRefs.current[i] || createRef());
    }

    let tl = gsap.timeline();

    useEffect(() => {
        gsap.set(img.current, {
            xPercent: -35,
            yPercent: -25,
        });

        window.addEventListener('mousemove', (e) => {
            gsap.to(img.current, {
                duration: 0.5,
                ease: 'power1.out',
                x: e.clientX,
                y: e.clientY,
            });
        });

        title.current.forEach((piece, idx) => {
            titleRefs.current[idx].current?.addEventListener(
                'mouseover',
                () => {
                    img.current?.classList.add('visible');
                }
            );

            titleRefs.current[idx].current?.addEventListener(
                'mouseleave',
                () => {
                    img.current?.classList.remove('visible');
                }
            );
        });
    }, [tl]);

    return (
        <div id={'t2-main'}>
            <Figure ref={img} imageInfo={imageInfo} className={'t2-figure'} />
            <div className={'t2-title'}>
                {title.current.map((piece, idx) => {
                    return (
                        <Title
                            key={idx}
                            content={piece}
                            color={colorScheme.txtColor}
                            ref={titleRefs.current[idx]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Template2;
