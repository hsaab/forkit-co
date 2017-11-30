import React, { Component } from 'react';
import logo from '../logo.svg';
import forkitlogo from '../style/forkitlogo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import ReactPlayer from 'react-player';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
          <Navbar>
            <Navbar.Header>
                <a href='/'><img src={forkitlogo} width="100"/></a>
            </Navbar.Header>
            <Nav>
              <NavDropdown eventKey={3} title="Product" id="basic-nav-dropdown">
                <Link to ='/eats'><MenuItem eventKey={3.1}>Eats</MenuItem></Link>
                <Link to='/experience'><MenuItem eventKey={3.2}>Experience</MenuItem></Link>
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
        <ReactPlayer style={{position:'fixed', minWidth: '100%', minHeight: '91%', height: 'auto', width: 'auto', backgroundSize: 'cover'}} playing loop url="https://www.youtube.com/watch?v=XGHTVGv9N2E"/>
      </div>
    )
  }
}


export default HomePage;
