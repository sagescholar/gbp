import React from "react";
import cloneDeep from "lodash.clonedeep";
import { weapons } from "../data/WEAPONS";
//CSS


//import "../css/Tooltip.css";
import "../css/Util.css";
import "../css/SelectWeapon.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { Card } from "@material-ui/core";



export default function BuildEquipedWeaponButton(props)  {
    const num = String(props.number)
    const parent_state_list_equiped = props.parent_state_list_equiped[num]
    const parentSetStateAddEquiped = props.parentSetStateAddEquiped
    
    const [state_control_window, setStateControlWindow] = useState(false)
    
    const updateEquipedShow = (key) => {
      let content = cloneDeep(props.parent_state_list_equiped)
      content[num][key].isShow = !content[num][key].isShow
      parentSetStateAddEquiped(content)
    }

    const controlWindow = (key) => {
      let weapon_name = parent_state_list_equiped[key].name;
      let open = parent_state_list_equiped[key].isShow

      return(
        <>
          {/*TODO: POPUP CONTROLLER -> weaponの元にATK,HPの追記*/}
          {open && (
            <div style={{position:"fixed",bottom: "50px",}}>
            <Card>
            <div style={{display: "flex",width:"300px", height:"100px"}} >
              <div style={{display:"flex",height:"100%",alignItems:"center"}}>
                <img style={{width: "100px"}}src={process.env.PUBLIC_URL + "/" + weapons[weapon_name].icon} />
              </div>
              <div>HP:{weapons[weapon_name].element}</div>
            </div>
            </Card>
            </div>
          )}
        </>
      )
    }
    

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: "rgba(230,230,230,0.95)",
          opacity: 0.2,
          color: "rgba(0, 0, 0, 0.8)",
          maxWidth: "275px",
          width: "300px",
          fontSize: "10px",
          border: "1px solid #dadde9",
          padding: "20px",
        },
    }))(Tooltip);

    

    return(
        <div>
          {Object.keys(parent_state_list_equiped).map((key) => {
              let weapon_name = parent_state_list_equiped[key].name;
              console.log(weapon_name)
              
              return(
                <>
                {controlWindow(key)}
                <HtmlTooltip
                //open = {parent_state_list_equiped[key].isShow}
                title={
                  <>
                    <div style={{display: "flex"}} >
                      <div class="weapon-icon-wraper">
                      <img style={{width: "100px"}}src={process.env.PUBLIC_URL + "/" + weapons[weapon_name].icon} />
                      </div>
                      <div>HP:{weapons[weapon_name].element}</div>

                    </div>
                  </>
                }
                >
                <div
                class = "btn-wrap"
                onClick={() => updateEquipedShow(key)}
                onMouseEnter={() => setStateControlWindow(true)}
                onMouseLeave={() => setStateControlWindow(false)}
                value={weapons[weapon_name].name}
                >
                <a style={{backgroundColor: "#333333", color: "#eeeeee", cursor:"default"}} class="btn">{weapons[weapon_name].name}</a>
                </div>
              </HtmlTooltip></>
            )
          }    
          )}
        </div>
    )
}
            