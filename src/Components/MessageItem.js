import React, { Component } from 'react';

class MessageItem extends Component {
  render() {
    return (
      <li className="MessageItem">
        <strong>{this.props.message.senderId}</strong>: {this.props.message.text}
      </li>
    );
  }
}

export default MessageItem;
