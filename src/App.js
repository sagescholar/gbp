import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import { buildTable } from "./components/BuildTable";
import { basicskill } from "./data/WEAPONSKILL";
import { CALCULATEINTERFACE } from "./data/WEAPONSKILL";
import { weapons } from "./data/WEAPONS";

function computeWeaponSkill(list) {
  let obj_equiped_weapon = {}
  let CNT = 1
  list.forEach((value) => {
    obj_equiped_weapon[CNT] = weapons[value];
    CNT += 1;
  })

  //DeepCopyMethod -> JSON.parse(JSON.stringify(***DeepCopyTarget***))
  let obj_output = JSON.parse(JSON.stringify(CALCULATEINTERFACE));

  Object.keys(obj_equiped_weapon).forEach((key) => {
    //key = {1,2,3...}
    Object.keys(obj_equiped_weapon[key]["skill"]).forEach((keyNo) => {
      //keyNo = {1,2,3,...}
      obj_output[obj_equiped_weapon[key]["skill"][keyNo].type] +=
        basicskill[obj_equiped_weapon[key]["skill"][keyNo].type][
          obj_equiped_weapon[key]["skill"][keyNo].lank
        ];
    });
  });
  return (
    <ul style={{ listStyle: "circle", textAlign: "left", fontSize: "14px" }}>
      {Object.keys(obj_output).map((key) => (
        <li>
          {key}: {obj_output[key]}
        </li>
      ))}
    </ul>
  );
}

function renderEquiped(list){
  return list.map((value) => <p>{value}</p>)
}

function App() {
  const style_app = {
    display: "flex",
  };
  const style_app_left = {
    width: "250px",
    magin: "15px",
    padding: "20px 0px",
    backgroundColor: "#aaaaaa",
  };

  const style_app_right = {
    width: "50%",
  };

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
      <div>{list_equiped.map((value) => <input type="button" value={value} />)}</div>
      <div style={style_app} class="App">
        
        <div style={style_app_left} class="AppLeft">
          <p style={{ backgroundColor: "#ffffff" }}>AppLeft</p>
          {computeWeaponSkill(list_equiped)}
        </div>

        <div style={style_app_right} class="AppRight">
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
    </>
  );
}

export default App;
