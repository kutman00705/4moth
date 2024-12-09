import './App.css';
//components
import About from "./components/About/about";
import Title from "./components/title/Title";

//pages
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContockPage from "./pages/contockPage/ContockPage";
import TitlePage from "./pages/titlePage/TitlePage";




function App() {
  return (
    <div className="App">
        <MainPage/>

    </div>
  );
}

export default App;











const user = {
    name: "Anna",
    Age:20
}

// const name = user.name
// const Age = user.Age

const {name, Age,username} = user

console.log(name)
console.log(Age)
console.log(username)