import React, {Component} from 'react';
import NavBar_Container from "./Vav_bar_Container";



class NavBar extends Component {
    render() {
        return (
            <NavBar_Container>
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
            </NavBar_Container>
        )
    }
}