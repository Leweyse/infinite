import { forwardRef, ForwardedRef } from 'react';

const Figure = forwardRef((props: any, ref: ForwardedRef<HTMLElement>) => {
    const imageInfo = props.imageInfo;

    return (
        <figure ref={ref} className={`figure ${props.className}`}>
            <img
                id={props.id}
                src={imageInfo.url}
                alt={imageInfo.description}
                className={'img'}
            />
            <figcaption>
                Img by <a href={imageInfo.creditUrl}>{imageInfo.credit}</a> on
                Unsplash
            </figcaption>
        </figure>
    );
});

Figure.displayName = 'Figure';

export default Figure;
