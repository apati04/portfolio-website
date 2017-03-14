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
            <input className="form-control" placeholder="Insert your Email" type="email" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Subject" type="text" />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="10">Comments</textarea>
          </div>
          <div className="form-group">
            <input className="btn btn-success btn-block" type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}
export default ContactForm;
