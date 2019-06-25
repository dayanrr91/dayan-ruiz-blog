import React from 'react';
import './ViewArticle.css';
import axios from 'axios';
import renderHTML from 'react-render-html';
import Tags from '../../components/Tags/Tags';
import { RecentArticles } from '../../components/RecentArticles/RecentArticles';
import { Subscribe } from '../../components/Subscribe/Subscribe';

let apiBaseUrl = "http://localhost:4040/api/";

export default class ViewArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            dateToDisplay: '',
            url: props.location.state.url
        }

    }
   
    componentDidMount() {
        if(this.state.url){
            let url = apiBaseUrl + `articles/get-article/${this.state.url}`;

        axios.get(url)
            .then(res => {
                const article = res.data;
                let date = new Date(article.publishdate);
                let dateToDisplay = date.toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
                this.setState({ article, dateToDisplay });
            });
        }
    }

    render() {
            return (
                <div className="row view-article-container">
                 <div className="col-lg-8">
                    <div className="col-lg-12 view-article-content">
                        <div className="col-12 article-name-container">
                             <h2>{this.state.article.name}</h2>
                        </div>
                        <div className="col-12 article-image-container">
                            <div> 
                                <img className="article-image-profile" src="/assets/images/d_profile.jpg" alt=""/>
                            </div>
                            <div className="author-customdate-container">
                                <p className="author-p">{this.state.article.author}</p>
                                <p className="customdate-p">{this.state.article.customdate}</p>
                            </div>
                        </div>
                        { this.state.article.content ? 
                            <div className="col-12">{
                                renderHTML(this.state.article.content)
                            } </div> : 
                        null }     
                    </div>
                    
                                    
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