import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import axios from 'axios';
import bcrypt from 'bcryptjs';

class PasswordRecovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      match: true,
      email: '',
      name: '',
      timeStamp: 0,
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNP(ev){
    ev.preventDefault();
    this.setState({
      newPassword: ev.target.value
    });
  }

  handleCP(ev){
    ev.preventDefault();
    this.setState({
      confirmPassword: ev.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.newPassword === this.state.confirmPassword && this.state.newPassword.length > 7 && (Date.now() - this.state.timeStamp < 30*1000*60)) {
      this.setState({
        match: true,
      })
      var salt = bcrypt.genSaltSync(10);
      var params = {
        password: '$BIG_SHAQ102$',
        tableName: 'users',
        set: `password=${bcrypt.hashSync(this.state.newPassword, salt)}`,
        conditions: `email=${this.state.email}`
      }
      // window.location.href = 'http://www.google.com';
      axios.get('https://guarded-dawn-44803.herokuapp.com/db')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      this.setState({
        match: false,
        newPassword: '',
        confirmPassword: ''
      })
    }
  }
  componentDidMount() {
    var queryString = this.props.location.search.slice(this.props.location.search.indexOf('?')+1)
    var params = this.parseQueryString(queryString);
    this.setState({
      email: params.email,
      name: params.name,
      timeStamp: Number(params.timestamp)
    })
  }

  parseQueryString(queryString) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
  };

  test(e) {
    e.preventDefault();
    axios.get('https://guarded-dawn-44803.herokuapp.com/db')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log('Hello');
  }

  render() {
    return(
      <div>
        {this.state.match ? (<center><form onSubmit={(e) => /*this.handleSubmit(e)*/ this.test(e)}>
            <div>
              <p>Hi there! Reset your password here</p>
            <input type="password" placeholder="New Password" name="New Password" value={this.state.newPassword} onChange={(ev) => this.handleNP(ev)}/>
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" name="Confirm Password" value={this.state.confirmPassword} onChange={(ev) => this.handleCP(ev)}/>
          </div>
        <div>
            <input type="submit" name="Submit"/>
          </div>
        </form><p>Password must contain atleast 8 characters</p></center>)
          : (<center><form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <p>Hi there! Reset your password here</p>
              <input type="password" placeholder="Enter New Password" name="New Password" value={this.state.newPassword} onChange={(ev) => this.handleNP(ev)}/>
          </div>
          <div>
            <input type="password" placeholder="Confirm New Password" name="Confirm Password" value={this.state.confirmPassword} onChange={(ev) => this.handleCP(ev)}/>
          </div>
          <div>
            <input type="submit" name="Submit"/>
          </div>
          </form>
          <p style={{color: 'red'}}>Passwords don't match or length less than 8 characters or the link expired</p>
        </center>
      )}
      </div>
    );
  }
}
/*
What will this link contain: the name of the person, the time stamp, the email
Once the password has been changed, do not allow new password resets
*/

export default PasswordRecovery;
