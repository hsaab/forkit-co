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
        <img alt="" className='emblem' src={require('../style/assets/forkitemblem.png')}/>
        <div className='step1'>4. Play the game to update your prefs</div>
        <div className='iphoneCont'>
          <img alt="" className='iphone' src={require('../style/assets/Status1-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Price-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Cuisine-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Date-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Status2-iphone.png')}/>
        </div>
      </div>
    )
  }
}

export default Tut4;
