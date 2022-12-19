import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/navigation";
import Portfolio from "../../components/portfolio";
import Contact from '../../components/contact';
import Resume from '../../components/resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
};

function About() {

  return(
      <section className="container">
          <h2 class="top-title">Blake Peterson</h2>
          <hr></hr>
          <div>
              <img class="mb-5" id="avatar" src="https://avatars.githubusercontent.com/u/108911520?v=4" alt="Blake Peterson" />

              <p>
              
              </p>
              <p>
              
              </p>
              <p>
              
              </p>
          </div>
      </section>
  )
};

function Footer() {   
  return (
  <footer className="footer bg-dark fixed-bottom">
      <a href="https://github.com/Blake1210"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
      <a href="https://www.linkedin.com/in/blake-peterson-61b11a158/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
  </footer>
  )
};

export default Header;