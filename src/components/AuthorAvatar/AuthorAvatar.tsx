import React from 'react';
import { Message } from '../../types';

type AuthorAvatarProps = {
  message: Message
  currentAuthor: string,
  userAvatar: string | undefined
}
  
export const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ message, currentAuthor, userAvatar }) => 
  (message.author === currentAuthor ? null : <img src={userAvatar} alt="" className="message__author-image"/>)