import React, { Component } from 'react'

export class Test extends Component {
  state = {
    name: '',
    email: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => this.setState({
        name: data.name,
        email: data.email,
      }))
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test
