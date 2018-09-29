import React, { Component } from 'react';
import Messages from './Components/Messages';
import SendMessageForm from './Components/SendMessageForm'
import Title from './Components/Title'
import './App.css';

const instanceLocator = "v1:us1:4cf18d0e-6b04-40d6-bf4a-a957da25f04c"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/4cf18d0e-6b04-40d6-bf4a-a957da25f04c/token"
const username = "john"
const roomId = 17341431

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  componentDidMount() {
    const chatManager = new window.Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new window.Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    });
  }

  /**componentWillMount() {
    this.setState({
      messages: [
        {
          senderId: "john",
          text: "how are ya?"
        },
        {
          senderId: "jack",
          text: "fine!"
        }
      ]
    })
  }*/

  handleSendMessage(message) {
    console.log(message);
    this.currentUser.sendMessage({
      message,
      roomId: roomId
    });
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Messages messages={this.state.messages}/>
        <br/>
        <br/>
        <SendMessageForm sendMessage={this.handleSendMessage}/>
      </div>
    );
  }
}

export default App;
