// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
 import Home from './Home.js';
 import About from './About.js';
 import Skills from './Skills.js';
 import Projects from './Project.js';
 import Contact from './Contact.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 import {Link} from 'react-router-dom';
function App() {
  return (
      <Router>
        <div>
        <Nav />
        <Switch>
        <Route path ='/'  exact component={Home} />
        <Route path ='/about'   component={About} />
        <Route path ='/skills'   component={Skills} />
        <Route path ='/projects' component={Projects} />
        <Route path ='/Contact'  component={Contact} />
        </Switch>
        <Footer />
    
      </div>
      </Router>
      
      );
}

export default App;
