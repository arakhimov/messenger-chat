import React, { Component, ChangeEvent, FormEvent } from 'react';
import './FormRegistration.css';
import { RouteComponentProps } from 'react-router-dom';

type stateType = {login: string, password: string};

type FormAutorizationProps = {
  changeUser: (name: string) => void
};

export class FormRegistration extends Component<FormAutorizationProps & RouteComponentProps> {

  state: stateType = {
    login: '',
    password: ''
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'login') {
      this.setState({login: event.target.value});
    }
    if (event.target.name === 'password') {
      this.setState({password: event.target.value});
    }
  }

  handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    if (this.state.login.length !== 0 && this.state.password.length !== 0) {
      event.preventDefault();
      this.props.history.push('/middle.react.praktikum.yandex/chat/');
      this.props.changeUser(this.state.login);
    }
  }

  render() {
    const {login, password} = this.state;
    return (
      <form className="FormAutorization">
        <input name="login" value = {login} onChange = {this.handleChange} type="text" placeholder="логин" autoComplete="off" className="FormAutorization__input-login" required />
        <input name="password" value = {password} onChange = {this.handleChange} type="password" placeholder="пароль" autoComplete="off" className="FormAutorization__input-password" required />
        <button type="submit" onClick = {this.handleSubmit} className="FormAutorization__button">Войти</button>
      </form>
    )
  }
}