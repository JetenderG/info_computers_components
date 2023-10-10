import React, {Component} from 'react';
import NAVBAR_CONTAINER from "./nav_bar_Container/index.js";
import './style.css';


class NavBar extends Component {
    render() {
        return (
                <div className='navbar'>
                    <div className='navbar_logo'>
                        <a href='#'>Logo</a>
                    </div>
                    <div className='navbar_menu'>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default NavBar;