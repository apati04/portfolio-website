import React, { Component } from 'react';
// import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import './css/styles.css';
import {Scrollspy} from 'react-scrollspy'
import { Navbar, Nav } from 'react-bootstrap';
import bg from './images/bp_background.jpg';
const style={
  homeSection: {
    background: `url(${bg})`, backgroundSize: '100% 100%', color: 'white'
  },
  projectSection: {
    background: "#03a9f4", backgroundSize: '100% 100%', color: 'white',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Andrew Patipaksiri</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <Scrollspy className="nav navbar-nav" items={ ['home', 'about','projects']} currentClassName="is-current">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </Scrollspy>
          </Nav>
        </Navbar>
        <div>
          <section id="home" style={style.homeSection} className="text-center"><Home /></section>
          <section id="about"><About /></section>
          <section  id="projects" style={style.projectSection}><Projects /></section>
          <section id="contact"><ContactForm /></section>
        </div>
      </div>
    );
  }
}

export default App;
