import React from "react";
import cloneDeep from "lodash.clonedeep";

import { updateAuraBoost } from "./UpdateAuraBoost";

//DATA
import { CALCULATE_OUT_INTERFACE } from "../data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "../data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "../data/SUMMONS";
import { weapons } from "../data/WEAPONS";
import { STATE_SUMMONS_INTERFACE } from "../data/SUMMONS";
import { ELEMENT_STYLE } from "../data/ELEMENT";

//CSS
//import "../css/Tooltip.css";
import "../css/Util.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";


export const buildSummonsButton = (
  main_or_friend,
  parentSetStateSmnToggle,
  parent_state_smn_toggle,
  parentSetStateUpdateAura
) => {
  /*
    key_1: MAIN or FRIEND
    key_2: OPTIMUS or OMEGA or SIXDRAGON
    key_3: SUMMON_NAME
    key_4: 5凸 or 4凸
    */
  const updateSummon = (key_1, key_2, key_3, key_4) => {
    let item = cloneDeep(parent_state_smn_toggle);
    //CHECK: ここではTrueになっている
    console.log(item);
    /*全てのToggleをoffにする*/
    /*
        1.通常/方陣の場合はkey3以下の六竜以外を全てOFFにする
        2.六竜の場合は六竜を全てOFFにする
        */
    if (key_2 == "sixdragon") {
      Object.keys(item[key_1]["sixdragon"]).map((key3_) =>
        Object.keys(item[key_1]["sixdragon"][key3_]).map(
          (key4_) => (item[key_1]["sixdragon"][key3_][key4_].toggle = false)
        )
      );
    } else {
      Object.keys(item[key_1]).map((key2_) =>
        Object.keys(item[key_1][key2_]).map((key3_) =>
          Object.keys(item[key_1][key2_][key3_]).forEach((key4_) => {
            if (key2_ !== "sixdragon")
              item[key_1][key2_][key3_][key4_].toggle = false;
          })
        )
      );
    }

    //console.log(item[key_1][key_2][key_3][key_4].toggle)
    item[key_1][key_2][key_3][key_4].toggle = !item[key_1][key_2][key_3][key_4]
      .toggle;
    //console.log(item[key_1][key_2][key_3][key_4].toggle)
    console.log(item);
    parentSetStateSmnToggle(item);
    updateAuraBoost(item, parentSetStateUpdateAura);
  };

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

  const Rsl = {
    opti: [],
    omega: [],
    sixdragon: [],
  };
  Object.keys(parent_state_smn_toggle[main_or_friend]).map((omega_or_opti) =>
    Object.keys(parent_state_smn_toggle[main_or_friend][omega_or_opti]).map(
      (element) =>
        Object.keys(
          parent_state_smn_toggle[main_or_friend][omega_or_opti][element]
        ).forEach((lank) => {
          if (main_or_friend == "FRIEND" && omega_or_opti == "sixdragon")
            return;
          let key__1 = main_or_friend;
          let key__2 = omega_or_opti;
          let key__3 = element;
          let key__4 = lank;
          let text_value = "";
          if (key__2 == "sixdragon") text_value = element + " " + lank + "%";
          else text_value = element + "Lv." + lank;

          Rsl[omega_or_opti].push(
            <HtmlTooltip
              title={
                <React.Fragment>
                  <a>
                    <Typography color="inherit">Information</Typography>
                    <hr />
                    <div style={{ fontSize: "10px" }}>{text_value}</div>
                  </a>
                </React.Fragment>
              }
            >
              <button
                //disabled
                style={{ transform: 'scale(0.8)',width: "150px",border: "0px", '&:hover': {textDecoration: 'underline',}}}
                class="tooltip button"
                value={text_value}
                onClick={() => updateSummon(key__1, key__2, key__3, key__4)}
              >
                <a style={{ fontSize: "10px", textAlign: "center",'&:hover': {textDecoration: 'underline',} }}>
                  {text_value}
                </a>
              </button>
            </HtmlTooltip>
          );
        })
    )
  );
  return (
    <div style={{ textAlign: "center", }}>
      <p style={{ textAlign: "center", }}>{main_or_friend}</p>
      <div class="opti_button">{Rsl.opti}</div>
      <hr />
      <div class="omega_button">{Rsl.omega}</div>
      <hr />
      <div class="sixdragon_button">{Rsl.sixdragon}</div>
    </div>
  );
};
