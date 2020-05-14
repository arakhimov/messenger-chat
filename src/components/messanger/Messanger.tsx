import React, { Component } from 'react';
import './Messanger.css';
import { chatList } from '../../data/chatList';
import { messageList } from '../../data/messageList';
import { ChatList } from '../chatList/ChatList';
import { Chat } from '../chat/Chat';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import { User, Message } from '../../types'; 
import { authorOwnProperties } from '../../data/authorOwnProperties';

for (let chat in messageList) {
  messageList[chat]?.messages.sort((a: Message, b: Message) => b.date - a.date);
}

for (let chat of chatList) {
  chat.date = messageList[chat.id]?.messages[0]?.date;
  chat.lastMessageText = messageList[chat.id]?.messages[0]?.text;
}

chatList.sort((a, b) => b.date - a.date);

type stateType = {
  messagesChat: {users: User[], messages: Message[]},
  idActiveChat: string,
}

export class Messanger extends Component {

  state: stateType = {
    messagesChat: { users: [], messages: [] },
    idActiveChat: '',
  };

  handleChatActive = (nameChat:string): void => {
    this.setState(({
      idActiveChat: nameChat,
      messagesChat: {
        users: [authorOwnProperties].concat(messageList[nameChat].users),
        messages: messageList[nameChat].messages
      }
    }));
  }

  addMessage = (message: string) => { 
    const now = new Date();
    this.setState((prevState: stateType) => ({
      messagesChat : {
        users: prevState.messagesChat.users,
        messages: prevState.messagesChat.messages.concat({
          date: now.getTime(), 
          author: authorOwnProperties.login, 
          text: message
        })
      }
    }));
  }

  render() {
    return (
      <div className="messanger">
        <Router>
          <header className="header">Header</header>
          <main className="main">
            <Route path='/chat' render = {(props: RouteComponentProps) => (<ChatList {...props} 
              chats = {chatList} 
              idActiveChat = {this.state.idActiveChat} 
              handleChatActive = {this.handleChatActive} />
            )} />
            <Route path='/' render = {(props: RouteComponentProps) => 
               (<Route path={props.location.pathname}><Chat chatItem = {this.state.messagesChat} addMessage = {this.addMessage} /></Route>)
            }/>
          </main>
        </Router>
      </div>
    );
  }
}
