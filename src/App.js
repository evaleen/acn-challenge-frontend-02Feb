import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
// import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
        <form>
        <input type="file" name="cv"></input>
        <input type="text" name="first"></input>
        <input type="text" name="last"></input>
        <input type="text" name="title"></input>
        <span>First name</span>
        <span>Last name</span>
        <span>Job Title</span>
        <button>POST</button>
        </form>
      </div>
    );
  }
}

export default App;
