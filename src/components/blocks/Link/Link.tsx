import './Link.scss';

const Link = (props: any) => {
    return (
        <a
            className={'link'}
            id={props.id}
            href={props.link}
            target='_blank'
            rel='noreferrer'
        >
            {props.content}
        </a>
    );
};

export default Link;
