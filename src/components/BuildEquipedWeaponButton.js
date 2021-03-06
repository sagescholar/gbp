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
import { Button, Card } from "@material-ui/core";
import { DARKOPS_ICON, EXSKILLICON } from "../data/WEAPONEXSKILL";
import AppbarEquiped from "../layouts/AppbarEquiped";
import Draggable from "react-draggable";

export default function BuildEquipedWeaponButton(props) {
  const num = String(props.number);
  const parent_state_list_equiped = props.parent_state_list_equiped[num];
  const parentSetStateAddEquiped = props.parentSetStateAddEquiped;

  const [state_control_window, setStateControlWindow] = useState(false);

  const updateEquipedShow = (key) => {
    let content = cloneDeep(props.parent_state_list_equiped);
    Object.keys(content).forEach((n) =>
      Object.keys(content[n]).forEach((id) =>
        content[n][id].isShow = false
      )
    )
    if (props.parent_state_list_equiped[num][key].isShow) {
      parentSetStateAddEquiped(content);
      const b = () => 1 + 1
    }
    else {
      content[num][key].isShow = !content[num][key].isShow;
      parentSetStateAddEquiped(content);
    }
  };

  const updateExSkill = (id, skill_name, lank, n) => {
    console.log("update ex skill");
    let content = cloneDeep(props.parent_state_list_equiped);
    content[num][id]["EX_Skill"][n].name = skill_name;
    content[num][id]["EX_Skill"][n].lank = lank;
    parentSetStateAddEquiped(content);
  };

  const deleteEquiped = (id) => {
    const ID = String(id)
    let content = cloneDeep(props.parent_state_list_equiped);
    console.log(content[num][ID])
    delete content[num][ID]
    parentSetStateAddEquiped(content);
  }

  const buildDarkopsButton = (num, id) => {
    const ID = id;
    const VAL = 0;

    const skill_name = parent_state_list_equiped[id]["EX_Skill"][num].name

    return (
      <div
        style={{
          marginTop: "5px",
          width: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <a style={{ fontSize: "10px" }}>{"[???" + num + "] : "}</a>
        
        <>
          {Object.keys(DARKOPS_ICON[num]).map((key) => (
            <div
              onClick={() => updateExSkill(ID, key, /*lank*/ 3, num)}
              style={{
                fontSize: "10px",
                textAlign: "center",
                backgroundColor: "#222222",
                cursor: "pointer",
              }}
            >
              {skill_name == key ? (
                <img
                  style={{ height: "15px", width: "15px", opacity: "1.0" }}
                  src={process.env.PUBLIC_URL + "/" + DARKOPS_ICON[num][key]}
                />
              ) :
                <img
                  style={{ height: "15px", width: "15px", opacity: "0.5" }}
                  src={process.env.PUBLIC_URL + "/" + DARKOPS_ICON[num][key]}
                />}

            </div>
          ))}
        </>
      </div>
    );
  };

  const buildExSkillButton = (num, id) => {
    const ID = id;
    const VAL = 0;

    const skill_name = parent_state_list_equiped[id]["EX_Skill"][num].name

    return (
      <div
        style={{
          marginTop: "5px",
          width: "175px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a style={{ fontSize: "10px" }}>{"EX?????????[???" + num + "] : "}</a>
        
        <>
          {Object.keys(EXSKILLICON).map((key) => (
            <div
              onClick={() => updateExSkill(ID, key, /*lank*/ 3, num)}
              style={{
                fontSize: "10px",
                textAlign: "center",
                backgroundColor: "#222222",
                cursor: "pointer",
              }}
            >
              {skill_name == key ? (
                <img
                  style={{ height: "15px", width: "15px", opacity: "1.0" }}
                  src={process.env.PUBLIC_URL + "/" + EXSKILLICON[key]}
                />
              ) :
                <img
                  style={{ height: "15px", width: "15px", opacity: "0.5" }}
                  src={process.env.PUBLIC_URL + "/" + EXSKILLICON[key]}
                />}

            </div>
          ))}
        </>
      </div>
    );
  };

  const controlWindow = (key) => {
    let weapon_name = parent_state_list_equiped[key].name;
    let bonus = parent_state_list_equiped[key].Bonus;
    let open = parent_state_list_equiped[key].isShow;
    let bool_ex_skill = weapons[parent_state_list_equiped[key].name]["EX_Skill"];
    let bool_darkops = weapons[parent_state_list_equiped[key].name]["Darkops"];

    return (
      <>
        
        {/*TODO: POPUP CONTROLLER -> weapon?????????ATK,HP?????????*/}
        {open && (
          <Draggable>
          <div
            /*onClick={() => updateEquipedShow(key)}*/ style={{
              position: "fixed",
              left: String(10) + "px",
              bottom: "50px",
              zIndex: "1000",
            }}
          >
            <Card>
              <AppbarEquiped
                name = {weapon_name}
                parentDeleteEquiped = {deleteEquiped}
                id = {key}
                number = {num}
                parentUpdateEquipedShow = {updateEquipedShow}
                bonus = {bonus}
              />
              <div style={{ display: "flex", width: "300px", height: "100px" }}>
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "100px" }}
                    src={
                      process.env.PUBLIC_URL + "/" + weapons[weapon_name].icon
                    }
                  />
                </div>
                <div>
                  <a style={{fontSize:"9px"}}>ATK:{weapons[weapon_name].atk}&nbsp;
                  HP:{weapons[weapon_name].hp}&nbsp;
                  TYPE:{weapons[weapon_name].type}&nbsp;
                  SLV:{weapons[weapon_name].skill_level}&nbsp;
                  </a>
                  {bool_ex_skill && (
                    <>
                      {buildExSkillButton(1, key)}
                      {buildExSkillButton(2, key)}
                      {/*//TODO: ???????????????????????????????????????????????????*/}
                      <a style={{ fontSize: "4px" }}>Test mode: Fixed effect quantity of 3</a>
                    </>
                  )}
                  {bool_darkops && (
                    <>
                      {buildDarkopsButton(1, key)}
                      {buildDarkopsButton(2, key)}
                      {/*//TODO: ???????????????????????????????????????????????????*/}
                      <a style={{ fontSize: "4px" }}>Test: DARK OPS</a>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
          </Draggable>
        )}
        
      </>
    );
  };

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
      {Object.keys(parent_state_list_equiped).map((key) => {
        let weapon_name = parent_state_list_equiped[key].name;
        let isStateShow = parent_state_list_equiped[key].isShow
        console.log(weapon_name);

        return (
          <>
            {controlWindow(key)}
            <HtmlTooltip
              //open = {parent_state_list_equiped[key].isShow}
              title={
                <>
                  <div style={{ display: "flex" }}>
                    <div class="weapon-icon-wraper">
                      <img
                        style={{ width: "100px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/" +
                          weapons[weapon_name].icon
                        }
                      />
                    </div>
                    <div>HP:{weapons[weapon_name].element}</div>
                  </div>
                </>
              }
            >
              <div
                class="btn-wrap"
                onClick={() => updateEquipedShow(key)}
                onMouseEnter={() => setStateControlWindow(true)}
                onMouseLeave={() => setStateControlWindow(false)}
                value={weapons[weapon_name].name}
              >
                <a
                  style={{
                    backgroundColor: !isStateShow ? "#333333" : "#66a3ff",
                    color: "#eeeeee",
                    cursor: "pointer",
                  }}
                  class="btn"
                >
                  {weapons[weapon_name].name}
                </a>

              </div>
            </HtmlTooltip>
          </>
        );
      })}
    </div>
  );
}
