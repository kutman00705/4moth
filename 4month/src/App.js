import React from 'react';
import './App.css'; // Глобальный стиль
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import TodosPage from './pages/todosPage/TodosPage';

function App() {
    return (
        <div className="App">
            <MainPage />
            <AboutPage />
            <TodosPage />
        </div>
    );
}


export default App;