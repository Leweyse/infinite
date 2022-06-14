const Text = (props: any) => {
    return (
        <p className={'text'} id={props.id} style={{ color: props.accent }}>
            {props.text}
        </p>
    );
};

export default Text;
