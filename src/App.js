import React, { Component } from 'react';
import Messages from './Components/Messages';
import SendMessageForm from './Components/SendMessageForm'
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
    }
  }

  componentDidMount() {
    const chatManager = new window.Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new window.Chatkit.TokenProvider({
        url: testToken
      })
    });
    console.log(chatManager);
    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
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

  componentWillMount() {
    /**this.setState({
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
    })*/
  }

  render() {
    return (
      <div className="App">
        <Messages messages={this.state.messages}/>
        <br/>
        <br/>
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
