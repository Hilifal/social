import React from "react";
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Section";

function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <Profile />
    </div>
  );
}




export default App;
//./-файл назодится в той же папке что и
// компонента - это функция которая возвращает разметку (JSX) также это тег
// ctrl f k