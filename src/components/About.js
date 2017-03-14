import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div>
        <PageHeader className="text-center">About Me</PageHeader>
        <div className="col-text">
          Morbi eros nisl, accumsan in condimentum eget, elementum sed nisi. In ultricies sem a neque commodo mollis. Curabitur ipsum tellus, commodo sit amet massa ut, semper lacinia lectus. Duis vitae diam ac justo molestie viverra. Vestibulum posuere tortor non lacus commodo tempus. Sed vitae ornare elit. In feugiat ullamcorper nunc pharetra vestibulum. Praesent eget lobortis mi. Vestibulum mollis, ante vel dictum euismod, sem felis mollis metus, id dapibus purus felis ut tortor. Morbi arcu velit, dapibus id efficitur vehicula, euismod in augue. Praesent felis tortor, vestibulum sit amet lacinia quis, ultricies eu nulla. Aliquam erat volutpat. Etiam nisl sem, commodo id fringilla ac, scelerisque eget enim.
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h4>Web Developer</h4>
              </div>
              <div className="panel-body">
                <p className="lead text-center">Developer Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About;
