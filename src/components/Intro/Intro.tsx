import React, { FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Intro.css";

export const Intro: React.FC<RouteComponentProps> = ({ history }) => {
  // TODO: дублирование кода, подумать над типом, с помощью которого можно будет извлечь className из eventTarget.
  const handleSubmitReg = (event: FormEvent<HTMLButtonElement>) => {
    history.push("/messenger-chat/reg");
  };

  // TODO: дублирование кода, подумать над типом, с помощью которого можно будет извлечь className из eventTarget.
  const handleSubmitAuth = (event: FormEvent<HTMLButtonElement>) => {
    history.push("/messenger-chat/auth");
  };

  return (
    <div className="Intro">
      <h1 className="Intro__header">Войдите или зарегистрируйтесь</h1>
      <button
        onClick={handleSubmitReg}
        className="Intro__button Intro__button_registration"
      >
        Регистрация
      </button>
      <button
        onClick={handleSubmitAuth}
        className="Intro__button Intro__button_authorization"
      >
        Вход
      </button>
    </div>
  );
};
