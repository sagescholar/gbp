import React from "react";
import cloneDeep from "lodash.clonedeep";
import { weapons } from "../data/WEAPONS";
import { EQUIPED_WEAPON_INTERFACE } from "../data/WEAPONS";
import { DARK_OPUS } from "../data/WEAPONS";

//CSS

//import "../css/Tooltip.css";
import "../css/Util.css";
import "../css/SelectWeapon.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";


export const buildWeaponButton = (
  parent_state_list_equiped,
  parentSetStateAddEquiped,
  mordalOpen,
  parent_state_weapon_search_element,
  parent_state_active_equiped_number
) => {
  function addEquipe(value) {
    let AEN = String(parent_state_active_equiped_number)
    let item = cloneDeep(parent_state_list_equiped);
    let content = cloneDeep(EQUIPED_WEAPON_INTERFACE);
    //1.箱を作る
    content["name"] = value;
    //2.枠が埋まっているか確認
    if (Object.keys(item[AEN]).length > 9) {
      mordalOpen();
      return;
    }

    //重複確認、終末、アスポン、セラフィック
    let RTN_FLG = false
    if(DARK_OPUS.includes(value)){
    Object.keys(parent_state_list_equiped[AEN]).forEach((id) => {
      if(DARK_OPUS.includes(parent_state_list_equiped[AEN][id].name))
      RTN_FLG = true
    })}
    if(RTN_FLG) return

    //3.埋まっていない場合は空いている枠に入れる
    let id = 0;

    Object.keys(item[AEN]).map((ID) => {
      if (ID == String(id)) {
        id += 1;
        return;
      }
    });
    content["isShow"] = false
    item[AEN][String(id)] = content;
    //FixMe: 終末,AW,天司武器の重複確認

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

  return (
    <div>
      {Object.keys(weapons).map((key) => {
        console.log();
        if (parent_state_weapon_search_element[weapons[key].element])
          return (
            <HtmlTooltip
              title={
                <React.Fragment>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ justifyContent: "center" }}
                      class="weapon-icon-wraper"
                    >
                      <img
                        style={{ width: "100px" }}
                        src={
                          process.env.PUBLIC_URL + "/" + weapons[key]["icon"]
                        }
                      />
                    </div>

                    <div
                      style={{
                        borderLeft: "solid 0px gray",
                        paddingLeft: "20px",
                      }}
                      class="weapon-info-wraper"
                    >
                      <Typography color="inherit">{key}</Typography>
                      <hr />
                      <a>{weapons[key].element}</a>
                      <div style={{ fontSize: "10px" }}>
                        {Object.keys(weapons[key]["skill"]).map((num) => (
                          <p style={{ marginBottom: "0px" }}>
                            {weapons[key]["skill"][num].type}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              }
            >
              <div
                class="btn-wrap"
                onClick={() => addEquipe(weapons[key].name)}
                value={weapons[key].name}
              >
                <a class="btn" style={{cursor: "default"}}>{weapons[key].name}</a>
              </div>
            </HtmlTooltip>
          );
      })}
    </div>
  );
};
