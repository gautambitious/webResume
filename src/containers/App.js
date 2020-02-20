import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Welcome from "../components/Welcome.js";
import Tachyons from 'tachyons';

class App extends Component{

  constructor(){
    super();
    this.state = {
      route : "welcome"
    }
  }


  render(){
    if(this.state.route == "welcome"){
      return (
        <div className="App center">
          <Welcome />
         </div>
      );
    }}}
export default App;
