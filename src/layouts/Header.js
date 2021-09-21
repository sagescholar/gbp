import React from 'react';
import "./css/header.css";
import Clock from '../components/Clock';


export const Header = (parentSetStateAddEquiped) => {

    const equipedReset = () => {
        let item = [];
        parentSetStateAddEquiped(item);
    }
    
    return(
        <div class="head-title">
            <div onClick={()=>equipedReset()} class="wrap-equiped-reset">
                <a > X </a>
            </div>

            <div style={{marginLeft: "auto",padding: "0px 20px",backgroundColor: "#aaaaaa", width: "30%",textAlign: "right",color: "#333333"}}>
                <Clock />
            </div>
        </div>
    )
}