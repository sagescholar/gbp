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



export const buildEquipedWeaponButton = (parent_state_list_equiped,parentSetStateAddEquiped) => {
    

    function addEquipe(value) {
        let item = cloneDeep(parent_state_list_equiped);
        //item.push(e.target.value);
        console.log(value)
        item.push(value);
        if(item.length > 10){
            return
        }
        console.log(item);
        parentSetStateAddEquiped(item);
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
            <HtmlTooltip
            title={
              <React.Fragment>
                <div style={{display: "flex"}} >
                  <div class="weapon-icon-wraper">
                  <img style={{width: "100px"}}src={process.env.PUBLIC_URL + "/" + weapons[weapon_name].icon} />
                  </div>

                  <div class="weapon-info-wraper">
                  <Typography color="inherit">{weapon_name}</Typography>
                  <hr />
                  <a>{weapons[weapon_name].element}</a>
                  <div style={{ fontSize: "10px", }}>
                      {Object.keys(weapons[weapon_name]["skill"]).map((num) =>
                        <p style={{marginBottom:"0px"}}>{weapons[weapon_name]["skill"][num].type}</p>
                      )}
                  </div>
                  </div>
                </div>
              </React.Fragment>
            }
          >
            <div
            class = "btn-wrap"
            
            value={weapons[weapon_name].name}
            >
            <a style={{backgroundColor: "#333333", color: "#eeeeee"}}class="btn">{weapons[weapon_name].name}</a>
            </div>
          </HtmlTooltip>
          )
        }    
        )}
        </div>
    )
}
            