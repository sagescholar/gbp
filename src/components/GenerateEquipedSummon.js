import React from "react";
import { DATA_SUMMONS } from "../data/SUMMONS";

import "../css/Util.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    padding: "15px",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function GenerateEquipedSummon(props) {
  const state_list_summon = props.parent_state_list_summon;

  return (
    <>
      <div style={{ display:"flex",flexWrap:"wrap",width:"100%",backgroundColor: "#222222", }}>
        {Object.keys(DATA_SUMMONS).map((key) => {
            console.log(key)
          const SUMMON_NAME = key;
          const IMG_PATH = DATA_SUMMONS[key].icon;
          const key_toggle = true;

          return (
            <HtmlTooltip
              title={
                <React.Fragment>
                  <a>
                  <img
                    style={{
                      width: "100px",
                      opacity: key_toggle ? 1.0 : 0.15,
                      cursor: "pointer",
                    }}
                    src={process.env.PUBLIC_URL + "/" + IMG_PATH}
                  />
                    <hr />
                    <div style={{ fontSize: "10px" }}>{SUMMON_NAME}</div>
                  </a>
                </React.Fragment>
              }
            >
              <div
                //disabled
                style={{
                  transform: "scale(1)",
                  width: "calc(100px)",
                  height: "40px",
                  border: "0px solid black",
                }}
                class="tooltip button"
                value={SUMMON_NAME}
                //onClick={() => updateSummon(key__1, key__2, key__3, key__4)}
              >
                <div
                  style={{
                    fontSize: "10px",
                    textAlign: "center",
                    backgroundColor: "#222222",
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      height: "40px",
                      objectPosition: "0% 15%",
                      objectFit: "cover",
                      opacity: key_toggle ? 1.0 : 0.15,
                      cursor: "pointer",
                    }}
                    src={process.env.PUBLIC_URL + "/" + IMG_PATH}
                  />
                </div>
              </div>
            </HtmlTooltip>
          );
        })}
      </div>
    </>
  );
}
