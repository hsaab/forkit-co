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
                <Profile image={hassan} name={'Vasish'} bio={'Hassan Saab loves kbbq'}/>
                <Profile image={hassan} name={'Hassan'} bio={'Hassan Saab loves kbbq'}/>
              </Col>
              <Col xs={{ size: 5, order: 3 }}>
                <Profile image={hassan} name={'Brandon'} bio={'Hassan Saab loves kbbq'}/>
                <Profile image={hassan} name={'Paul'} bio={'Hassan Saab loves kbbq'}/>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </div>
    )
  }
}


export default About;
