import React from 'react';
import "./css/header.css";
import Clock from '../components/Clock';
import { Button } from '@material-ui/core';


export const Header = (parentSetStateAddEquiped,parentSetStateView) => {

    const equipedReset = () => {
        let item = {1:{},2:{}}
        parentSetStateAddEquiped(item);
    }
    
    return(
        <div style={{position:"relative",width:"100%",height:"20px", backgroundColor:"#333333"}}>
        <div class="head-title" style={{position: "", maxWidth:"1500px",marginLeft: "auto",marginRight:"auto", display:"flex",alignItems:"start"}}>
            <div onClick={()=>equipedReset()} class="wrap-equiped-reset">
                <Button style={{maxHeight: "20px",backgroundColor: "#21b6ae",}}>TRASH</Button>
            </div>

            |

            <div onClick={()=>parentSetStateView("top")} class="wrap-equiped-reset">
                <Button style={{maxHeight: "20px"}}>TOP</Button>
            </div>

            |

            <div onClick={()=>parentSetStateView("app")} class="wrap-equiped-reset">
                <Button style={{maxHeight: "20px"}}>APP</Button>
            </div>

            |

            <div style={{ width:"100px", marginLeft: "auto",padding: "0px 0px",backgroundColor: "#aaaaaa",color: "#333333"}}>
                <Clock />
            </div>
        </div>
        </div>
    )
}