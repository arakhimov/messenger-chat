import React from 'react';
import './Messanger.css';
import {ChatList} from '../chatList/ChatList';
import initialChats from '../initialChats/initialChats';
import {Chat} from '../chat/Chat';
import {Message} from '../../types';

const chats = initialChats;
chats.forEach(item => {item.messages.sort((a, b) => b.date.day.localeCompare(a.date.day))});
chats.sort((a, b) => b.messages[0].date.day.localeCompare(a.messages[0].date.day));

export class Messanger extends React.Component {

  state = {
    messageList: [],
    idActiveChat: ''
  };

  handleChatActive(nameChat:string, messagesChat: Array<Message>) {
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
        <ChatList handlerChatList = {this.handleChatActive.bind(this)} state = {this.state} chats={chats} />  
        <Chat messages = {this.state.messageList}/>
        </main>
      </div>
    );
  }
}
