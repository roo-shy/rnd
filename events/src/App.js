import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Test extends Component {

  // componentWillReceiveProps() {
  //   console.log('receive')
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldUpdate')
  //   return true
  // }
  // componentWillUpdate() {
  //   console.log('willUpdate')
  // }
  // componentDidUpdate() {
  //   console.log ('didUpdate')
  // }

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
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    // This binding is necessary to make `this` work in the callback could be removed if using ES6
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // componentWillMount(){
  //   console.log('willMount')
  // }
  //
  // componentDidMount(){
  //   console.log('didMount')
  // }
  //
  // _changeName = () => {
  //   this.setState({
  //     name: 'Peter'
  //   })
  // }

  render() {
    // console.log('privet render')
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"
            // onClick={() => this._changeName()
        
      />
          <button onClick={this.handleClick}>
            {this.state.isToggleOn
              ? 'ON'
              : 'OFF'}
          </button>
        </div>
        <Test name={this.state.name}/>
      </div>
    )
  }
}

export default App;