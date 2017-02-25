import React, { Component } from 'react';
import '../css/styles.css';
const style = {
  headerText: {
       position: 'relative',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,
       margin: 'auto'
  }
}

class Home extends Component {
  render() {
    return(
      <div style={style.headerText}>
        <div>
          <h1 className="text-center">Andrew Patipaksiri</h1>
          <p className="lead">Web Developer and love all things technology</p>
        </div>

      </div>
    )
  }
}
export default Home;
