import React, { Component } from 'react';
import logo from '../logo.svg';
import downIcon from '../style/assets/downWhite.png';
import downGrey from '../style/assets/downGrey.png';
import '../App.scss';
import Navbar from '../Components/Navbar.js';
import scrollToComponent from 'react-scroll-to-component';
import ReactPlayer from 'react-player';
import Tutorial from '../Containers/Tutorial.js';
import Swiper from 'react-id-swiper';
import friends2 from '../style/assets/friends2.png';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col, Row, Jumbotron, Container } from 'reactstrap';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seeClass: 'background-dummy'
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      seeClass: 'seeCont'
    }), 34000)

    scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 500});
  }

  scrollToTut1() {
    scrollToComponent(this.Tut1, { offset: 75, align: 'top', duration: 500});
  }

  scrollToContact() {
    scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 500});
  }

  render() {
    return (
      <div>
        <section className='vidSection' ref={(section) => { this.Home = section; }}>
          <Navbar/>
          <div className='background-vid'>
            <ReactPlayer url={require('../ForkItPromo.mp4')} playing width='100%' height='auto'/>
            <div className={this.state.seeClass} >
              <div className='seeText' onClick={() => {this.scrollToTut1()}}>See how it works</div>
              <img src={downIcon} className="downIcon" onClick={() => {this.scrollToTut1()}}/>
            </div>
          </div>
        </section>
        <section className='tutorial' ref={(section) => { this.Tut1 = section; }}>
          <Tutorial/>
          <div className='contactCont'>
            <div className='contactText' onClick={() => {this.scrollToContact()}}>Contact Us</div>
            <img src={downGrey} className="downIcon" onClick={() => {this.scrollToContact()}}/>
          </div>
        </section>
        <section className='tutorial' ref={(section) => { this.contact = section; }}>
          <div className='picCont'>
            <img className='contactPic' src={require('../style/assets/ContactUs.png')}/>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;
