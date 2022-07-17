import { forwardRef, ForwardedRef } from 'react';

import './Title.scss';

const Title = forwardRef(
    (props: any, ref: ForwardedRef<HTMLHeadingElement>) => {
        return (
            <h1
                ref={ref}
                id={props.id}
                className={'title ' + props.className}
                style={{ color: props.color }}
            >
                {props.content}
            </h1>
        );
    }
);

Title.displayName = 'Title';

export default Title;
