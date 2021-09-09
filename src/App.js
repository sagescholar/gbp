import React from "react";
import Header from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import "./App.css";
import cloneDeep from "lodash.clonedeep";

//COMPONENTS
import { computeWeaponSkill } from "./components/ComputeWeaponSkill";
import { buildSummonsButton } from "./components/BuildSummonsButton";

//DATA
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "./data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "./data/SUMMONS";
import { weapons } from "./data/WEAPONS";
import { STATE_SUMMONS_INTERFACE } from "./data/SUMMONS";
import { ELEMENT_STYLE } from "./data/ELEMENT";

function App() {
  const [state_list_equiped, setStateAddEquiped] = React.useState([]);
  const [state_list_aura_boost, setStateUpdateAura] = React.useState(
    cloneDeep(AURA_BOOST_INTERFACE)
  );
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
  const [state_smn_toggle, setStateSmnToggle] = React.useState(
    cloneDeep(STATE_SUMMONS_INTERFACE)
  );

  function addEquipe(e) {
    let item = JSON.parse(JSON.stringify(state_list_equiped));
    item.push(e.target.value);
    console.log(item);
    setStateAddEquiped(item);
  }

  function deleteEquip(e) {
    let item = JSON.parse(JSON.stringify(state_list_equiped));
  }

  return (
    <>
      <Header />
      <div
        style={{
          height: "80px",
          margin: "5px",
          padding: "5px",
          border: "1px solid #202020",
        }}
      >
        <div>
          {Object.keys(state_smn_toggle).map((key1) =>
            Object.keys(state_smn_toggle[key1]).map((key2) =>
              Object.keys(state_smn_toggle[key1][key2]).map((key3) =>
                Object.keys(state_smn_toggle[key1][key2][key3]).map((key4) => {
                  let item = state_smn_toggle[key1][key2][key3][key4];
                  if (item.toggle)
                    return (
                      <p style={{ fontSize: "12px" }}>
                        {key1 + " : " + key3 + "_" + key4}
                      </p>
                    );
                })
              )
            )
          )}
        </div>
      </div>

      <div class="App">
        {/* EQUIPED */}
        <div class="app-equiped">
          <p style={{ textAlign: "center", padding: "0px 20px" }}>EQUIPED</p>
          {state_list_equiped.map((value) => (
            <input
              style={{ textAlign: "center", fontSize: "11px" }}
              disabled
              value={value}
            />
          ))}
        </div>

        {/* 計算結果 */}
        <div class="app-compute">
          <p
            style={{
              textAlign: "center",
              paddingBottom: "5px",
              borderBottom: "1px solid #202020",
            }}
          >
            COMPUTE RESULT
          </p>

          {computeWeaponSkill(state_list_equiped, state_list_aura_boost)}
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
                style={{ margin: "1px", fontSize: "11px", textAlign: "center" }}
                value={weapons[key].name}
              />
            ))}
          </>
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
