import React, { Component } from 'react';
import logo from '../logo.svg';
import forkitlogo from '../style/assets/forkitlogo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Navbar from '../Components/Navbar.js';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Row, Jumbotron, Container } from 'reactstrap';
import hassan from '../style/assets/Hassan.jpg';
import Profile from '../Components/Profile.js';
import Mission from '../Components/Mission.js';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Navbar/>
        <div className="subContainer">
          <Mission />
        </div>
        <div className="subContainer">
          <Jumbotron>
            <h2 className="display-3">Founders</h2>
            <Row>
              <Col xs={{ size: 5, order: 3, offset: 1 }}>
                <Profile image={hassan} name={'Vasish'} title={'Head of Product'} bio={'Hassan Saab loves kbbq'}/>
                <Profile image={hassan} name={'Hassan Saab'} title={'Head of Product'} bio={`Hassan architects and prioritizes
                   key product themes and strategies, while supporting the front-end and back-end team in execution and
                   implementation. Previously, Hassan worked in investment banking, focusing on business technology M&A and
                   strategic advisory. Hassan graduated from the Wharton School of Business with a concentration in Finance. In
                   his spare time, he enjoys creating and mixing a wide range of music (classical, EDM, etc.) and playing sports.`}/>
              </Col>
              <Col xs={{ size: 5, order: 3 }}>
                <Profile image={hassan} name={'Brandon'} title={'Head of Product'} bio={'Hassan Saab loves kbbq'}/>
                <Profile image={hassan} name={'Paul'} title={'Head of Product'} bio={'Hassan Saab loves kbbq'}/>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </div>
    )
  }
}


export default About;
