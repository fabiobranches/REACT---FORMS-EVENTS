import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import User from './User';
//import flor from './flor.png';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      name: "Fabioo",
      email: "fabio@Teste.com"
    }

    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  changeState ()
  {
    this.setState({
      name: "Fabio Alterado"
    })
  }
  
  resetState ()
  {
    this.setState({
      name: "Fabioo"
    })
  }

  changeInput (event){ //recebe o evento do input
    let target = event.target
    let index = target.name //é o name do input
    this.setState({
      [index]:target.value
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <form>
                <label>Nome
                  <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
                </label>
                <label>Email
                  <input type="email" name="email" value={this.state.email} onChange={this.changeInput}></input>
                </label>
            </form>
            <br></br>
            {this.state.name} - {this.state.email}
          </div>
          <div>
            <button onClick={this.changeState}>Mudar nome</button>
            <button onClick={this.resetState}>Reset nome</button>
          </div>
        </header>
      </div>
    );
    }
}

export default App;
