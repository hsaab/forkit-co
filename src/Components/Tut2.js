import React, { Component } from 'react';
import '../App.scss';

class Tut2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='tutCont'>
        <img alt="" className='emblem' src={require('../style/assets/forkitemblem.png')}/>
        <div className='step1'>2. Create a new multiplayer experience</div>
        <div className='iphoneCont'>
          <img alt="" className='iphone' src={require('../style/assets/Eat-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/MyEvents-iphone.png')}/>
        </div>
      </div>
    )
  }
}

export default Tut2;
