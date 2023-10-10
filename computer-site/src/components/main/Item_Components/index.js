

let Component_items = () => {

    return(
        function (children) {
            return (
                <div className="main_item_container">
                    <div className='component_items'>
                    {children}
                </div></div>
                
            )
        }
    )

} 


export default Component_items;