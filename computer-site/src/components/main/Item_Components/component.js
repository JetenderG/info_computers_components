
import ItemImg from './Img';
import ItemInformation from './Information';
import ItemRecommedations from './recommedations';

export default function ComponentItems() {

    return(
        
           
                <div className="item_container">
                    <div className="item_img"><ItemImg /></div>
                    <div className="item_info"><ItemInformation /></div>
                    <div className="item_recommedations"><ItemRecommedations/></div>
                </div>
                
            
        
    )

} 


