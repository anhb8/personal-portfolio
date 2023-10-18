import React from "react";
import './App.css';
import logo from './assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <About />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />

        </div>
    )
}

export default App;