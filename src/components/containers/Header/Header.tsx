import { gsap } from 'gsap';

import { Nav, Title, Text, Svg } from '@/components/blocks';

import './Header.scss';

const Header = () => {
    let timelineSquare = gsap.timeline({ paused: false });
    let timelineCircle = gsap.timeline({ paused: false });
    let timelineParallelogram = gsap.timeline({ paused: false, repeat: -1 });
    let timelineTriangle = gsap.timeline({ paused: false, repeat: -1 });
    let timelineBlob = gsap.timeline({ paused: false, repeat: -1 });

    window.addEventListener('load', () => {
        timelineSquare.fromTo(
            '#square',
            { rotation: 10, y: -50 },
            {
                rotation: -5,
                y: 10,
                duration: 4,
                delay: 0.5,
                yoyo: true,
                yoyoEase: 'in',
                repeat: -1,
            }
        );
        timelineCircle.fromTo(
            '#circle',
            { y: -20 },
            {
                y: 50,
                duration: 3,
                delay: 0.5,
                yoyo: true,
                yoyoEase: 'slow(0.7, 0.7, false)',
                repeat: -1,
            }
        );
        timelineParallelogram
            .fromTo(
                '#parallelogram',
                { rotation: 0, y: -20 },
                { duration: 3.5, rotation: 10, ease: 'in' }
            )
            .to('#parallelogram', {
                y: 10,
                rotation: -5,
                duration: 3,
                ease: 'in',
            })
            .fromTo(
                '#parallelogram',
                { y: 10, rotation: -5 },
                { duration: 3.5, rotation: 10, y: -20, ease: 'in' }
            )
            .to('#parallelogram', { rotation: 0, duration: 3, ease: 'in' });
        timelineTriangle
            .fromTo(
                '#triangle',
                { rotation: 0, y: 0 },
                { delay: 0.5, duration: 3, rotation: -15, y: 10, ease: 'in' }
            )
            .to('#triangle', { duration: 2, rotation: 0, y: 0, ease: 'in' })
            .fromTo(
                '#triangle',
                { rotation: 0, y: 0 },
                { delay: 0.5, duration: 1.5, rotation: -15, y: 80, ease: 'out' }
            )
            .to('#triangle', {
                duration: 2,
                delay: 1,
                rotation: 0,
                y: 0,
                ease: 'out',
            });
        timelineBlob
            .fromTo(
                '#blob',
                { y: 300, rotation: 180, skewX: 0 },
                {
                    y: -300,
                    duration: 4,
                    rotation: 0,
                    skewX: 20,
                    ease: 'bounce.out',
                }
            )
            .fromTo(
                '#blob',
                { y: -300, rotation: 0, skewX: 20 },
                {
                    y: 300,
                    skewX: 0,
                    delay: 4,
                    rotation: 180,
                    duration: 4,
                    ease: 'bounce.out',
                }
            );
    });

    return (
        <header>
            <Nav />
            <Svg
                shape={'square'}
                className={'svgAbsolute svgBackground svgMedium'}
                fillColor={'#387780'}
                id={'square'}
            />
            <Svg
                shape={'triangle'}
                className={'svgAbsolute svgBackground svgMedium'}
                fillColor={'#DB93B0'}
                id={'triangle'}
            />
            <Svg
                shape={'parallelogram'}
                className={'svgAbsolute svgBackground svgMedium'}
                fillColor={'#678D58'}
                id={'parallelogram'}
            />
            <Svg
                shape={'circle'}
                className={'svgAbsolute svgBackground svgMedium'}
                fillColor={'#F18805'}
                id={'circle'}
            />
            <Svg
                shape={'blob'}
                className={'svgAbsolute svgBackground svgMedium'}
                fillColor={'#D90429'}
                id={'blob'}
            />
            <Title id={'header_title'} content={'Welcome to Infinite'} />
            <Text id={'header_text'} text={'Scroll down and explore'} />
        </header>
    );
};

export default Header;
