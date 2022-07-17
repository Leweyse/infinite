import { forwardRef, ForwardedRef, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Figure = (props: any, ref: ForwardedRef<HTMLElement>) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const loadHandler = () => {
        gsap.to(imgRef.current, {
            duration: 0.3,
            opacity: 1,
        });
    };

    const onScrollHandler = () => {
        if (imgRef.current)
            console.log(ScrollTrigger.isInViewport(imgRef.current));
    };

    const imageInfo = props.imageInfo;

    return (
        <figure ref={ref} className={`figure ${props.className}`}>
            <img
                ref={imgRef}
                id={props.id}
                src={imageInfo.url}
                alt={imageInfo.description}
                className={'img'}
                onLoad={loadHandler}
            />
            <figcaption>
                Img by <a href={imageInfo.creditUrl}>{imageInfo.credit}</a> on
                Unsplash
            </figcaption>
        </figure>
    );
};

Figure.displayName = 'Figure';

export default forwardRef(Figure);
