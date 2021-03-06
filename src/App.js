import React, { useState } from "react";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import "./App.css";
import "./css/SelectWeapon.css";
import cloneDeep from "lodash.clonedeep";

import { useModal } from "react-hooks-use-modal";
import Typography from "@material-ui/core/Typography";
import { AppBar, Button, Card, Tooltip } from "@material-ui/core";
import { Box } from "@material-ui/core";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill";
import BuildSummonsButton from "./components/BuildSummonsButton";
import { SliderHp } from "./components/SliderHp";
import { buildWeaponSearchElementButton } from "./components/BuildWeaponSearchElementButton";
import AlertEquipedWeapon, {
  changeActibeEquiped,
} from "./components/AlertEquipedWeapon";
import BuildEquipedWeaponButton from "./components/BuildEquipedWeaponButton";
import GenerateComputeChart from "./components/GenerateComputeChart";

//DATA
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "./data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "./data/SUMMONS";
import { weapons } from "./data/WEAPONS";
import { STATE_SUMMONS_INTERFACE } from "./data/SUMMONS";
import { ELEMENT_STYLE, ELEMENT_TOGGLE_INTERFACE } from "./data/ELEMENT";
import { buildWeaponButton } from "./components/BuildWeaponButton";
import ControlledTooltip from "./components/CastumMaterialUI/ControlledTooltips";
import Toppage from "./layouts/Toppage";
import Draggable from "react-draggable";
import { buildChatLog } from "./components/Firebase/Firebase";
import AppbarSummons from "./layouts/AppbarSummons";
import AppbarChartDetail from "./layouts/AppbarChartDetail"
import GenerateComputeDamageChart from "./components/GenerateComputeDamageChart"
import { computeDamage } from "./components/ComputeDamage"
import GenerateEquipedSummon from "./components/GenerateEquipedSummon";

