import React, { useState } from "react";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import "./App.css";
import "./css/SelectWeapon.css";
import cloneDeep from "lodash.clonedeep";

import { useModal } from "react-hooks-use-modal";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill";
import { buildSummonsButton } from "./components/BuildSummonsButton";
import { SliderHp } from "./components/SliderHp";
import { buildWeaponSearchElementButton } from "./components/BuildWeaponSearchElementButton";
import AlertEquipedWeapon, { changeActibeEquiped } from "./components/AlertEquipedWeapon";
import BuildEquipedWeaponButton from "./components/BuildEquipedWeaponButton";
import { generateComputeChart } from "./components/GenerateComputeChart";

//DATA
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "./data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "./data/SUMMONS";
import { weapons } from "./data/WEAPONS";
import { STATE_SUMMONS_INTERFACE } from "./data/SUMMONS";
import { ELEMENT_STYLE, ELEMENT_TOGGLE_INTERFACE } from "./data/ELEMENT";
import { buildWeaponButton } from "./components/BuildWeaponButton";
import ControlledTooltip from "./components/CastumMaterialUI/ControlledTooltips";

function App() {
  /* STATE */
  const [state_list_equiped, setStateAddEquiped] = React.useState({1:{},2:{}});
  const [state_active_equiped_number, setStateActiveEquipedNumber] = useState("1")
  const [state_hp, setStateHp] = React.useState(60);
  const [state_list_aura_boost, setStateUpdateAura] = React.useState(
    cloneDeep(AURA_BOOST_INTERFACE)
  );
  const [state_smn_toggle, setStateSmnToggle] = React.useState(
    cloneDeep(STATE_SUMMONS_INTERFACE)
  );
  const [
    state_weapon_search_element,
    setStateWeaponSearchElement,
  ] = React.useState(cloneDeep(ELEMENT_TOGGLE_INTERFACE));
  const [state_chart_value, setStateChartValue] = React.useState([]);
  const [state_toggle_summon, setStateToggleSummon] = React.useState(true);
  const [state_YMAX, setStateYMAX] = useState(80.0)

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
      <Modal2>
        <div style={modalStyle}>
          <h1>警告:武器は10本までです</h1>
          <p>更新してEquipedListをリセットしてください</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal2>

      {/*HEADER*/}
      {Header(setStateAddEquiped)}

      <div class="wrap-app" style={{position:"relative",height:"auto",width:"100%",}}>
      
      <div class="App" style={{minHeight: "1000px",maxWidth:"1500px",marginLeft: "auto",marginRight:"auto", display:"flex",display: "-webkit-flex",alignItems:"start"}}>
        
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
          <AlertEquipedWeapon parent_state_list_equiped={state_list_equiped["1"]} />
          {changeActibeEquiped(state_active_equiped_number,setStateActiveEquipedNumber,1)}
          <BuildEquipedWeaponButton parent_state_list_equiped={state_list_equiped} parentSetStateAddEquiped={setStateAddEquiped} number={1} />
        </div>

        <div class="app-equiped-2">
          <AlertEquipedWeapon parent_state_list_equiped={state_list_equiped["2"]} />
          {changeActibeEquiped(state_active_equiped_number,setStateActiveEquipedNumber,2)}
          <BuildEquipedWeaponButton parent_state_list_equiped={state_list_equiped} parentSetStateAddEquiped={setStateAddEquiped} number={2} />
        </div>

        {/* 計算結果 */}
        <div class="weap-compute-result" style={{flexGrow:"1"}}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#666666",
                height: "40px",
                width: "100%",
              }}
            >
            
            {/* HEADER に 何か描きたい時はここ */}
            </div>

            <div class="wrap-chart" style={{display:"flex",width:"100%",justifyContent:"center" }}>
            {generateComputeChart(state_list_equiped, state_list_aura_boost, state_YMAX, setStateYMAX)}
            </div>

            <div class="wrap-hp-slider" style={{display:"flex",width:"100%",justifyContent:"center"}} >
              <div class="wrap-slider" style={{width:"20%"}}>
              <div style={{textAlign:"center"}}>{"RESULT:" + state_hp}</div>
              {SliderHp(state_hp, setStateHp)}
              </div>
            </div>

            

            
            <div class="wrap-compute-skill" style={{width:"100%",display:"flex", justifyContent:"center"}}>
              
              {computeWeaponSkill(
                state_list_equiped[state_active_equiped_number],
                state_list_aura_boost,
                state_hp
              )}
            </div>
            
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
            <Button color="primary">{state_toggle_summon ? "MAIN" : "SUPPORT"}</Button>
          </div>

          {state_toggle_summon &&
            buildSummonsButton(
              "MAIN",
              setStateSmnToggle,
              state_smn_toggle,
              setStateUpdateAura,
              state_weapon_search_element
            )}
          {!state_toggle_summon &&
            buildSummonsButton(
              "FRIEND",
              setStateSmnToggle,
              state_smn_toggle,
              setStateUpdateAura,
              state_weapon_search_element
            )}
        </div>
      </div>
      </div>

      
      <div class="under-menu">

      </div>
      {/*<hr />*/}

      {/*{buildTable()}*/}

      {Footer()}
    </>
  );
}

export default App;
