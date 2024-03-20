import React, {Component} from 'react';
import style from './style.css';



function SplitComponents(props){
    return (
        <div className='split_container'>
            <div className='split_top'>
                {props.top}
            </div>
            <div className='split_bottom'>
                {props.bottom}
            </div>
        </div>
    )
}


export default SplitComponents;