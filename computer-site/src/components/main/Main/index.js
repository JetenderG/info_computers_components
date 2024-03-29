import React, {Component} from 'react';
import ComponentItems from '../Item_Components/component.js';
import style from './style.css';
import Split_Components from '../Split_Components/index.js';
export default class Main extends Component {
    render(){
        return(
                <div className='main_container'>
                    <div className='main_header'>
                        <h1>Computer Components for Beginners</h1>
                        <img></img>
                        <div className='main_header_text'>
                            <p>This site dedicated to the basics of understanding of both Inside and Outside of a computer</p>
                            <p>Here is the list of computer components that is essential in every pc.</p>
                        </div>
                    </div>
                    <div className='main_item'>
                        <ComponentItems />
                    </div>
                </div>
        )
    }
}