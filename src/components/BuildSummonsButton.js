import React from "react";
import cloneDeep from "lodash.clonedeep";

import { updateAuraBoost } from "./UpdateAuraBoost";

//DATA
import { CALCULATE_OUT_INTERFACE } from "../data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "../data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "../data/SUMMONS";
import { weapons } from "../data/WEAPONS";
import { STATE_SUMMONS_INTERFACE, ICON_SUMMONS } from "../data/SUMMONS";
import { ELEMENT_STYLE } from "../data/ELEMENT";

//CSS
//import "../css/Tooltip.css";
import "../css/Util.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

let cvt_summonname2element = {
  アグニス: "火",
  ヴァルナ: "水",
  ティターン: "土",
  ゼピュロス: '風',
  ゼウス: "光",
  ハデス: "闇",

  コロッサス: "火",
  リヴァイアサン: "水",
  ユグドラシル: "土",
  ティアマト: '風',
  シュヴァリエ: "光",
  セレスト: "闇",

  ウィルナス: "火",
  ワムデュス: "水",
  ガレオン: "土",
  イーウィア: '風',
  ルオー: "光",
  フェディエル: "闇",
}

export default function BuildSummonsButton (props) {
  const number = props.number
  const main_or_friend = props.main_or_friend
  const parentSetStateSmnToggle = props.parentSetStateSmnToggle
  const parent_state_smn_toggle = props.parent_state_smn_toggle[number]
  const parentSetStateUpdateAura = props.parentSetStateUpdateAura
  const parent_state_search_element = props.parent_state_search_element
  const parent_state_list_aura_boost = props.parent_state_list_aura_boost
  
  /*
    key_1: MAIN or FRIEND
    key_2: OPTIMUS or OMEGA or SIXDRAGON
    key_3: SUMMON_NAME
    key_4: 5凸 or 4凸
    */
  const updateSummon = (key_1, key_2, key_3, key_4) => {
    let content = cloneDeep(props.parent_state_smn_toggle)
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
    content[number] = item
    console.log(content)
    parentSetStateSmnToggle(content);
    updateAuraBoost(content, parent_state_list_aura_boost,parentSetStateUpdateAura,number);
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
          if (!parent_state_search_element[cvt_summonname2element[element]])
            return;
          console.log(element)
          let key__1 = main_or_friend;
          let key__2 = omega_or_opti;
          let key__3 = element;
          let key__4 = lank;
          let key_toggle = parent_state_smn_toggle[main_or_friend][omega_or_opti][element][lank].toggle
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
              <div
                //disabled
                style={{
                  transform: "scale(1)",
                  width: "100px",
                  border: "0px solid black",
                }}
                class="tooltip button"
                value={text_value}
                onClick={() => updateSummon(key__1, key__2, key__3, key__4)}
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
                      margin: "0",
                      padding: "0",
                      border: "0",
                      width: "100%",
                      height: "20px",
                      objectPosition: "0% 15%",
                      objectFit: "cover",
                      opacity: key_toggle? 1.0 : 0.15,
                      cursor: "pointer"
                    }}
                    src={process.env.PUBLIC_URL + "/" + ICON_SUMMONS[element]}
                  />
                </div>
              </div>
            </HtmlTooltip>
          );
        })
    )
  );
  return (
    <div style={{ textAlign: "center" }}>
      <div class="wrap-opti">{Rsl.opti}</div>
      <div class="wraup-omega">{Rsl.omega}</div>
      <div class="wrap-sixdragon">{Rsl.sixdragon}</div>
    </div>
  );
};
