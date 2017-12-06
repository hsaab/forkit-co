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
      <div className={this.props.class}>
        <Row>
          <Card>
            <CardBody>
              <CardTitle className="profName">{this.props.name}</CardTitle>
              <CardSubtitle className="profSub">{this.props.title}</CardSubtitle>
            </CardBody>
            <img className="headShot" src={this.props.image} alt="Card image cap" />
            <CardBody>
              <CardText> <large className="profSub"> {this.props.bio} </large> </CardText>
            </CardBody>
          </Card>
        </Row>
      </div>
    )
  }
}


export default Profile;
