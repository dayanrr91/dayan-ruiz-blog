import React from 'react';
import './AboutMe.css';
import { withRouter } from 'react-router';
import { ContactMe } from  '../../components/ContactMe/ContactMe';

class AboutMePage extends React.Component {

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
                <div className="row about-me-container">
                    <div className="col-8">
                        <div className="col-12 about-me-header-container">
                            <p className="uppercase-header">About me</p>
                            <p>¡Hey, I am glad that you are here!</p>
                            <p>My name is Dayán Ruiz and I will tell you why you should come more often.</p>
                            <p className="font-weight-bold">Who I am?</p>
                            <p> I am a Software Engineer with over 5+ years of experience. In love with coding, learning, writing and sharing knowledge. I tried to combine all my crushes and this blog came up.</p>
                            <p className="font-weight-bold">Why this blog?</p>
                            <p>I am always trying new things, so, you will be able to get new articles related to up to date technologies and in general things  related to programming.</p>
                            <p>I really hope you find this blog usefull and please feel free to contact me if you want a specific article on any content. I will be more than happy to help.</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <ContactMe />
                    </div>
                </div>
            );
    }
}

const AboutMe = withRouter(AboutMePage);

export { AboutMe };