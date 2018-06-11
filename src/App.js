import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'; 

class App extends Component {
  // state = { value: 0}
  // constructor(props) {
  //   super(props)
  //   this.state = { value: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this) 
  // }

  // inc = () => {
  //   this.setState(
  //     // value: this.state.value + 1
  //     (state) => {
  //       return { value: state.value + 1}
  //     }
  //   )
  // }

  // dec = () => {
  //   this.setState(
  //     // value: this.state.value - 1
  //     (state) => {
  //       return { value: state.value - 1}
  //     }
  //   )
  // }

  render() {
    // const { value } = this.state; 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Example</h1>
        </header>
        
        <div>
          <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>
        </div>
      </div>
    );
  }
}

export default App;
