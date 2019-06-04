import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Today from './Today.js';

class App extends Component {
  constructor (props) {
    super(props)
  }

  submitData = (event) => {
    
  }

  render() {
   return (
    <div className="App">
      <p>Domo Dev Meetup</p>
    <label>
    <Today />
    Name:
      <input type="text" name="name" />
      </label>

      <button onClick={this.submitData} foo="bar"> Submit</button>
    </div>
  );
}
}

export default App;
