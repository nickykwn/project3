import React, { Component } from 'react';
import './LogInForm.css';

class LogInForm extends Component {

  render(){
    return (
<<<<<<< HEAD
      <div id='form-container'>
=======
      <div className={this.props.logInFormDisplay}>
>>>>>>> 20ffc765159c57ad97cd78476dba5af5ed6d414a
        <input
          type="text"
          placeholder="username"
          value={this.props.logInUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.logInPassword}
          onChange={this.props.updateFormPassword}
        />
        <div className="formbutton" onClick={this.props.loginFunctions}>
          log in
        </div>
      </div>
    );
  }
}
export default LogInForm;
