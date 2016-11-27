import React, { Component } from 'react';
<<<<<<< HEAD
import './SignUpForm.css';

// create a React Component called SignUpForm
class SignUpForm extends Component {

  render() {
    return (
      <div id="form-container">
=======
import style from './SignUpForm.css';

// create a React Component called _App_
class SignUpForm extends Component {

  render(){
    return (
      <div id={style['form-container']}>
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
        <input
          type="text"
          placeholder="email"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          SignUp!
        </button>
      </div>
    );
  }
}

<<<<<<< HEAD
export default SignUpForm;
=======
export default SignUpForm;
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
