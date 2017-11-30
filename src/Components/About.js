import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import forkitlogo from '../style/forkitlogo.png';

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <a href='/'><img src={forkitlogo} width="100"/></a>
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
            <NavItem eventKey={3.3}>Powered By</NavItem>
            <Navbar.Brand>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png'/>
            </Navbar.Brand>
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
        <strong style={{color: 'white'}}>About Fork It</strong>
        <p style={{color: 'white'}}>Founders: Hassan, Vasish, Paul, Brandon</p>
        <div>
          <p style={{color: 'white'}}>The founders met during a hackathon and came up with the idea to create a decision making app for
          indecisive people. This idea became Fork It, an app that produces spontaneous decisions for its users. We liken our app to a kind of
          a work flow aggregator in a sense where users do not have to go to multiple apps and websites in order to research and decide on a place to go or eat.
          Our app will make these decisions for you at high accuracy using our advanced machine learning algorithm which asks the users questions.</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
