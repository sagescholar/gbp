import React from 'react';
import Header from './layouts/Header';
import { Footer } from './layouts/Footer';
import "./App.css";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill"
import { buildSummonsButton } from './components/BuildSummonsButton'

//DATA
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from './data/WEAPONSKILL';
import { AURA_BOOST_INTERFACE } from './data/SUMMONS';
import { weapons } from "./data/WEAPONS";
import { STATE_SUMMONS_INTERFACE} from './data/SUMMONS'
import { ELEMENT_STYLE } from './data/ELEMENT';

function App() {

  const [list_equiped, addEquiped] = React.useState([]);
  const [list_aura_boost, updateAura] = React.useState(JSON.stringify(AURA_BOOST_INTERFACE));
  
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
  const [summons_list, updateSummons] = 
  React.useState(JSON.parse(JSON.stringify(STATE_SUMMONS_INTERFACE)));

  React.useEffect(()=>{

  })

  function addEquipe(e){
    let item = JSON.parse(JSON.stringify(list_equiped));
    item.push(e.target.value);
    console.log(item)
    addEquiped(item);
  }

  function deleteEquip(e){
    let item = JSON.parse(JSON.stringify(list_equiped));
  }

  return (
    <>
      <Header />
      <div style={{margin: "5px", padding: "5px", border: "1px solid #202020"}}>
        <div>
        {Object.keys(summons_list).map((key1) => 
          Object.keys(summons_list[key1]).map((key2) =>
            Object.keys(summons_list[key1][key2]).map((key3) => 
              Object.keys(summons_list[key1][key2][key3]).map((key4) => {
              let item = summons_list[key1][key2][key3][key4];
              if(item.toggle) 
                return <p style={{fontSize: "12px"}}>{key1 + " : " + key3 + "_" + key4}</p>
              })
            )
          )
        )}
        </div>

      </div>

      <div class="App">

        {/* EQUIPED */}
        <div class="app-equiped">
          <p style={{textAlign:"center", padding: "0px 20px"}}>EQUIPED</p>
          {list_equiped.map((value) => <input style={{textAlign:"center",fontSize: "11px"}} disabled value={value} />)}
        </div>

        {/* 計算結果 */}
        <div class="app-compute">
          <p style={{textAlign: "center", paddingBottom: "5px", borderBottom: "1px solid #202020"}}>COMPUTE RESULT</p>
          
          {computeWeaponSkill(list_equiped,list_aura_boost)}
        </div>

        {/* 武器選択 */}
        <div class="app-weapon-list">
          <>
            <p>SELECTER</p>
            {Object.keys(weapons).map((key) => (
              <input
                //disabled
                type=""
                onClick={addEquipe}
                style={{ margin: "1px", fontSize: "11px", textAlign: "center"}}
                value={weapons[key].name}
              />
            ))}
          </>
        </div>

        {/* 石選択 */}
        <div class="app-summons">
          {buildSummonsButton(summons_list.MAIN, 'MAIN', updateSummons, summons_list)}
          {buildSummonsButton(summons_list.FRIEND, 'FRIEND', updateSummons, summons_list)}
        </div>
      </div>

      <hr />

      {/*{buildTable()}*/}

      {Footer()}
    </>
  );
}

export default App;