import React from 'react';

const Title = React.forwardRef((props, ref) => {
    return (
        <h1
            ref={ref}
            id={props.id}
            className={'title ' + props.className}
            style={{color: props.color}}
        >
            {props.content}
        </h1>
    )
})

export default Title;