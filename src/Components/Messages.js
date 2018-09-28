import React, { Component } from 'react';
import MessageItem from './MessageItem'

class Messages extends Component {
  render() {
    let messages;
    if (this.props.messages) {
      messages = this.props.messages.map(message => {
        console.log(message);
        return (
            <MessageItem key={message.senderId} message={message} />
        )
      });
    }
    return (
      <div className="MessageList">
        <h3>Messages</h3>
        <ul>
          {messages}
        </ul>
      </div>
    );
  }
}

export default Messages;
