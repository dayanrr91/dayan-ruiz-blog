
import React from 'react';
import './Article.css';
import { withRouter } from 'react-router';

class ArticlePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: props.article
        }
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
            return(
            <div className="row article-container">
                <div className="col-12 article-image-container">
                    <img onClick={() => this.onClickArticle(this.state.article.url)} className="article-image hover-magic" src="/assets/images/csharp.jpg" alt=""/>
                </div>
                <div className="col-12">
                    <h4 className="hover-magic" onClick={() => this.onClickArticle(this.state.article.url)}>{ this.state.article.name }</h4>
                    <p onClick={() => this.onClickArticle(this.state.article.url)} className="font-size-14 subheader-line hover-magic">{ this.state.article.subheader }</p>
                </div>
                <div className="col-12 custom-date-author-container">
                    <h6 className="font-size-14 article-author-line">{ this.state.article.author }</h6>
                    <p className="custom-date font-size-14">{ this.state.article.customdate }</p>
                </div>
            </div>
            )
    }
}

const Article = withRouter(ArticlePage)

export { Article };