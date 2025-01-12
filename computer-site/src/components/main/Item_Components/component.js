import React, {Component} from 'react';
import ItemImg from './Img';
import ItemInformation from './Information';
import ItemRecommedations from './recommedations';
import {computer_components_inside, computer_components_outside , } from './computer_content_information';
export default class ComponentItems extends Component {
    render(){
        let argComponents = (arg) =>{
            const content =   arg.map((component) => 
            <div className="item_container">
                <ItemImg imgsC={component}/>
                <ItemInformation information={component}  />
                <ItemRecommedations/>
            </div>
            );
            return content;
                    }
                return(
                    <div className="item_container">
                <div className='split_container'>
                        <div className='split_top'>
                            {argComponents(computer_components_outside)}
                        </div>
                        <div className='split_bottom'>
                            {argComponents(computer_components_inside)}
                        </div>
                    </div>
                </div>
                )
    }
}
