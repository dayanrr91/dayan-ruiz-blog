import React from 'react';
// import axiosInstance from '../../components/Router/axiosInstance';
import './Home.css';
import Tags from '../../components/Tags/Tags';
import { RecentArticles } from '../../components/RecentArticles/RecentArticles';
import { Article } from '../../components/Article/Article';
import { Subscribe } from '../../components/Subscribe/Subscribe';
// import SearchArticle from '../../components/SearchArticle/SearchArticle';
import axios from 'axios';

let apiBaseUrl = "http://localhost:4040/api/";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
   
    componentDidMount() {
        let url = apiBaseUrl + "articles/get-articles";
        axios.get(url)
            .then(res => {
                const articles = res.data.data;
                this.setState({ articles });
            });
    }

    handleContent = (content) => {
        let path = 'articles/get-article/' + content;
        this.props.history.push(path);       
    }

    render() {

        return (
            <div className="row home-container">
                <div className="col-8 articles-container">
                    { this.state.articles ? 
                        this.state.articles.map((article, index) =>
                                <div key={article.id} className="col-12 article-super-container">
                                    <Article onChangeContent={this.handleContent} article={article}/>
                                </div>) 
                        : null }
                </div>
                
                <div className="col-4">
                    {/* <SearchArticle /> */}
                    <RecentArticles />
                    <Subscribe />
                    <Tags/>
                </div>
            </div>
        );
    }
}