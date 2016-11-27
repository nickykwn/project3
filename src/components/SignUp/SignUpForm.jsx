import React, { Component } from 'react';
import './SignUpForm.css';

// create a React Component called _App_
class SignUpForm extends Component {

  render(){
    return (
      <div id='form-container'>
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


export default SignUpForm;
