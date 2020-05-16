import React, { FormEvent } from 'react';
import './Intro.css';
import { RouteComponentProps } from 'react-router-dom';

export const Intro: React.FC<RouteComponentProps> = ( {history} ) => {
  
  // TODO: дублирование кода, подумать над типом, с помощью которого можно будет извлечь className из eventTarget.
  const handleSubmitReg = (event: FormEvent<HTMLButtonElement>) => {
    history.push('/middle.react.praktikum.yandex/reg');
    console.log(event.target);
  }

  // TODO: дублирование кода, подумать над типом, с помощью которого можно будет извлечь className из eventTarget.
  const handleSubmitAuth = (event: FormEvent<HTMLButtonElement>) => {
    history.push('/middle.react.praktikum.yandex/auth');
    console.log(event.target);
  }

  return (
  <div className="Intro">
    <h1 className="Intro__header">Войдите или зарегистрируйтесь</h1>
    <button onClick = { handleSubmitReg } className="Intro__button Intro__button_registration">Регистрация</button>
    <button onClick = { handleSubmitAuth } className="Intro__button Intro__button_authorization">Вход</button>
  </div>)
}