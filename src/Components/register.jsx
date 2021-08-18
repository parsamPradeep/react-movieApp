import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';

class Register extends Form {
  state = { data: { username: '', password: '', name: '' }, error: {} };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label('UserName'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Password')
  };
  doSubmit = () => {
    console.log('Submited');
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default Register;
