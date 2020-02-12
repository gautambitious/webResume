import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Welcome from "../components/Welcome.js";

const particleParams={
  particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
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
        <div className="App">
        <Particles
                className='particles'
                params={particleParams}
                />
          <Welcome />
         </div>
      );
    }}}
export default App;
