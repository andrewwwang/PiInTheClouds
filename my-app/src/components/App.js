import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Andrew's Pi in the Clouds</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>D2CMessage</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/monitor">
                <NavItem eventKey={2}>Monitor</NavItem>
              </IndexLinkContainer>
              
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="https://github.com/endurablepants/PiInTheClouds">GitHub</NavItem>
            </Nav>  
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
