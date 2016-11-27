import React, { Component } from 'react';
<<<<<<< HEAD
import './LogInForm.css';

// create a React Component called LogInForm
class LogInForm extends Component {
  render() {
    return (
      <div id='form-container'>
=======
import style from './LogInForm.css';

// create a React Component called _App_
class LogInForm extends Component {

  render(){
    return (
      <div id={style['form-container']}>
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
        <input
          type="text"
          placeholder="email"
          value={this.props.logInUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.logInPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          Log In!
        </button>
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default LogInForm;
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
