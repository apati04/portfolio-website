import React, { Component } from 'react';
import '../css/styles.css';
import Particles from 'react-particles-js';
import { PageHeader } from 'react-bootstrap';
class Home extends Component {
  render() {
    return(
      <section style={{width: '100vw', height: '100vh', padding: '50px', background: 'url(http://designstacks.net/content_images/AdobePhotoshop/ART-D/tutorial625/1-.jpg)', backgroundSize: '100% 100%'}}>
        <Particles params={{
          particles: {
            number: {
              value: 50
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#80D8FF",
                blur: 5
              }
            }
          }
        }}/>
        <h1 bsStyle>My Portfolio</h1>
      </section>
    )
  }
}
export default Home;
