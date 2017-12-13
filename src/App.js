import React, { Component } from "react"
import axios from "axios"

class App extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
    }
  }

  handleOutter = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response => {
      this.setState({ title: response.data.title })
    })
  }

  handleInner = () => {
    axios.get("/mock.json").then(response => {
      this.setState({ title: response.data.title })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.state.title}</header>
        <button id="btn1" onClick={this.handleOutter}>
          outter request
        </button>
        <br />
        <button id="btn2" onClick={this.handleInner}>
          inner request
        </button>
      </div>
    )
  }
}

export default App
