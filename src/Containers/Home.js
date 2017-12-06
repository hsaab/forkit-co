import React, { Component } from 'react';
import logo from '../logo.svg';
import forkitlogo from '../style/assets/forkitlogo.png';
import '../App.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Navbar from '../Components/Navbar.js';
import friends from '../style/assets/friends2.png';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Navbar/>
        <img src={friends} className='bg'/>
      </div>
    )
  }
}


export default HomePage;
