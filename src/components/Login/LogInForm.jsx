import React, { Component } from 'react';
import './LogInForm.css';

class LogInForm extends Component {

  render(){
    return (
      <div id='form-container'>
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
export default LogInForm;
