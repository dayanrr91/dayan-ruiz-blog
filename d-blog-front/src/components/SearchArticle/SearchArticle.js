import React from 'react';
// import axiosInstance from '../../components/Router/axiosInstance';
import './SearchArticle.css';
import axios from 'axios';

let apiBaseUrl = "http://localhost:4040/api/";

export default class SearchArticle extends React.Component {

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
            <div className="row search-article-container text-right">
                <div className="search-container-input"><input className="search-article-input" type="text" placeholder="Search..."/></div>
                <div className="search-container-icon"><i className="material-icons search-material-icon">search</i></div>
            </div>
        );
    }
}