import React from 'react';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import "./App.css";
import { buildTable } from "./components/BuildTable";
import { CALCULATE_OUT_INTERFACE } from "./data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from './data/WEAPONSKILL'
import { weapons } from "./data/WEAPONS";

function computeWeaponSkill(list) {

  /*
  計算手順
  1. 情報を取得する 装備中武器/武器加護補正量,
  2. 初期化したobj_outputに武器*武器加護補正計算後の値を加算
  3. 武器スキルの合計値を返す
  */

  let aura_boost = {
    main: {
    }
  }

  let obj_equiped_weapon = {}
  let CNT = 1
  list.forEach((value) => {
    obj_equiped_weapon[CNT] = weapons[value];
    CNT += 1;
  })

  //DeepCopyMethod -> JSON.parse(JSON.stringify(***DeepCopyTarget***))
  let obj_output = JSON.parse(JSON.stringify(CALCULATE_OUT_INTERFACE));

  Object.keys(obj_equiped_weapon/*装備中の武器*/).forEach((key_name) => {
    //key = {1,2,3...}
    Object.keys(obj_equiped_weapon[key_name]["skill"]/*装備中の武器のスキル*/).forEach((key_skill_no) => {
      //keyNo = {1,2,3,...}
      let skill_element = obj_equiped_weapon[key_name]["skill"][key_skill_no].e;
      let skill_name = obj_equiped_weapon[key_name]["skill"][key_skill_no].type;
      let skill_lank = obj_equiped_weapon[key_name]["skill"][key_skill_no].lank;

      if(Object.keys(COMPOSITE_SKILL).includes(skill_name/*刹那*/)){
        Object.keys(COMPOSITE_SKILL[skill_name][skill_lank]).forEach((skill_name_composite_parsed/**/) =>{
          let skill_name_composite_parsed_lank = COMPOSITE_SKILL[skill_name][skill_lank][skill_name_composite_parsed]
          obj_output[skill_name_composite_parsed][skill_element] +=
          BASE_SKILL[skill_name_composite_parsed][skill_name_composite_parsed_lank]
        })
      }
      else{
        obj_output[skill_name][skill_element] +=
        BASE_SKILL[skill_name][skill_lank]
      }
    });
  });
  return (
    <ul style={{ listStyle: "circle", textAlign: "left", fontSize: "14px" }}>
      {Object.keys(obj_output).map((skill_name) => 
        Object.keys(obj_output[skill_name]).map((skill_element) => (
          <li>
            {skill_name} | {skill_element}: {obj_output[skill_name][skill_element]}
          </li>
        ))
      )}
    </ul>
  );
}

function renderEquiped(list){
  return list.map((value) => <p>{value}</p>)
}

function App() {

  const [list_equiped, addEquiped] = React.useState([]);

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
      {Header()}
      
      <div>{list_equiped.map((value) => <input type="button" value={value} />)}</div>
      <div class="App">
        
        <div class="AppLeft">
          <p style={{ backgroundColor: "#ffffff" }}>AppLeft</p>
          {computeWeaponSkill(list_equiped)}
        </div>

        <div class="AppRight">
          <p>AppRight</p>
          <>
            {Object.keys(weapons).map((key) => (
              <input
                type="button"
                onClick={addEquipe}
                style={{ margin: "1px" }}
                value={weapons[key].name}
              />
            ))}
          </>
          <hr />
        </div>
      </div>

      <hr />

      {buildTable()}

      {Footer()}
    </>
  );
}

export default App;
