import React, { Component } from 'react';
import logo from '../logo.svg';
import forkitlogo from '../style/assets/forkitlogo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar.js';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Row, Jumbotron, Container } from 'reactstrap';
import hassan from '../style/assets/Hassan.jpg';
import vasish from '../style/assets/Vasish.jpg';
import brandon from '../style/assets/Brandon.jpg';
import paul from '../style/assets/Paul.jpg';
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
                <Profile class={'eachCard'} image={vasish} name={'Vasish Baungally'} title={'Co-Founder'} bio={`Vasish is currently the lead backend developer
                  for Fork It and works on architecting system design and implementing core application functionality. He graduated
                  with a degree in Physics from the University of Chicago, where he did Astrophysics research for the South Pole
                  Telescope.  Vasish hails from a small island off the east coast of Madagascar known mostly for an extinct bird
                  (The Dodo). In his spare time, he does Taekwondo, loves to swim and likes talking about soccer. Vasish’s dream
                  is to work on strong A.I. while meditating in the Himalayas.`}/>
                <Profile class={'eachCard'} image={hassan} name={'Hassan Saab'} title={'Co-Founder'} bio={`Hassan architects and prioritizes
                   key product themes and strategies, while supporting the frontend and backend team in execution and
                   implementation. Previously, Hassan worked in investment banking, focusing on business technology M&A and
                   strategic advisory. Hassan graduated from the Wharton School of Business with a concentration in Finance. In
                   his spare time, he enjoys creating a wide range of music (classical, EDM, etc.) and dunking on 8 foot rims.
                   Hassan's dream is to one day make the NBA.`}/>
              </Col>
              <Col xs={{ size: 5, order: 3 }}>
                <Profile class={'eachCard'} image={brandon} name={'Brandon Eng'} title={'Co-Founder'} bio={`Brandon is a frontend-focused developer with a
                  keen sense for UI/UX layout and design. He originally created the idea for Fork It in preparation for a hackathon.
                  Prior to becoming a software engineer, Brandon was a business student at Washington University in St. Louis Olin
                  Business School with healthcare and management consulting experience. Outside of coding, Brandon is an avid skiier
                  and outdoor adventurer. His dream is to one day be invited to perform on stage with Chance The Rapper.`}/>
                <Profile class={'paul'} image={paul} name={'Paul Jin'} title={'Co-Founder'} bio={`Paul is one of the primary backend developers
                  who provides support and insight on systems design decisions. Previously, Paul worked as a freelance full stack
                  developer and as a product designer at various start ups in the Bay Area. Paul is currently a Computer Engineering
                  student attending Santa Clara University. In his free time, Paul enjoys games, eSports, long walks on the beach and
                  outdoor activities. Paul dreams to be the next actor to play the most interesting man in the world for Dos Equis.`}/>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </div>
    )
  }
}


export default About;
