import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { chatListProps } from "../../types";
import "./ChatListItem.css";

const regExpDate = /[a-z]{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}/i;

type ChatListItemProps = {
  chat: chatListProps;
  handlerChat: (nameChat: string) => void;
  idActiveChat: string;
};

type ChatListProps = {
  chats: chatListProps[];
};

export class ChatListItem extends Component<
  ChatListItemProps & ChatListProps & RouteComponentProps
> {
  handleClick(id: string) {
    this.props.history.push(`/messenger-chat/chat/${this.props.chat.id}`);
    this.props.handlerChat(id);
  }

  render() {
    const { chat, idActiveChat } = this.props;
    return (
      <div
        onClick={() => this.handleClick(chat.id)}
        className={
          idActiveChat === chat.id
            ? "chatListItem chatListItem_active"
            : "chatListItem"
        }
      >
        <div className="chatListItem__image-wrapper">
          <img
            src={chat.urlImage}
            alt={chat.name}
            className="chatListItem__image"
          />
        </div>
        <div className="chatListItem__content-wrapper">
          <div className="chatListItem__content-header">
            <span className="chatListItem__name">{chat.name}</span>
            <time className="chatListItem__date">
              {`${new Date(chat.date)}`.match(regExpDate)}
            </time>
          </div>
          <div className="chatListItem__content">
            <span className="chatListItem__author">{chat.user}:</span>
            <p className="chatListItem__text">{chat.lastMessageText}</p>
          </div>
        </div>
      </div>
    );
  }
}
