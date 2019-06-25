import React from 'react';
import './ContactMe.css';
import { withRouter } from 'react-router';

class ContactMePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {}
        }

    }
   
    componentDidMount() {
      
    }

    render() {
            return (
                <div className="row contact-me-container">
                    <div className="col-12 contact-me-header-container">
                        <p className="uppercase-header">Contact me</p>
                    </div>
                    <div className="col-12">
                        <form>
                            <div className="d-print-block text-right">
                                {/* <label className="contact-form-line" htmlFor="email">Contact Email</label> */}
                                <input placeholder="Email..." className="contact-form-line" type="email" name="email"/>
                                <textarea placeholder="Message..." className="contact-form-line contact-message" name="message"></textarea>
                                <button className="submit-message">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
    }
}

const ContactMe = withRouter(ContactMePage);

export { ContactMe };