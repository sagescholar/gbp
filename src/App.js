import logo from "./logo.svg";
import "./App.css";
import { buildTable } from "./components/BuildTable";
import { basicskill } from "./data/WEAPONSKILL";
import { CALCULATEINTERFACE } from "./data/WEAPONSKILL";
import { weapons } from "./data/WEAPONS";

function computeWeaponSkill(/*装備中の武器が引数になる*/) {
  let obj_equiped_weapon = {
    1: weapons["Ixaba"],
    2: weapons["Ixaba"],
  };

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
    <>
      {Object.keys(obj_output).map((key) => (
        <p>
          {key}: {obj_output[key]}
        </p>
      ))}
    </>
  );
}

function App() {
  const style_app = {
    display: "flex",
  };
  const style_app_left = {
    backgroundColor: "#505050",
  };

  const style_app_right = {
    width: "50%",
  };

  return (
    <>
      <div style={style_app} class="App">
        <div style={style_app_left} class="AppLeft">
          <p>AppLeft</p>
          {computeWeaponSkill()}
        </div>

        <div style={style_app_right} class="AppRight">
          <p>AppRight</p>
          <>
            {Object.keys(weapons).map((key) => (
              <input
                type="button"
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
