import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from "./components/navigation";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Resume from './components/resume';
import AboutMe from "./components/about";
import ContactForm from './components/contact';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as  Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/navigation" element={<Navigation />}/>


        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;