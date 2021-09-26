import React from 'react';
import "./css/header.css";
import Clock from '../components/Clock';


export const Header = (parentSetStateAddEquiped) => {

    const equipedReset = () => {
        let item = {};
        parentSetStateAddEquiped(item);
    }
    
    return(
        <div class="head-title">
            <div onClick={()=>equipedReset()} class="wrap-equiped-reset">
                <a > X </a>
            </div>

            <div style={{ width:"100px", marginLeft: "auto",padding: "0px 0px",backgroundColor: "#aaaaaa",color: "#333333"}}>
                <Clock />
            </div>
        </div>
    )
}