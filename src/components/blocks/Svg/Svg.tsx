let path: any = '';
let className = 'svg ';

const Svg = (props: any) => {
    switch (props.shape) {
        case 'square':
            path = (
                <rect
                    x={'0'}
                    y={'0'}
                    width={'2000'}
                    height={'200'}
                    style={{ fill: props.fillColor }}
                />
            );
            break;
        case 'triangle':
            path = (
                <polygon
                    points='100,0 200,150 25,200'
                    style={{ fill: props.fillColor }}
                />
            );
            break;
        case 'circle':
            path = (
                <circle
                    cx='100'
                    cy='100'
                    r='100'
                    style={{ fill: props.fillColor }}
                />
            );
            break;
        case 'parallelogram':
            path = (
                <polygon
                    points='75,0 200,0 125,200 0,200'
                    style={{ fill: props.fillColor }}
                />
            );
            break;
        case 'blob':
            path = (
                <path
                    style={{ fill: props.fillColor }}
                    d='M56.9,-11.1C66.2,10.1,60.9,43.3,41.9,57.1C22.8,70.8,-10.1,64.9,-31.6,48.2C-53.2,31.4,-63.5,3.7,-56.3,-14.6C-49.2,-32.9,-24.6,-41.8,-0.4,-41.6C23.8,-41.5,47.6,-32.4,56.9,-11.1Z'
                    transform='translate(100 100)'
                />
            );
            className = '';
            break;
        default:
            break;
    }
    return (
        <svg
            className={`${className + props.className}`}
            id={props.id}
            width={'200'}
            height={'200'}
            viewBox={'0 0 200 200'}
        >
            {path}
        </svg>
    );
};

export default Svg;

/*

<!--
            component svg props.className => class="" props.fill => fill = "" props.shape => d=""
            fill = props
            dimensions = ['triangle' => "Mx,y,x,y,x,yZ", 'square' => "Mx,y,x,y,x,y,x,yZ", 'paralellogram' => "Mx,y,x,y,x,y,x,yZ", 'circle' =>]
            -->

 */
