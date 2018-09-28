import React, { Component } from 'react';
import Messages from './Components/Messages'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentWillMount() {
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
  }

  render() {
    return (
      <div className="App">
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
