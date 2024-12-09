import style from './mainPage.module.css'
import About from "../../components/About/about";
import Title from "../../components/title/Title";

const number = [1, 2, 3, 4, 5];

function MainPage() {

    const elements  = number.map((el,index) => <div></div>)

    return (
        <>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Title text={"Hello world"}/>
        </>
    )
}

export default MainPage;