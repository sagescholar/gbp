import React from 'react';
import "./css/header.css";
import Clock from '../components/Clock';


export const Header = (parentSetStateAddEquiped) => {

    const equipedReset = () => {
        let item = {};
        parentSetStateAddEquiped(item);
    }
    
    return(
        <div style={{position:"relative",width:"100%",height:"20px", backgroundColor:"#333333"}}>
        <div class="head-title" style={{position: "", maxWidth:"1200px",margin: "0 5vw", display:"flex",alignItems:"start"}}>
            <div onClick={()=>equipedReset()} class="wrap-equiped-reset">
                <a > X </a>
            </div>

            <div style={{ width:"100px", marginLeft: "auto",padding: "0px 0px",backgroundColor: "#aaaaaa",color: "#333333"}}>
                <Clock />
            </div>
        </div>
        </div>
    )
}