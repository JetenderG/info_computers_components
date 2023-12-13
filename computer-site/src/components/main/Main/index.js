import React, {Component} from 'react';
import ComponentItems from '../Item_Components/component.js';


export default class Main extends Component {
    render(){
        return(
                <div className='main_container'>
                    <div className='main_item'>
                        <ComponentItems />
                    </div>
                </div>
        )
    }
}