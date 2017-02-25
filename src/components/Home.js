import React, { Component } from 'react';
import '../css/styles.css';
import Particles from 'react-particles-js';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';
class Home extends Component {
  render() {
    return(
      <section id="home" style={{background: `url(${bg2})`,opacity: .9, backgroundSize: '100% 100%', color: 'white'}} className="text-center">
        <Particles style={{padding: '50px', display: 'block', position: 'absolute', zIndex: -1}} width='100vw'
          height='100vh' params={{
          particles: {
            number: {
              value: 120
            },
            line_linked: {
              shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            }
          }
        }}/>
        <h1 className="text-center">Andrew Patipaksiri</h1>
        <p className="lead">Web Developer and love all things technology</p>
      </section>
    )
  }
}
export default Home;
