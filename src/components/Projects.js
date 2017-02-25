import React, { Component } from 'react';
import {
Col, Row, Image, PageHeader
} from 'react-bootstrap';
import ytapp from '../images/ytapp.png';
import cube from '../images/cube.jpg'
import '../css/styles.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <PageHeader>Projects I have worked on</PageHeader>
        <div>
          <Row className="expandImg">

            <Col className="col-custom" xs={6} sm={4}>
              <Image  src={cube} alt="prro"/>
              <h3>Thumbnail label</h3>
              <p>Description</p>
            </Col>
            <Col className="col-custom" xs={6} sm={4}>
              <Image src={cube} alt="pror"  />
              <h3>Thumbnail label</h3>
              <p>Description</p>

            </Col>
            <Col className="col-custom" xs={6} sm={4}>
              <Image src={cube} alt="pro" />
              <h3>Thumbnail label</h3>
              <p>Description</p>
            </Col>
          </Row>

        </div>


      </div>
    )
  }
}
export default Projects;
