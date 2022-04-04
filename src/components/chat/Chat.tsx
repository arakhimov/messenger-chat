import React, { Component } from 'react';
import './Chat.css';
import { ChatProps, chatStateProps } from '../../types';
import { MessageItem } from '../messageItem/MessageItem';
import { FormAddMessage } from '../FormAddMessage/FormAddMessage';
import { CurrentDate } from '../CurrentDate/CurrentDate';
import { AuthorAvatar } from '../AuthorAvatar/AuthorAvatar';


export class Chat extends Component<ChatProps> {

  chatState: chatStateProps = {
    currentDate: 0,
    author: ''
  }

  chatStateClear = () => this.chatState;

  setMessage = (author: string, currentDate: number) => {
    this.chatState = { author, currentDate };
  }

  findUserAvatar = (name: string) => this.props.chatItem.users.find(user => user.login === name)?.avatarUrl;

  render() {
    const { chatItem, addMessage } = this.props;
    const { messages } = chatItem;
    return (
      <div className="chat-screen">
        <div>
          {messages?.map((message, index: number) => {
            return (
              <div key = {index.toString()}>
                <CurrentDate date = {message.date} currentDate = { this.chatState.currentDate } />
                {(this.chatState.currentDate = message.date) && null}
                <div className="message__wrapper">
                  <AuthorAvatar 
                    message = { message } 
                    currentAuthor = { this.chatState.author } 
                    userAvatar = { this.findUserAvatar(message.author) } />
                  {(this.chatState.author = message.author) && null}
                  <MessageItem message = { message } />
                </div>  
              </div>
          )})}
          {this.setMessage('', 0)}
        </div>
        {(messages.length !== 0) && <FormAddMessage addMessage = { addMessage } />}    
      </div>
    );
  }
};