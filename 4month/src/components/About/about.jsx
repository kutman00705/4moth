

function About(props) {
    return (
        <>
            <h2>{props.info.title}</h2>
            <p>{props.info.body}</p>
        </>
    )
}

export default About;