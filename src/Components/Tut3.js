import React, { Component } from 'react';
import '../App.scss';

class Tut3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='tutCont'>
        <img alt="" className='emblem' src={require('../style/assets/forkitemblem.png')}/>
        <div className='step1'>3. Fill out the facts, add some friends and turn on +1s to meet your friend's friends</div>
        <div className='iphoneCont'>
          <img alt="" className='iphone' src={require('../style/assets/Facts-iphone.png')}/>
          <img alt="" className='iphone' src={require('../style/assets/Friends-iphone.png')}/>
        </div>
      </div>
    )
  }
}

export default Tut3;
