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
                <Profile image={hassan} name={'Vasish'} title={'Co-Founder'} bio={'Hassan Saab loves kbbq'}/>
                <Profile image={hassan} name={'Hassan Saab'} title={'Co-Founder'} bio={`Hassan architects and prioritizes
                   key product themes and strategies, while supporting the front-end and back-end team in execution and
                   implementation. Previously, Hassan worked in investment banking, focusing on business technology M&A and
                   strategic advisory. Hassan graduated from the Wharton School of Business with a concentration in Finance. In
                   his spare time, he creates a wide range of music (classical, EDM, etc.) and plays sports.`}/>
              </Col>
              <Col xs={{ size: 5, order: 3 }}>
                <Profile image={hassan} name={'Brandon'} title={'Co-Founder'} bio={`Brandon is a frontend-focused developer with a
                  keen sense for UI/UX layout and design. He originally created the idea for Fork It in preparation for a hackathon.
                  Prior to becoming a software engineer, Brandon was a business student at Washington University in St. Louis Olin
                  Business School with healthcare and management consulting experience. Outside of coding, Brandon is an avid skiier
                  and outdoor adventurer. His dream is to one day be invited to perform on stage with Chance The Rapper.`}/>
                <Profile image={hassan} name={'Paul'} title={'Co-Founder'} bio={`Paul is one of the primary backend developers
                  who provides support and insight on systems design decisions. Previously, Paul worked as a freelance full stack
                  developer and as a product designer at various start ups in the Bay Area. Paul is currently a Computer Engineering
                  student attending Santa Clara University. In his free time, Paul enjoys games, eSports, long walks on the beach, and
                  outdoor activities.`}/>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </div>
    )
  }
}


export default About;
