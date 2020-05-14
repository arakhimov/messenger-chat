import React, { Component, ChangeEvent, FormEvent } from 'react';
import './FormAddMessage.css';

type FormAddMessageProps = {
  addMessage: (value: string) => void
}

export class FormAddMessage extends Component<FormAddMessageProps> {

  state: {newMessage: string} = {
    newMessage: ''
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({newMessage: event.target.value})
  }

  handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.addMessage(this.state.newMessage);
    this.setState({newMessage: ''});
  }
  
  render() {
    return(
      <form action="" className="formAddMessage">
        <input type="text" value={this.state.newMessage} onChange={this.handleChange} className="formAddMessage__input"/>
        <button type="submit" onClick={this.handleSubmit} className="formAddMessage__button">Add message</button>
      </form>
    )
  }
}