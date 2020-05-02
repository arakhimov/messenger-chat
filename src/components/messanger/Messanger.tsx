import React, {Component} from 'react';
import './Messanger.css';
import {ChatList} from '../chatList/ChatList';
import {initialChats} from '../../data/initialChats';
import {Chat} from '../chat/Chat';

// const chats = initialChats;
// Делал это перепресваивание из-за концепции чистых функций, чтобы не изменять входные данные.

type Message = {
  date: {
     day: string,
     time: string,
  },
  author: string,
  text: string,
}

export class Messanger extends Component {

  state = {
    messageList: [],
    idActiveChat: ''
  };

  handleChatActive = (nameChat:string, messagesChat: Message[]): void => {
    this.setState({
      idActiveChat: nameChat,
      messageList: messagesChat
    });
  }

  render() {
    return (
      <div className="messanger">
        <header className="header">Header</header>
        <main className="main">
        <ChatList handlerChatList = {this.handleChatActive} activeChat = {this.state} chats={initialChats} />  
        <Chat messages = {this.state.messageList}/>
        </main>
      </div>
    );
  }
}
