import React from 'react';
import './RecentArticles.css';
import axios from 'axios';
import { withRouter } from 'react-router';

let apiBaseUrl = "http://localhost:4040/api/";

class RecentArticlesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
            // articles: ['Article numero 1', 'Article numero 2', 'Article numero 3', 'Article numero 4', 'Article numero 5', 'Article numero 6', 'Article numero 7']
        }
    }
   
    componentDidMount() {
        let url = apiBaseUrl + "articles/get-article-names";
        axios.get(url)
            .then(res => {
                const articles = res.data;
                this.setState({ articles });
            });
    }

    onClickArticle = (url) => {
        let path = 'view-article';
        this.props.history.push({
            pathname: path,
            search: `?url=${url}`,
            state: { url: url }
        })
    }


    render() {

        return (
            <div className="row recent-articles-container">
                <div className="recently-posted-header"><p>Recently posted</p></div>
                <div className="all-recent-articles-container">                    
                    <ul className="recent-articles-ul">
                    { this.state.articles ? this.state.articles.map((article, index) =>
                        <li onClick={() => this.onClickArticle(article.url)} className={`article-posted-container hover-magic article-key-${index}`} key={index}><span>{article.name}</span></li>
                    ) : null}
                    </ul>
                </div>
            </div>
        );
    }
}

const RecentArticles = withRouter(RecentArticlesPage)

export { RecentArticles };