import './App.css';


function Header(){
    return(
        <header >
            <Title text = "I am footer component" />
            <p>Lorem ipsum dolor sit.</p>
        </header>
    )
}

function Footer(){
    return(
        <footer>
            <Title/>
        </footer>
    )
}

function Content(){
    return(
        <>
            <p>loren ipsum sit </p>
        </>
    )
}

function Title(props){
    console.log(props)
    return <h2>{props.text}, my name is{props.name}</h2>
}


function App() {
  return (
    <div className="App">
        <Header />
        <Footer />
        <Content />
    </div>
  );
}

export default App;

