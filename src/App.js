import React from "react";
import { Header}  from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import "./App.css";
import "./css/SelectWeapon.css"
import cloneDeep from "lodash.clonedeep";
import { AreaChart, Area, LineChart, Line, YAxis, XAxis ,Tooltip} from 'recharts'

import { useModal } from 'react-hooks-use-modal';
import Typography from "@material-ui/core/Typography";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill";
import { buildSummonsButton } from "./components/BuildSummonsButton";
import { SliderHp } from './components/SliderHp';
import { buildWeaponSearchElementButton } from "./components/BuildWeaponSearchElementButton";
import { alertEquipedWeapon } from "./components/AlertEquipedWeapon"
import { buildEquipedWeaponButton } from './components/BuildEquipedWeaponButton'

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

  /* Rechart */
  
  const data = [
    {name: '0', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,0,false)},
    {name: '10', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,10,false)},
    {name: '20', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,20,false)},
    {name: '30', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,30,false)},
    {name: '40', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,40,false)},
    {name: '50', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,50,false)},
    {name: '60', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,60,false)},
    {name: '70', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,70,false)},
    {name: '80', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,80,false)},
    {name: '90', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,90,false)},
    {name: '100', uv: computeWeaponSkill(state_list_equiped, state_list_aura_boost,100,false)},
  ]

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
          {buildEquipedWeaponButton(state_list_equiped,setStateAddEquiped)}
        </div>

        {/* 計算結果 */}
        <div class="app-compute">
        <div style={{backgroundColor: ""}}>
        

        <a style={{width:"100%",textAlign:"center"}}>0%-100% Graph</a>
        <AreaChart width={600} height={400} data={data}>
          <Area type="monotone" dataKey="uv['火']" stroke="#ff6666" fillOpacity={0} fill="#ff6666"/>
          <Area type="monotone" dataKey="uv['水']" stroke="#668cff" fillOpacity={0} fill="#668cff"/>
          <Area type="monotone" dataKey="uv['土']" stroke="#ffb366" fillOpacity={0} fill="#ffb366"/>
          <Area type="monotone" dataKey="uv['風']" stroke="#66ff8c" fillOpacity={0} fill="#66ff8c"/>
          <Area type="monotone" dataKey="uv['光']" stroke="#e6b800" fillOpacity={0} fill="#e6b800"/>
          <Area type="monotone" dataKey="uv['闇']" stroke="#8c66ff" fillOpacity={0} fill="#8c66ff"/>
          <YAxis domain={[1.0,'dataMax+1.0']} />
          <XAxis dataKey="name" />
          {/*<Tooltip />*/}
        </AreaChart>
        
        </div>

        <a>{"RESULT:"+state_hp}</a>
        {SliderHp(state_hp,setStateHp)}
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
