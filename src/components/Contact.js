import React, { Component } from 'react';
import { PageHeader} from 'react-bootstrap';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <PageHeader className="text-center">Contact Me</PageHeader>
        <form className="col-md-5 col-md-offset-4">
          <div className="form-group">
            <input className="form-control" placeholder="Insert your Name" type="text" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Insert your Name" type="text" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Insert your Name" type="text" />
          </div>
        </form>
      </div>
    )
  }
}
export default ContactForm;
