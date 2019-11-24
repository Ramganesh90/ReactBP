import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

class Header extends React.Component {
    render() {
        const activeStyle = { "color": "Orange", "borderBottom": "2px solid orange" };
        return (
            <nav>
                <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
                <NavLink to="/about" activeStyle={activeStyle} exact>About</NavLink>
            </nav>
        )
    }
}
export default Header;