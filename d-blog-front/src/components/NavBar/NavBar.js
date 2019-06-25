// import React from 'react'
// import './NavBar.css';

// const NavBar = () => {
//     return (
//             <nav className="nav-bar nav-bar-container">
//                 <div className="navigation-items container">
//                      <div className="navigation-item">Home</div>
//                 </div>             
//             </nav>
//     );
// }

// export default NavBar;

import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

import { withRouter } from 'react-router';

class NavBarPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <nav className="nav-bar nav-bar-container">
                <ul className="navigation-items container">
                    <li><NavLink activeClassName='link-is-active' to={'/home'} className="navigation-item"> Home </NavLink></li>
                    <li><NavLink activeClassName='link-is-active' to={'/about-me'} className="navigation-item"> About me </NavLink></li>
                </ul>      
            </nav>
        );
    }
}

const NavBar = withRouter(NavBarPage)

export { NavBar };