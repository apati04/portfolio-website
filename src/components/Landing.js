import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar className="fixedTop">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Andrew Patipaksiri</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#home">Home</NavItem>
            <NavItem eventKey={2} href="#about">About Me</NavItem>
            <NavItem eventKey={3} href="#projects">My work</NavItem>
            <NavItem eventKey={4} href="#contact">Contact Me!</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
export default Landing;
