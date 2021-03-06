import React, { Component } from 'react';
import '../App.scss';

class Tut5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='tutCont'>
        <img alt="" className='emblem' src={require('../style/assets/forkitemblem.png')}/>
        <div className='step1'>5. Once everyone’s played the game, we’ll do the rest!</div>
        <div className='iphoneCont'>
          <img alt="" className='iphone' src={require('../style/assets/Selected-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Rest1-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Rest2-iphone.png')}/>
        </div>
      </div>
    )
  }
}

export default Tut5;
