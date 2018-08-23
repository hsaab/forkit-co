import React, { Component } from 'react';
import '../App.scss';

class Tut1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='tutCont'>
        <img alt="" className='emblem' src={require('../style/assets/forkitemblem.png')}/>
        <div className='step1'>1. Pick what you feel like doing</div>
        <div className='iphoneCont'>
          <img alt="" className='iphone' src={require('../style/assets/Eat-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Experience-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Explore-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Play-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Party-iphone.png')}/>
        </div>
      </div>
    )
  }
}

export default Tut1;
