import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {
  
  
  componentWillReceiveProps() {
    console.log('receive')
  }
  shouldComponentUpdate() {
    console.log('shouldUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('willUpdate')
  }
  componentDidUpdate() {
    console.log ('didUpdate')
  }


  render() {
    console.log('render Test')
    return (
      <div className="App">
          <h1>Welcome</h1>
        </div>
    );
  }
}


class App extends Component {
  
    constructor() {
    super(); 
    this.state = {
      name: 'kate'
    }
      console.log('constructor')
    }
    componentWillMount(){
      console.log('willMount')
    }
    
    componentDidMount(){
      console.log('didMount')
    }
    
    _changeName = () => {
      this.setState({
        name: 'Peter'
      })
    }

  render() {
    console.log('privet render')
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={()=>this._changeName()} />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test name={this.state.name}/>
      </div>
    );
  }
}

export default App;
