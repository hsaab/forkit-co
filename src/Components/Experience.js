import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class ExperiencePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a style={{color: 'black'}} href="/">Fork It</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} title="Product" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Link to='/eats'>Eats</Link></MenuItem>
              <MenuItem eventKey={3.2}><Link to='/experience'>Experience</Link></MenuItem>
            </NavDropdown>
            <NavItem eventKey={1}><Link to='/about'>About</Link></NavItem>
            <NavItem eventKey={2}><Link to='/contact'>Contact Us</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <Navbar.Brand>
              <img src='https://sophosnews.files.wordpress.com/2016/09/yelp.png?w=780&h=408&crop=1'/>
            </Navbar.Brand>
            <Navbar.Brand>
              <img src='http://www.thenewsminute.com/sites/default/files/uber%20facebook%20750x500.jpg'/>
            </Navbar.Brand>
            <Navbar.Brand>
              <img src='https://www.codot.gov/safety/seatbelts-carseats/assets/year-of-the-seat-belt/lyft.jpg/image'/>
            </Navbar.Brand>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default ExperiencePage;
