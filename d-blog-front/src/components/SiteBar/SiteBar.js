import React from 'react'
import './SiteBar.css';

const SiteBar = (props) => {
    // console.log(window.location.pathname);
    return (
        <div className="row site-bar">
            <div className="container banner-web-site">
                <div>
                    <div className="my-name">Dayán Ruiz</div>
                    <div className="my-name-description">software engineer, coder and blogger</div>
                </div>
            </div>
        </div>
    );
}

export default SiteBar;