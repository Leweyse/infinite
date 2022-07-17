import { useState, useEffect } from 'react';

import { Section } from '@/components/containers';

import './Main.scss';

const Main = () => {
    const [sections, addSections] = useState(3);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;

            if (scrollTop + clientHeight >= (scrollHeight - 5) / 1.15)
                setDisplay(true);
        });
    }, []);

    if (display) {
        addSections(sections + 1);
        setDisplay(false);
    }

    return (
        <main id={'main'}>
            {Array.from(Array(sections)).map((section, idx) => (
                <Section key={idx} />
            ))}
        </main>
    );
};

export default Main;
