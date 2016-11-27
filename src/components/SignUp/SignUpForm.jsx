import React, { Component } from 'react';
import './SignUpForm.css';

// create a React Component called SignUpForm
class SignUpForm extends Component {

  render() {
    return (
      <div id="form-container">
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

export default SignUpForm;
