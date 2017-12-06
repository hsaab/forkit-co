import React, { Component } from 'react';
import logo from '../logo.svg';
import forkitlogo from '../style/assets/forkitlogo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Navbar from './Navbar.js';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Row } from 'reactstrap';


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="eachCard">
        <Row>
          <Card>
            <CardBody>
              <CardTitle className="profName">{this.props.name}</CardTitle>
              <CardSubtitle className="profSub">Co-Founder</CardSubtitle>
            </CardBody>
            <img className="headShot" src={this.props.image} alt="Card image cap" />
            <CardBody>
              <CardText className="profSub"> <strong>Biography: </strong> {this.props.bio}</CardText>
            </CardBody>
          </Card>
        </Row>
      </div>
    )
  }
}


export default Profile;
