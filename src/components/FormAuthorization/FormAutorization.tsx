import React, { ChangeEvent, Component, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./FormAutorization.css";

type stateType = { login: string; password: string };

export class FormAutorization extends Component<RouteComponentProps> {
  state: stateType = {
    login: "",
    password: ""
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "login") {
      this.setState({ login: event.target.value });
    }
    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  };

  handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    if (this.state.login.length !== 0 && this.state.password.length !== 0) {
      event.preventDefault();
      this.props.history.push("/messenger-chat/chat/");
    }
  };

  render() {
    const { login, password } = this.state;
    return (
      <form className="FormAutorization">
        <input
          name="login"
          value={login}
          onChange={this.handleChange}
          type="text"
          placeholder="логин"
          autoComplete="off"
          className="FormAutorization__input-login"
          required
        />
        <input
          name="password"
          value={password}
          onChange={this.handleChange}
          type="password"
          placeholder="пароль"
          autoComplete="off"
          className="FormAutorization__input-password"
          required
        />
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="FormAutorization__button"
        >
          Войти
        </button>
      </form>
    );
  }
}
