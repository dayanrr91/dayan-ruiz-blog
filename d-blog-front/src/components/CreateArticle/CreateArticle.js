import React from 'react';
import './CreateArticle.css';
import CKEditorCustom from '../../components/CKEditorCustom/CKEditorCustom';
import axios from 'axios';

let apiBaseUrl = "http://localhost:4040/api/";

export default class CreateArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            name: '',
            content: '',
            header: '',
            subheader: '',
            publishdate: '',
            author: '',
            customdate: '',
            password: ''
        }
    }
   
    componentDidMount() {

    }

    createArticle(){
        let url = apiBaseUrl + 'articles/create-article';

        let content = this.state.content.replace(/(<.*?>)|\s+/g, (m, $1) => $1 ? $1 : ' ');
        let article = {
            "url": this.state.url, 
            "name": this.state.name,
            "content": content,
            "header": this.state.header, 
            "subheader": this.state.subheader, 
            "publishdate": new Date(),
            "author": this.state.author,
            "customdate": this.state.customdate,
            "password": this.state.password
        };

        axios.post(url, article).then(function (response) {
            if (response.status === 200) {
                window.location.reload();
            }
            else {
                // error saving journey
            }
        }).catch(function (error) {
            // Handle the error
        });
    }

    handleChange = (keyName, e) => { 
        this.setState({ [keyName]: e.target.value }); 
    }

    handleContent = (content) => {
        this.setState({content: content});
    }

    

    render() {

        return (
            <div className="row createArticle-container">
                <div className="col-12 create-article-header"><p className="create-article-header-line">Create Article</p></div>
                <div className="col-lg-6 form-fields">
                    <div className="field-form"><div>Name:</div><input onChange={(evt) => this.handleChange('name', evt)} type="text"/></div>
                    <div className="field-form"><div>Custom Date:</div> <input onChange={(evt) => this.handleChange('customdate', evt)}  type="text"/></div>
                    <div className=""><div>Header:</div> <textarea className="bigger-field-form" onChange={(evt) => this.handleChange('header', evt)}  type="text"/></div>
                    <div className="field-form"><div>Password:</div> <input  onChange={(evt) => this.handleChange('password', evt)}  type="password"/></div>
                    
                </div>
                <div className="col-lg-6">
                    <div className="field-form"><div>Image Url:</div> <input onChange={(evt) => this.handleChange('url', evt)}  type="text"/></div>
                    <div className="field-form"><div>Author:</div> <input onChange={(evt) => this.handleChange('author', evt)} type="text"/></div>
                    <div className=""><div>Sub Header:</div> <textarea size="10" className="bigger-field-form" onChange={(evt) => this.handleChange('subheader', evt)} type="text"/></div>
                </div>
                <CKEditorCustom content={ this.state.content } onChangeContent={this.handleContent} />
                <div className="text-right crear-article-button-container col-12">
                    <button className="crear-article-button" onClick={() => this.createArticle()}>Create</button>
                </div>
            </div>
        );
    }
}