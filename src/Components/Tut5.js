import React, { Component } from 'react';
import '../App.scss';

class Tut4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='tutCont'>
        <img className='emblem' src={require('../style/assets/forkitemblem.png')}/>
        <div className='step1'>5. Once everyone’s played the game, we’ll do the rest!</div>
        <div className='iphoneCont'>
          <img className='iphone' src={require('../style/assets/Selected-iphone.png')}/>
          <img className='iphone' src={require('../style/assets/Rest1-iphone.png')}/>
          <img className='iphone' src={require('../style/assets/Rest2-iphone.png')}/>
        </div>
      </div>
    )
  }
}

export default Tut4;
