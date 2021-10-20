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

  const [state_total_boost,setStateTotalBoost] = useState(cloneDeep(CALCULATE_OUT_INTERFACE))
  const [state_total_atk,setStateTotalAtk] = useState(0)

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
  ComputeWeaponSkillに1.渡すためApp側で管理しておく必要がある。
  1. 渡す際はAURA_BOOST_INTERFACEの形に変更しておく(opti, omega, noneの三種類)
  変更検知のためにStateは必要。メイン石、フレンド石、サブ石(六竜、天司石)など。
  描画する石は./data/SUMMONSで管理しているオブジェクトを展開する?
  WeaponSkill<->加護効果の関係は召喚石名orスキル名をkeyにて関係をとる
  */

  /*
  共通属性
  class,id,
  value: 表示する値
  title: 要素に補足情報をつける
  */

  return (
    <>
      {/*buildChatLog()*/}
      <Modal2>
        <div style={modalStyle}>
          <h1>警告:武器は10本までです</h1>
          <p>更新してEquipedListをリセットしてください</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal2>

      {/*HEADER*/}
      {Header(setStateAddEquiped, setStateView)}

      {state_view == "top" && <Toppage />}

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
              {/* 武器選択 */}
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

              {/* 計算結果 */}
              
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
                {/* 倍率 */}
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
                    width: "50%",
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
                {/* 倍率 終わり*/}

                {/* 予測ダメージ */}
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
                    <GenerateComputeChart
                      parent_state_list_equiped={state_list_equiped}
                      parent_state_list_aura_boost={state_list_aura_boost}
                      parent_state_YMAX={state_YMAX}
                      parentSetStateYMAX={setStateYMAX}
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
                    width: "50%",
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
                {/* 予測ダメージ 終わり*/}
                

                
              </div>

              {/* 石選択 */}
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
            <Tooltip title="武器をリセット">
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
            <Tooltip title="召喚石を設定する">
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

            
            {/* Graph Show Button */}
            <Tooltip title="倍率">
            <Button onClick={() => setStateShowGraph1(!state_show_graph_1)}>
              <img
                style={{ width: "30px" }}
                src={process.env.PUBLIC_URL + "/images/" + "893216.png"}
              />
            </Button></Tooltip>
            <Tooltip title="予測ダメージ量">
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
                  width: "200px",
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
