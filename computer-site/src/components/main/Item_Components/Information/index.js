


function information_exist(){

    
}



export default function ItemInformation({information}){


    return (
        <div className = "info_container">
            <div className = "info_title"><span><h3>{information[0]}</h3></span></div>
            <div className = "info_content"><span><p>{information[1]}</p></span>
            </div>
        </div>
    )

}
