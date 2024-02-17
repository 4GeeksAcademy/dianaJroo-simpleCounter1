import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';


function Card(props) {
    return <>
        <div className="" style={{background: "black"}}>
            <div class="card" style={{color: "white", background: "rgb(30, 27, 27)", borderRadius: "10px", margin: "5px"}}>
                <div class="card-body d-flex aling-items-center">
                    <h1>{props.icon ? <FontAwesomeIcon icon={faClock} /> : props.num}</h1>
                </div>
            </div>
        </div>
        
    </>

}

export default Card;