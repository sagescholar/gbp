import React from 'react';
import Header from './layouts/Header';
import { Footer } from './layouts/Footer';
import "./App.css";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill"
import { buildTable } from "./components/BuildTable";


//DATA
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from './data/WEAPONSKILL';
import { AURA_BOOST_INTERFACE } from './data/SUMMONS';
import { weapons } from "./data/WEAPONS";
import { STATE_SUMMONS_INTERFACE} from './data/SUMMONS'
import { ELEMENT_STYLE } from './data/ELEMENT';

function App() {

  const [list_equiped, addEquiped] = React.useState([]);
  const [list_aura_boost, setSummons] = React.useState(JSON.stringify(AURA_BOOST_INTERFACE));

  /*
  SUMMONS
  ComputeWeaponSkillに1.渡すためApp側で管理しておく必要がある。
  1. 渡す際はAURA_BOOST_INTERFACEの形に変更しておく(opti, omega, noneの三種類)
  変更検知のためにStateは必要。メイン石、フレンド石、サブ石(六竜、天司石)など。
  描画する石は./data/SUMMONSで管理しているオブジェクトを展開する?
  WeaponSkill<->加護効果の関係は召喚石名orスキル名をkeyにて関係をとる
  */
  const summons_list = STATE_SUMMONS_INTERFACE;
  const buildSummonsButton = (summons_list, main_or_friend) =>{
    const Rsl = {
      opti: [],
      omega: [],
      sixdragon: [],
    }
    Object.keys(summons_list).map((omega_or_opti) =>
      Object.keys(summons_list[omega_or_opti]).map((element) =>
        Rsl[omega_or_opti].push(<input disabled style={{border: "1px solid " + ELEMENT_STYLE[element], color: "#303030"}} class="summons-button" value={element} />)
      )
    )
    return(
      <div>
        <p style={{textAlign: "center"}}>{main_or_friend}</p>
        <div class="opti_button">
          {Rsl.opti}
        </div>
        <hr/>
        <div class="omega_button">
          {Rsl.omega}
        </div>
        <hr />
        <div class="sixdragon_button">
          {Rsl.sixdragon}
        </div>
      </div>
    )
  }

  React.useEffect(()=>{

  })

  function addEquipe(e){
    let item = JSON.parse(JSON.stringify(list_equiped));
    item.push(e.target.value);
    console.log(item)
    addEquiped(item);
  }

  return (
    <>
      <Header />

      
      <div class="App">

        {/* EQUIPED */}
        <div class="app-equiped">
          <p style={{textAlign:"center"}}>EQUIPED</p>
          {list_equiped.map((value) => <input style={{textAlign:"center",fontSize: "11px"}} disabled value={value} />)}
        </div>

        {/* 計算結果 */}
        <div class="app-compute">
          <p style={{textAlign: "center"}}>COMPUTE RESULT</p>
          <hr/>
          {computeWeaponSkill(list_equiped)}
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
          {buildSummonsButton(summons_list.MAIN, 'MAIN')}
          {buildSummonsButton(summons_list.FRIEND, 'FRIEND')}
        </div>
      </div>

      <hr />

      {/*{buildTable()}*/}

      {Footer()}
    </>
  );
}

export default App;
