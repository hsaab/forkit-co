import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import forkitlogo from '../style/assets/forkitlogo.png';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Row, Jumbotron, Container } from 'reactstrap';
import Navbar from '../Components/Navbar.js';

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="subContainer">
          <Jumbotron fluid>
            <Container fluid>
              <h2 className="display-3">Contact Us</h2>
              <p className="lead">Contact Us @ forkit.co@gmail.com</p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default ContactPage;
