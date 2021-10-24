import React from 'react';
import "./css/header.css";
import Clock from '../components/Clock';
import { Button } from '@material-ui/core';

import { createTheme, ThemeProvider } from '@material-ui/core';
import Firestore from '../components/Firebase/Firebase';

const theme = createTheme({
    palette: {
        neutral: {
            main: "647488",
            contrastText: '#fff'
        }
    }
})


export const Header = (parentSetStateAddEquiped,parentSetStateView) => {

    const equipedReset = () => {
        let item = {1:{},2:{}}
        parentSetStateAddEquiped(item);
    }
    
    return(
        <div style={{position:"relative",width:"100%",height:"40px", backgroundColor:"#333333"}}>
        <div class="head-title" style={{position: "", maxWidth:"1500px",marginLeft: "auto",marginRight:"auto", display:"flex",alignItems:"start"}}>
            

            

            <div onClick={()=>parentSetStateView("top")} class="">
                <Button color="primary.dark" style={{maxHeight: "35px"}}>
                    <a style={{color: "white"}}>TOP</a>
                </Button>
                
            </div>

            

            <div onClick={()=>parentSetStateView("app")} class="">
                <Button style={{maxHeight: "35px"}}>
                <a style={{color: "white"}}>APP</a>
                </Button>
            </div>

            <div>
            <Firestore />
            </div>
            

            <div style={{ display:"flex",alignItems: "center",height: "35px",width:"100px", marginLeft: "auto",padding: "0px 0px",backgroundColor: "#aaaaaa",color: "#333333"}}>
                <Clock />
            </div>
        </div>
        </div>
    )
}