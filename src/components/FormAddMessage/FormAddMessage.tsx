import React, { Component, ChangeEvent, FormEvent } from 'react';
import './FormAddMessage.css';

type FormAddMessageProps = {
  addMessage: (value: string) => void
}

export class FormAddMessage extends Component<FormAddMessageProps> {

  state: {newMessage: string} = {
    newMessage: ''
  }

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({newMessage: event.target.value});
  }

  handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      this.props.addMessage(this.state.newMessage);
      this.setState({newMessage: ''});
    }
  }

  handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    if (this.state.newMessage.length !== 0) {
      event.preventDefault();
      this.props.addMessage(this.state.newMessage);
      this.setState({newMessage: ''});
    }
  }

  
  render() {
    return(
      <form className="formAddMessage">
        <textarea 
          value={this.state.newMessage} 
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="formAddMessage__input"
          required />
        <button type="submit" onClick={this.handleSubmit} className="formAddMessage__button">Add<br />message</button>
      </form>
    )
  }
}