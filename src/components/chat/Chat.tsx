import React, { Component } from 'react';
import './Chat.css';
import { Message, User } from '../../types';
import { MessageItem } from '../messageItem/MessageItem';
import { FormAddMessage } from '../FormAddMessage/FormAddMessage';

const regExpDate = /.*([A-Z][a-z]{2})\s(\d{2})\s(\d{4}).*/;

type CurrentDateProps = {
  date: number,
  currentDate: number
}

const CurrentDate: React.FC<CurrentDateProps> = ({date, currentDate}) => (date === currentDate ? null :
  <p className="chat-screen__date">{`${new Date(date)}`.replace(regExpDate, '$2 $1 $3')}</p>);

type AuthorAvatarProps = {
  message: Message
  currentAuthor: string,
  users: User[],
}
  
const AuthorAvatar: React.FC<AuthorAvatarProps> = ({message, currentAuthor, users}) => 
  (message.author === currentAuthor ? null : <img src={users?.find(user => user.login === message.author)?.avatarUrl} 
    alt="" className="message__author-image"/>)

export type ChatProps = {
  chatItem: { users: User[], messages: Message[] },
  addMessage: (value: string) => void
}


type chatStateProps = {
  currentDate: number,
  author: string
}

export class Chat extends Component<ChatProps> {

  chatState: chatStateProps = {
    currentDate: 0,
    author: ''
  }

  setMessage = (author: string, currentDate: number) => {
    this.chatState = {author, currentDate};
  }

  render() {
    const {chatItem, addMessage} = this.props;
    const {messages, users} = chatItem;
    return (
      <div className="chat-screen">
        <div>
          {messages?.map((message, index: number) => {
            return (
              <div key = {index.toString()}>
                <CurrentDate date = {message.date} currentDate = {this.chatState.currentDate} />
                {(this.chatState.currentDate = message.date) && null}
                <div className="message__wrapper">
                  <AuthorAvatar message = {message} currentAuthor = {this.chatState.author} users = {users} />
                  {(this.chatState.author = message.author) && null}
                  <MessageItem message = {message} />
                </div>  
              </div>
          )})}
          {this.setMessage('', 0)}
        </div>
        {(messages.length !== 0) && <FormAddMessage addMessage = {addMessage} />}    
      </div>
    );
  }
};