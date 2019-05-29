import React from 'react';
import {Component} from 'react';
// import logo from './logo.svg';
import Board from './components/Board';
import './App.css';

class App extends Component {
render(){
return(
  <div className="game">
    <center>
        <h1>Tic-tac-toe</h1>
    <br />
    <Board />

    </center>    
    </div>

);

}

}


export default App;
