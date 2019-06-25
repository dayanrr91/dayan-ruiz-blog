import React from 'react';
// import axiosInstance from '../../components/Router/axiosInstance';
import './Subscribe.css';
import axios from 'axios';
import { withRouter } from 'react-router';

let apiBaseUrl = "http://localhost:4040/api/";

class SubscribePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            artciles: []
        }

    }
   
    componentDidMount() {
     
    }

    render() {

        return (
            <div className="row search-article-container subscribe-super-container">
                <p className="uppercase-header">Subscribe to newsletters</p>
                <div className="subscribe-submit-container row">
                    <div className="search-container-input col-10">
                        <input className="subscribe-article-input" type="email" placeholder="Email..."/>
                    </div>
                    <div className="col-2">
                        <button className="subscribe-submit">Subscribe</button>
                    </div>
                </div>
            </div>
        );
    }
}

const Subscribe = withRouter(SubscribePage);

export { Subscribe };