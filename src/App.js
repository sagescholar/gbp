import React from "react";
import { Header}  from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import "./App.css";
import "./css/SelectWeapon.css"
import cloneDeep from "lodash.clonedeep";

import { useModal } from 'react-hooks-use-modal';
import Typography from "@material-ui/core/Typography";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill";
import { buildSummonsButton } from "./components/BuildSummonsButton";
import { SliderHp } from './components/SliderHp';
import { buildWeaponSearchElementButton } from "./components/BuildWeaponSearchElementButton";
import { alertEquipedWeapon } from "./components/AlertEquipedWeapon"

//DATA
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "./data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "./data/SUMMONS";
import { weapons } from "./data/WEAPONS";
import { STATE_SUMMONS_INTERFACE } from "./data/SUMMONS";
import { ELEMENT_STYLE, ELEMENT_TOGGLE_INTERFACE } from "./data/ELEMENT";
import { buildWeaponButton } from "./components/BuildWeaponButton";

function App() {

  /* STATE */
  const [state_list_equiped, setStateAddEquiped] = React.useState({});
  const [state_hp, setStateHp] = React.useState(60)
  const [state_list_aura_boost, setStateUpdateAura] = React.useState(
    cloneDeep(AURA_BOOST_INTERFACE)
  );
  const [state_smn_toggle, setStateSmnToggle] = React.useState(
    cloneDeep(STATE_SUMMONS_INTERFACE)
  );
  const [state_weapon_search_element, setStateWeaponSearchElement] = React.useState(
    cloneDeep(ELEMENT_TOGGLE_INTERFACE)
  ) 

  /* STATE END */

  /* MODAL */
  const [Modal2, open, close, isOpen] = useModal('root',{
    preventScroll: true,
  });
  const modalStyle = {
    backgroundColor: '#fff',
    padding: '60px 100px',
    borderRadius: '10px',
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

      <div class="App">
        {/* 武器選択 */}
        <div class="app-weapon-select-wrap">
            {buildWeaponSearchElementButton(state_weapon_search_element,setStateWeaponSearchElement)}
            {buildWeaponButton(state_list_equiped,setStateAddEquiped,open,state_weapon_search_element)}
            
        </div>

        {/* EQUIPED */}
        <div class="app-equiped">
          {alertEquipedWeapon(state_list_equiped)}
          {Object.keys(state_list_equiped).map((key) => (
            <div
              class="equiped-btn-wrap"
            >
            <a class="equiped-btn">{state_list_equiped[key].name}</a>
            </div>
          ))}
        </div>

        {/* 計算結果 */}
        <div class="app-compute">
        <div style={{width: ""}}>
        <a>{"RESULT:"+state_hp}</a>
        {SliderHp(state_hp,setStateHp)}
        </div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "5px",
              borderBottom: "1px solid #202020",
            }}
          >
            COMPUTE RESULT
          </p>

          {computeWeaponSkill(state_list_equiped, state_list_aura_boost, state_hp)}
        </div>

        

        {/* 石選択 */}
        <div class="app-summons">
          {buildSummonsButton(
            "MAIN",
            setStateSmnToggle,
            state_smn_toggle,
            setStateUpdateAura
          )}
          {buildSummonsButton(
            "FRIEND",
            setStateSmnToggle,
            state_smn_toggle,
            setStateUpdateAura
          )}
        </div>
      </div>

      <hr />

      {/*{buildTable()}*/}

      {Footer()}
    </>
  );
}

export default App;
