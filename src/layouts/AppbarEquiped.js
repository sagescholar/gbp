import Tooltip from "@material-ui/core/Tooltip";

export default function AppbarEquiped(props) {
  //const state_toggle_summon = props.parent_state_toggle_summon
  //const setStateToggleSummon = props.parentSetStateToggleSummon
  //const setStateSummonWindow = props.parentSetStateSummonWindow
  const name = props.name;
  const deleteEquiped = props.parentDeleteEquiped;
  const updateEquipedShow = props.parentUpdateEquipedShow;
  const ID = props.id;
  const num = props.number;
  const bonus = props.bonus

  return (
    <div
      style={{
        cursor:"move",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "18px",
        backgroundColor: "#333333",
      }}
    >
      <a style={{ fontSize: "9px", color: "white" }}>{name}&nbsp;+{bonus}</a>
      <div style={{ marginLeft: "auto" }}>
        <Tooltip title="装備から外す">
          <img
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "auto",
              cursor: "pointer",
            }}
            onClick={() => deleteEquiped(ID)}
            src={process.env.PUBLIC_URL + "/images/" + "1048442.png"}
          />
        </Tooltip>

        <Tooltip title="閉じる">
          <img
            style={{ width: "15px", height: "15px", cursor: "pointer" }}
            onClick={() => updateEquipedShow(ID)}
            updateEquipedShow
            src={process.env.PUBLIC_URL + "/images/" + "2550273.png"}
          />
        </Tooltip>
      </div>
    </div>
  );
}
