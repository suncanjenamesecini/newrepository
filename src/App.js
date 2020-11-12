import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Dobrodoslica from './components/Dobrodoslica/Dobrodoslica';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":true,
        "mode":"repulse"
      },
      "onclick":{
        "enable":true,
        "mode":"push"
      },
      "resize":true
    },
    "modes":{
      "grab":{
        "distance":400,
        "line_linked":{
          "opacity":1
        }
      },
      "bubble":{
        "distance":400,
        "size":40,
        "duration":2,
        "opacity":8,
        "speed":3
      },
      "repulse":{
        "distance":143.85614385614386,
        "duration":0.4
      },
      "push":{
        "particles_nb":4
      },

      "remove":{
        "particles_nb":2
      }
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params = {particlesOptions}
        />
        <Navigation />
        <Dobrodoslica />
      </div>
    );
  }
}

export default App;

