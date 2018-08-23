import React, { Component } from 'react';
import downIcon from '../style/assets/downWhite.png';
import '../App.scss';
import scrollToComponent from 'react-scroll-to-component';
import Swiper from 'react-id-swiper';
import Tut1 from '../Components/Tut1.js';
import Tut2 from '../Components/Tut2.js';
import Tut3 from '../Components/Tut3.js';
import Tut4 from '../Components/Tut4.js';
import Tut5 from '../Components/Tut5.js';

class Tutorial extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const params = {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
   };
    return (
      <Swiper {...params}>
        <div className='tutBackground1'> <Tut1/> </div>
        <div className='tutBackground2'> <Tut2/> </div>
        <div className='tutBackground3'> <Tut3/> </div>
        <div className='tutBackground4'> <Tut4/> </div>
        <div className='tutBackground5'> <Tut5/> </div>
      </Swiper>
    )
  }
}

export default Tutorial;
