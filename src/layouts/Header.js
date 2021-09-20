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
            <div style={{width: "30%", height: "100%"}}/>
            <div onClick={()=>equipedReset()} class="wrap-equiped-reset">
                <a >RESET</a>
            </div>
            <div style={{width:"20%", height:"100%"}} />
            <div style={{padding: "0px 20px",backgroundColor: "#aaaaaa", width: "30%",textAlign: "right",color: "#333333"}}>
                <Clock />
            </div>
            <div style={{width:"0.5%", height:"100%"}} />
        </div>
    )
}