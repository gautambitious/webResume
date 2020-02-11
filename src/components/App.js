import React, {Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';

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
  render(){
  return  (
    <div className="App">
    <Particles
            className='particles'
            params={particleParams}
            />
     <h1> Hello </h1>
     </div>
   );
  }}

export default App;
