const Article = (props) => {
    return (

        <article>
            <img src={props.src} alt={props.alt} />
            <p onClick={() =>
                document.documentElement.style.setProperty('--clr-black', 'green')
            }>Hello</p>
        </article>
    )
}

export default Article;