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



export const buildWeaponButton = (parent_state_list_equiped,parentSetStateAddEquiped,mordalOpen) => {
    

    function addEquipe(value) {
        let item = cloneDeep(parent_state_list_equiped);
        //item.push(e.target.value);
        console.log(value)
        item.push(value);
        if(item.length > 10){
            mordalOpen();
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
          maxWidth: 220,
          width: "200px",
          fontSize: "10px",
          border: "1px solid #dadde9",
          padding: "20px",
        },
    }))(Tooltip);

    return(
        
        <div>
        
        {Object.keys(weapons).map((key) =>
            <HtmlTooltip
            title={
              <React.Fragment>
                <a>
                  <Typography color="inherit">{key}</Typography>
                  <hr />
                  <a>{weapons[key].element}</a>
                  <div style={{ fontSize: "10px", }}>
                      {Object.keys(weapons[key]["skill"]).map((num) =>
                        <p style={{marginBottom:"0px"}}>{weapons[key]["skill"][num].type}</p>
                      )}
                  </div>
                </a>
              </React.Fragment>
            }
          >
            <div
            class = "btn-wrap"
            onClick={() => addEquipe(weapons[key].name)}
            value={weapons[key].name}
            >
            <a class="btn">{weapons[key].name}</a>
            </div>
          </HtmlTooltip>
            
        )}
        </div>
    )
}
            