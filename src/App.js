import React, { Component } from 'react';
import Contact from './components/Contact'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding='Contact Manager' />
        <Contact name='John Doe' email='jdoe@gmail.com' phone='111 111-1111' />
        <Contact name='Karen Smith' email='karen@gmail.com' phone='222 222-2222' />
      </div>
    );
  }
}

export default App;
