import React from 'react';
import { Redirect } from 'react-router-dom';
import password from '../password';
import axios from 'axios';

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    if (e.target.password.value == password) {
      sessionStorage.setItem('user', e.target.user.value)
      axios.post('/user/createUser', { nombre: e.target.user.value })
        .then(() => this.props.history.push('/'));
    }
  }

  render() {
    return (
      <div className='login'>
        <img src='/images/mercadoEnvios.jpg' />
        <form onSubmit={this.login}>
          <label htmlFor="user">User</label>
          <input type='text' name='user' className='form-control' /><br />
          <label htmlFor="password">Password</label>
          <input type='password' name='password' className='form-control' /><br></br>
          <input type='submit' value='Login' className='btn btn-primary' />
        </form>
      </div>
    )
  }
}
