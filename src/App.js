import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
// import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <form>
        First name:<br>
        <input type="text" name="firstname"><br>
        Last name:<br>
        <input type="text" name="lastname">
      </form>
    );
  }
}

export default App;
