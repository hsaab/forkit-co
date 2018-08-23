import React, { Component } from 'react';
import downIcon from '../style/assets/downWhite.png';
import downGrey from '../style/assets/downGrey.png';
import '../App.scss';
import Navbar from '../Components/Navbar.js';
import scrollToComponent from 'react-scroll-to-component';
import Tutorial from '../Containers/Tutorial.js';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seeClass: 'background-dummy',
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      seeClass: 'seeCont'
    }), 34400)
    scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 500});
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
            {this.state.width < 711 ? <img alt="" className='background-pic' src={require('../style/assets/background-pic.png')}/> :
            <video src={require('../ForkItPromo.mp4')} muted autoPlay width='100%' height='auto'>
            </video>}
            {this.state.width < 711 ?
              <div className='seeCont'>
                <div className='seeText' onClick={() => {this.scrollToTut1()}}>See how it works</div>
                <img alt="" src={downIcon} className="downIcon" onClick={() => {this.scrollToTut1()}}/>
              </div> :
              <div className={this.state.seeClass}>
                <div className='seeText' onClick={() => {this.scrollToTut1()}}>See how it works</div>
                <img alt="" src={downIcon} className="downIcon" onClick={() => {this.scrollToTut1()}}/>
              </div>}
            <div className={this.state.seeClass}>
              <div className='seeText' onClick={() => {this.scrollToTut1()}}>See how it works</div>
              <img alt="" src={downIcon} className="downIcon" onClick={() => {this.scrollToTut1()}}/>
            </div>
          </div>
        </section>
        <section className='tutorial' ref={(section) => { this.Tut1 = section; }}>
          <Tutorial/>
          <div className='contactCont'>
            <div className='contactText' onClick={() => {this.scrollToContact()}}>Contact Us</div>
            <img alt="" src={downGrey} className="downIcon" onClick={() => {this.scrollToContact()}}/>
          </div>
        </section>
        <section className='tutorial' ref={(section) => { this.contact = section; }}>
          <div className='picCont'>
            <img alt="" className='contactPic' src={require('../style/assets/ContactUs.png')}/>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;
