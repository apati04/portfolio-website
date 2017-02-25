import React, { Component } from 'react';
import { PageHeader, Panel, Grid, Row, Col } from 'react-bootstrap';
import '../css/styles.css';
class About extends Component {
  render() {
    return(
      <div>
        <PageHeader className="text-center">About Me</PageHeader>
        <div className="col-text">
          Morbi eros nisl, accumsan in condimentum eget, elementum sed nisi. In ultricies sem a neque commodo mollis. Curabitur ipsum tellus, commodo sit amet massa ut, semper lacinia lectus. Duis vitae diam ac justo molestie viverra. Vestibulum posuere tortor non lacus commodo tempus. Sed vitae ornare elit. In feugiat ullamcorper nunc pharetra vestibulum. Praesent eget lobortis mi. Vestibulum mollis, ante vel dictum euismod, sem felis mollis metus, id dapibus purus felis ut tortor. Morbi arcu velit, dapibus id efficitur vehicula, euismod in augue. Praesent felis tortor, vestibulum sit amet lacinia quis, ultricies eu nulla. Aliquam erat volutpat. Etiam nisl sem, commodo id fringilla ac, scelerisque eget enim.
        </div>
        <Grid>
          <Row>
            <Col md={6}>
              <Panel header="Web Engineer">
                <img
                  className="img-circle center-block" src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAbOAAAAJGJiODgzNTlmLTEzYzctNDdiOC04NDgzLTg1N2FmZGI3ZWM4NA.jpg" alt="web"/>
                <p className="lead text-center">I am a software engineer</p>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>


    )
  }
}
export default About;
