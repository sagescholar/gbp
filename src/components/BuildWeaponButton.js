import React from "react";
import { weapons } from "../data/WEAPONS";
//CSS
//import "../css/Tooltip.css";
import "../css/Util.css";
import { HtmlTooltip } from "./HtmlToolTip";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";



export const buildWeaponButton = (parent_state_list_equiped,parentSetStateAddEquiped,mordalOpen) => {
    

    function addEquipe(e) {
        let item = JSON.parse(JSON.stringify(parent_state_list_equiped));
        item.push(e.target.value);
        if(item.length > 10){
            mordalOpen();
            return
        }
        console.log(item);
        parentSetStateAddEquiped(item);
    }

    

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: "#f5f5f9",
          color: "rgba(0, 0, 0, 0.8)",
          maxWidth: 220,
          fontSize: "10px",
          border: "1px solid #dadde9",
          padding: "10px",
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
            <button
            //disabled
            type=""
            onClick={addEquipe}
            style={{ width: "150px",margin: "1px", fontSize: "10px", textAlign: "center" }}
            value={weapons[key].name}
            >
            {weapons[key].name}
            </button>
          </HtmlTooltip>
            
        )}
        </div>
    )
}
            