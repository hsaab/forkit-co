import React from 'react';
import forkitlogo from '../style/assets/forkitlogo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withAlert } from 'react-alert'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      email: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.first.length >= 2 && this.state.email.includes('@')) {
      axios.get(`https://forkit-signup.herokuapp.com/add?first=${this.state.first}&email=${this.state.email}`)
        .then((result) => {
          this.setState({
            first: '',
            email: ''
          })
          this.props.alert.success(<div style={{ color: 'white', fontFamily: 'Futura', fontSize: '1.5em' }}>Success!</div>);
          console.log(result);
        })
        .catch((e) => {
          console.log(e);
        })
    } else if (this.state.first.length >= 2 && !this.state.email.includes('@')){
      this.props.alert.error(<div style={{ color: 'white', fontFamily: 'Futura', fontSize: '1.5em' }}>Fix email field.</div>)
    } else {
      this.props.alert.error(<div style={{ color: 'white', fontFamily: 'Futura', fontSize: '1.5em' }}>Fix name field.</div>)
    }
  }

  render() {
    return (
      <div className="navContainer">
        <img src={forkitlogo} className="navLogo"/>
        <div className='inputCont'>
          <input
            type='text'
            className='inputFirst'
            placeholder='First Name'
            onChange={(e) => this.setState({ first: e.target.value })}
            />
          <input
            type='text'
            className='inputEmail'
            placeholder='Email'
            onChange={(e) => this.setState({ email: e.target.value })}
            />
          <button
            className="signature"
            onClick={(e) => this.handleSubmit(e)}>Sign Up for Updates</button>
        </div>
      </div>
    );
  }
}

export default withAlert(Home)
