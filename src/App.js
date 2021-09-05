import React from 'react';
import { Header } from './layouts/Header';
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

function App() {

  const [list_equiped, addEquiped] = React.useState([]);
  const [list_aura_boost, setSummons] = React.useState(JSON.stringify(AURA_BOOST_INTERFACE));

  const summons_list = ["アグニス","ヴァルナ","ティターン","ゼピュロス","ゼウス","ハデス"]; 

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
          {computeWeaponSkill(list_equiped)}
        </div>

        <div class="AppRight">
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
        <div class="app-summons">
          {summons_list.map((summon) => 
            <input type="button" value={summon} onClick="" />
          )}
        </div>
      </div>

      <hr />

      {buildTable()}

      {Footer()}
    </>
  );
}

export default App;