function App() {
  /* STATE */
  const [state_view, setStateView] = useState("top");
  const [state_summon_window, setStateSummonWindow] = useState(false);

  const [state_show_graph_1, setStateShowGraph1] = useState(false);
  const [state_show_graph_detail_1, setStateShowGraphDetail1] = useState(false);
  const [state_show_graph_2, setStateShowGraph2] = useState(false);
  const [state_show_graph_detail_2, setStateShowGraphDetail2] = useState(false);

  const [state_list_equiped, setStateAddEquiped] = React.useState({
    1: {},
    2: {},
  });
  const [state_list_summon, setStateAddSummon] = useState({1:{},2:{}})
  const [state_active_equiped_number, setStateActiveEquipedNumber] =
    useState("1");
  const [state_hp, setStateHp] = React.useState(60);
  const [state_list_aura_boost, setStateUpdateAura] = React.useState({
    1: cloneDeep(AURA_BOOST_INTERFACE),
    2: cloneDeep(AURA_BOOST_INTERFACE),
  });
  const [state_smn_toggle, setStateSmnToggle] = React.useState({
    1: cloneDeep(STATE_SUMMONS_INTERFACE),
    2: cloneDeep(STATE_SUMMONS_INTERFACE),
  });
  const [state_weapon_search_element, setStateWeaponSearchElement] =
    React.useState(cloneDeep(ELEMENT_TOGGLE_INTERFACE));
  const [state_chart_value, setStateChartValue] = React.useState([]);
  const [state_toggle_summon, setStateToggleSummon] = React.useState(true);
  const [state_YMAX, setStateYMAX] = useState(80.0);
  const [state_damage_YMAX, setStateDamageYMAX] = useState(1000000.0);

  /*
  ?????????
  TODO:
  1.?????????
  2.????????????
  */
  const [state_summon_equiped,setStateSummonEquiped] = useState({1:{},2:{}})

  /*
  MAIN CHARACTER https://gbf.wiki/Main_Character
  TODO:
  1. ?????????
  2. ?????????
  */
  const [state_main_character, setStateMainCharacter] = useState({1:{},2:{}}) 

  /*
  
  */
  const [state_list_character, setStateListCharacter] = useState({1:{},2:{}})

  /* STATE END */

  /* MODAL */
  const [Modal2, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });
  const modalStyle = {
    backgroundColor: "#fff",
    padding: "60px 100px",
    borderRadius: "10px",
  };

  /* MODAL END */

  /*
  SUMMONS
  ComputeWeaponSkill???1.????????????App??????????????????????????????????????????
  1. ????????????AURA_BOOST_INTERFACE???????????????????????????(opti, omega, none????????????)
  ????????????????????????State??????????????????????????????????????????????????????(??????????????????)?????????
  ??????????????????./data/SUMMONS???????????????????????????????????????????????????????
  WeaponSkill<->????????????????????????????????????or???????????????key?????????????????????
  */

  /*
  ????????????
  class,id,
  value: ???????????????
  title: ?????????????????????????????????
  */

  return (
    <>
      {/*buildChatLog()*/}
      <Modal2>
        <div style={modalStyle}>
          <h1>??????:?????????10???????????????</h1>
          <p>????????????EquipedList?????????????????????????????????</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal2>

      {/*HEADER*/}
      {Header(setStateAddEquiped, setStateView)}

      {state_view == "top" && <Toppage parentSetStateView={setStateView} />}

      {state_view == "app" && (
        <>
          <div
            class="wrap-app"
            style={{ position: "relative", height: "auto", width: "100%" }}
          >
            <div
              class="App"
              style={{
                minHeight: "1000px",
                maxWidth: "1500px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                display: "-webkit-flex",
                alignItems: "start",
              }}
            >
              {/* ???????????? */}
              <div class="app-weapon-select-wrap">
                {buildWeaponSearchElementButton(
                  state_weapon_search_element,
                  setStateWeaponSearchElement
                )}
                {buildWeaponButton(
                  state_list_equiped,
                  setStateAddEquiped,
                  open,
                  state_weapon_search_element,
                  state_active_equiped_number
                )}
              </div>

              {/* EQUIPED */}
              <div class="app-equiped-1">
                <div onClick={() => setStateActiveEquipedNumber("1")}>
                  <AlertEquipedWeapon
                    parent_state_list_equiped={state_list_equiped["1"]}
                  />
                </div>
                {changeActibeEquiped(
                  state_active_equiped_number,
                  setStateActiveEquipedNumber,
                  1
                )}
                <BuildEquipedWeaponButton
                  parent_state_list_equiped={state_list_equiped}
                  parentSetStateAddEquiped={setStateAddEquiped}
                  number={1}
                />
              </div>

              <div class="app-equiped-2">
                <div onClick={() => setStateActiveEquipedNumber("2")}>
                  <AlertEquipedWeapon
                    parent_state_list_equiped={state_list_equiped["2"]}
                  />
                </div>
                {changeActibeEquiped(
                  state_active_equiped_number,
                  setStateActiveEquipedNumber,
                  2
                )}
                <BuildEquipedWeaponButton
                  parent_state_list_equiped={state_list_equiped}
                  parentSetStateAddEquiped={setStateAddEquiped}
                  number={2}
                />
              </div>

              {/* ???????????? */}
              
              <div class="weap-compute-result" style={{ flexGrow: "1" }}>
                
                <div
                  style={{
                    backgroundColor: "#666666",
                    
                    display: "flex",
                    height: "40px",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                {/* ?????? */}
                <Draggable handle="#imhandle"><div style={{maxWidth:"550px",position: "absolute",}}>
                <div
                  className="draggable-wrapper"
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  
                  {state_show_graph_1 && (
                    <GenerateComputeChart
                      parent_state_list_equiped={state_list_equiped}
                      parent_state_list_aura_boost={state_list_aura_boost}
                      parent_state_YMAX={state_YMAX}
                      parentSetStateYMAX={setStateYMAX}
                      parentSetStateShowGraph = {setStateShowGraph1}
                      parent_state_show_graph = {state_show_graph_1}
                      parentSetStateShowGraphDetail = {setStateShowGraphDetail1}
                      parent_state_show_graph_detail = {state_show_graph_detail_1}
                    />
                  )}
                </div>
                {state_show_graph_detail_1 && (
                <Draggable handle="#imhandle-child"><Card>
                <AppbarChartDetail
                    parent_state_show_graph_detail = {state_show_graph_detail_1}
                    parentSetStateShowGraphDetail = {setStateShowGraphDetail1}
                />
                <div style={{
                    display: "block",
                    width: "100%",
                    justifyContent: "center",
                    alignItems:"center"
                  }}>
                    <div class="wrap-slider" style={{ width: "50%",}}>
                      <div style={{ textAlign: "center",}}>
                        {"RESULT:" + state_hp}
                      </div>
                      {SliderHp(state_hp, setStateHp)}
                    </div>

                  <div
                    class="wrap-compute-skill"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {computeWeaponSkill(
                      state_list_equiped[state_active_equiped_number],
                      state_list_aura_boost[state_active_equiped_number],
                      state_hp
                    )}
                    
                  </div>
                </div></Card></Draggable>)}
                </div>
                </Draggable>
                {/* ?????? ?????????*/}

                {/* ?????????????????? */}
                <Draggable handle="#imhandle"><div style={{maxWidth:"550px",position: "absolute"}}>
                <div
                  className="draggable-wrapper"
                  style={{
                    
                    left: "100px",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  
                  {state_show_graph_2 && (
                    <GenerateComputeDamageChart
                      parent_state_list_equiped={state_list_equiped}
                      parent_state_list_aura_boost={state_list_aura_boost}
                      parent_state_YMAX={state_damage_YMAX}
                      parentSetStateYMAX={setStateDamageYMAX}
                      parentSetStateShowGraph = {setStateShowGraph2}
                      parent_state_show_graph = {state_show_graph_2}
                      parentSetStateShowGraphDetail = {setStateShowGraphDetail2}
                      parent_state_show_graph_detail = {state_show_graph_detail_2}
                    />
                  )}
                </div>
                {state_show_graph_detail_2 && (
                <Draggable handle="#imhandle-child"><Card>
                <AppbarChartDetail
                    parent_state_show_graph_detail = {state_show_graph_detail_2}
                    parentSetStateShowGraphDetail = {setStateShowGraphDetail2}
                />
                <div style={{
                    display: "block",
                    width: "100%",
                    justifyContent: "center",
                    alignItems:"center"
                  }}>
                    <div class="wrap-slider" style={{ width: "50%",}}>
                      <div style={{ textAlign: "center",}}>
                        {"RESULT:" + state_hp}
                      </div>
                      {SliderHp(state_hp, setStateHp)}
                    </div>
                  <div
                    class="wrap-compute-skill"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {computeDamage(
                      state_list_equiped[state_active_equiped_number],
                      state_list_aura_boost[state_active_equiped_number],
                      state_hp
                    )}
                    
                  </div>
                </div></Card></Draggable>)}
                </div>
                </Draggable>
                {/* ?????????????????? ?????????*/}
                

                
              </div>

              {/* ????????? */}
              <div
                class="wrap-summons"
                style={{
                  width: "100px",
                  marginLeft: "auto",
                  border: "solid 0px black",
                }}
              >
                <div
                  class="summons-head"
                  onClick={() => setStateToggleSummon(!state_toggle_summon)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "40px",
                    backgroundColor: "#444444",
                    color: "white",
                  }}
                >
                  {/*<a style={{ verticalAlign: "middle",textAlign: "center",backgroundColor: "#557799", display: "block", width: "90%", height: "60%" }}>
              <span style={{cursor:"default"}}>{state_toggle_summon ? "MAIN" : "SUPPORT"}</span>
          </a>*/}
                  {/*<Button color="primary">
                    {state_toggle_summon ? "MAIN" : "SUPPORT"}
        </Button>*/}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM MENU */}

          <div
            class="under-menu"
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "0px solid black",
              backgroundColor: "#ededf7",
            }}
          >
            <Tooltip title="?????????????????????">
            <Button onClick={() => setStateAddEquiped({ 1: {}, 2: {} })}>
              <img
                style={{ width: "30px" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/" +
                  "outline_delete_black_24dp.png"
                }
              />
            </Button></Tooltip>
            <Tooltip title="????????????????????????">
            <Button onClick={() => setStateSummonWindow(!state_summon_window)}>
              <div style={{display:"flex",justifyContent:"center",width:"90px",alignItems:"center"}}>
              <img
                style={{ width: "30px" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/" +
                  "SummonSeries_Omega_Series_icon.png"
                }
              />
              <img
                style={{ width: "30px" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/" +
                  "SummonSeries_Optimus_Series_icon.png"
                }
              />
              {state_toggle_summon && (
                <img
                  style={{ width: "30px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/" +
                    "SummonSeries_Six_Dragons_icon.png"
                  }
                />
              )}</div>
            </Button></Tooltip>

            <Tooltip title="????????????????????????">
            <Button  size="small" onClick={() => setStateSummonWindow(!state_summon_window)}>
              <img
                style={{ width: "30px" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/" +
                  "52px-SummonSeries_Archangel_Series_icon.png"
                }
              />
            </Button></Tooltip>

            <Tooltip title="????????????????????????">
            <Button  onClick={() => setStateSummonWindow(!state_summon_window)}>
              <img
                style={{ width: "30px" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/" +
                  "52px-SummonSeries_Providence_Series_icon.png"
                }
              />
            </Button></Tooltip>
            
            {/* Graph Show Button */}
            <Tooltip title="??????">
            <Button onClick={() => setStateShowGraph1(!state_show_graph_1)}>
              <img
                style={{ width: "30px" }}
                src={process.env.PUBLIC_URL + "/images/" + "893216.png"}
              />
            </Button></Tooltip>
            <Tooltip title="?????????????????????">
            <Button onClick={() => setStateShowGraph2(!state_show_graph_2)}>
              <img
                style={{ width: "30px" }}
                src={process.env.PUBLIC_URL + "/images/" + "893216.png"}
              />
            </Button></Tooltip>
            {/* Graph Show Button End */}
          </div>
          {/* BOTTOM MENU END */}

          {state_summon_window && (
            <Draggable>
              <div
                style={{
                  position: "fixed",
                  bottom: "45px",
                  right: "10px",
                  width: "800px",
                  height: "500px",
                  //display: "flex",
                  alignItems: "start",
                  justifyContent: "space-between",
                  border: "0px solid black",
                }}
              >
                <Card>
                  <AppbarSummons
                    parent_state_toggle_summon={state_toggle_summon}
                    parentSetStateToggleSummon={setStateToggleSummon}
                    parentSetStateSummonWindow={setStateSummonWindow}
                  />
                  <GenerateEquipedSummon
                    parent_state_list_summon={state_list_summon}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    {state_toggle_summon && (
                      <BuildSummonsButton
                        main_or_friend="MAIN"
                        parentSetStateSmnToggle={setStateSmnToggle}
                        parent_state_smn_toggle={state_smn_toggle}
                        parentSetStateUpdateAura={setStateUpdateAura}
                        parent_state_search_element={
                          state_weapon_search_element
                        }
                        parent_state_list_aura_boost={state_list_aura_boost}
                        number={"1"}
                      />
                    )}
                    {!state_toggle_summon && (
                      <BuildSummonsButton
                        main_or_friend="FRIEND"
                        parentSetStateSmnToggle={setStateSmnToggle}
                        parent_state_smn_toggle={state_smn_toggle}
                        parentSetStateUpdateAura={setStateUpdateAura}
                        parent_state_search_element={
                          state_weapon_search_element
                        }
                        parent_state_list_aura_boost={state_list_aura_boost}
                        number={"1"}
                      />
                    )}
                    {state_toggle_summon && (
                      <BuildSummonsButton
                        main_or_friend="MAIN"
                        parentSetStateSmnToggle={setStateSmnToggle}
                        parent_state_smn_toggle={state_smn_toggle}
                        parentSetStateUpdateAura={setStateUpdateAura}
                        parent_state_search_element={
                          state_weapon_search_element
                        }
                        parent_state_list_aura_boost={state_list_aura_boost}
                        number={"2"}
                      />
                    )}
                    {!state_toggle_summon && (
                      <BuildSummonsButton
                        main_or_friend="FRIEND"
                        parentSetStateSmnToggle={setStateSmnToggle}
                        parent_state_smn_toggle={state_smn_toggle}
                        parentSetStateUpdateAura={setStateUpdateAura}
                        parent_state_search_element={
                          state_weapon_search_element
                        }
                        parent_state_list_aura_boost={state_list_aura_boost}
                        number={"2"}
                      />
                    )}
                  </div>
                </Card>
              </div>
            </Draggable>
          )}

          {/*<hr />*/}
        </>
      )}

      {/*{buildTable()}*/}

      {Footer()}
    </>
  );
}

export default App;
