import React, { Component } from 'react';
import './SignUpForm.css';

// create a React Component called _App_
class SignUpForm extends Component {

  render(){
    return (
<<<<<<< HEAD
      <div id='form-container'>
=======
      <div className={this.props.signUpFormDisplay}>
        <input
          type="text"
          placeholder="username"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
>>>>>>> 20ffc765159c57ad97cd78476dba5af5ed6d414a
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <div className="formbutton" onClick={this.props.handleFormSubmit}>
          register
        </div>
      </div>
    );
  }
}


export default SignUpForm;
