import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import SiteBar from './components/SiteBar/SiteBar';
import { NavBar } from './components/NavBar/NavBar';
import CreateArticle from './components/CreateArticle/CreateArticle';
import ViewArticle from './components/ViewArticle/ViewArticle';
import { AboutMe } from './components/AboutMe/AboutMe';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: window.location.pathname
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <SiteBar />
                    <NavBar />
                    <div className="container">
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/home" component={Home} />
                            <Route path="/create-article" component={CreateArticle} />
                            <Route path="/view-article" component={ViewArticle} />
                            <Route path="/about-me" component={AboutMe} />
                            {/* <Route component={Error} /> */}
                        </Switch>
                    </div>
                </div>

            </BrowserRouter>
        );
    }
};

export default App;