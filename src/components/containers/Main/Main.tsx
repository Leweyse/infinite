import { useState, useRef, useEffect } from 'react';
import { Section } from '@/components/containers';

let pages = [<Section key={0} />, <Section key={1} />, <Section key={2} />];

const Main = () => {
    const [display, setDisplay] = useState(false);

    let keyRef = useRef(3);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;

            if (scrollTop + clientHeight >= (scrollHeight - 5) / 1.15)
                setDisplay(true);
        });
    }, []);

    if (display) {
        pages.push(<Section key={keyRef.current} />);
        keyRef.current++;
        setDisplay(false);
    }

    return <main id={'main'}>{pages.map((section) => section)}</main>;
};

export default Main;
