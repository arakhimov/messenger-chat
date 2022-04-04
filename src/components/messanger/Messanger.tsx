import React, { Component } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { chatList } from "../../data/chatList";
import { messageList } from "../../data/messageList";
import { Message, User } from "../../types";
import { Chat } from "../chat/Chat";
import { ChatList } from "../chatList/ChatList";
import { FormAutorization } from "../FormAuthorization/FormAutorization";
import { FormRegistration } from "../FormRegistration/FormRegistration";
import { Intro } from "../Intro/Intro";
import "./Messanger.css";

// сортировка начальных данных
// сортировка сообщений
for (let chat in messageList) {
  messageList[chat]?.messages.sort((a: Message, b: Message) => b.date - a.date);
}

// сохраняем дату и текст последнего сообщения в специальных полях чата
for (let chat of chatList) {
  chat.date = messageList[chat.id]?.messages[0]?.date;
  chat.lastMessageText = messageList[chat.id]?.messages[0]?.text;
}

// сортировка списка чатов, чтобы сверху списка отображался последний используемый чат
chatList.sort((a, b) => b.date - a.date);

type stateType = {
  messagesChat: { users: User[]; messages: Message[] };
  idActiveChat: string;
  authorOwnProperties: { login: string; avatarUrl: string };
};

export class Messanger extends Component<RouteComponentProps> {
  // инициализируем state исходя из history.pathname - если в адресе есть id чата, то в messagesChat добавляем сообщения
  // из чата, индекс которого равен id чата из адреса, иначе пустой массив
  state: stateType = {
    messagesChat: /\d{4}/.test(this.props.location.pathname)
      ? messageList[this.props.location.pathname.replace(/.*(\d{4}).*/, "$1")]
      : { users: [], messages: [] },
    idActiveChat: "",
    authorOwnProperties: {
      login: "",
      avatarUrl:
        "https://img.freepik.com/free-photo/3d_1048-6284.jpg?size=338&ext=jpg"
    }
  };

  // выбираем чат - по клику на чат изменяем список отображемых чатов
  handleChatActive = (nameChat: string): void => {
    this.setState({
      idActiveChat: nameChat,
      messagesChat: {
        users: messageList[nameChat].users,
        messages: messageList[nameChat].messages
      }
    });
  };

  handleChangeUser = (name: string) => {
    this.setState((prevState: stateType) => ({
      authorOwnProperties: {
        login: name,
        avatarUrl: prevState.authorOwnProperties.avatarUrl
      }
    }));
  };

  // добавление сообщений - после отправки сообщения добавляем сообщение в список сообщений
  addMessage = (message: string) => {
    const now = new Date();
    this.setState((prevState: stateType) => ({
      messagesChat: {
        users: prevState.messagesChat.users.concat(
          this.state.authorOwnProperties
        ),
        messages: prevState.messagesChat.messages.concat({
          date: now.getTime(),
          author: this.state.authorOwnProperties.login,
          text: message
        })
      }
    }));
  };

  render() {
    return (
      <div className="messanger">
        <header className="header">
          <h1 className="header__title">messenger-chat</h1>
          <h2 className="header__subtitle">
            {this.state.authorOwnProperties.login}
          </h2>
        </header>
        <main className="main">
          <Route exact path="/messenger-chat/">
            <Intro {...this.props} />
          </Route>
          <Route path="/messenger-chat/reg">
            <FormRegistration
              {...this.props}
              changeUser={this.handleChangeUser}
            />
          </Route>
          <Route path="/messenger-chat/auth">
            <FormAutorization {...this.props} />
          </Route>
          <Route path="/messenger-chat/chat">
            <ChatList
              {...this.props}
              chats={chatList}
              idActiveChat={this.state.idActiveChat}
              handleChatActive={this.handleChatActive}
            />
            <Route path={this.props.location.pathname}>
              <Chat
                chatItem={this.state.messagesChat}
                addMessage={this.addMessage}
              />
            </Route>
          </Route>
        </main>
      </div>
    );
  }
}
