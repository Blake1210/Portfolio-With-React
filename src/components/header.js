import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./navigation";
import Portfolio from "./portfolio";
import Resume from './resume';
import ContactForm from "./contact";
import aboutMe from "./about";

class Header extends Component {
     render() {
    return (
      <div></div>
    )
     };
}



// class Header extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <header>
//           <Navigation />
//         </header>

// //         <div className="content">
// //           <Route exact path="/" render={() => <Redirect to="/about" />} />
// //           <Route path="/about" component={aboutMe} />
// //           <Route path="/portfolio" component={Portfolio} />
// //           <Route path="/contact" component={ContactForm}/>
// //           <Route path="/resume" component={Resume}/>
// //         </div>
// //       </HashRouter>
//     );
//   }
// };



export default Header;