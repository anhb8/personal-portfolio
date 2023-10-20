import React from "react";
import './App.css';
import logo from './assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Education from './components/education/Education';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <About />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;