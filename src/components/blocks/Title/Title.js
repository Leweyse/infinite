import React from 'react';

const Title = React.forwardRef((props, ref) => {
    return (
        <p ref={ref} id={props.id} className={'title ' + props.className} style={{color: props.color}}>{props.content}</p>
    )
})

export default Title;