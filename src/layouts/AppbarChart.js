import Tooltip from "@material-ui/core/Tooltip";

export default function AppbarChart(props) {
  //const state_toggle_summon = props.parent_state_toggle_summon
  //const setStateToggleSummon = props.parentSetStateToggleSummon
  //const setStateSummonWindow = props.parentSetStateSummonWindow

  const setStateShowGraph = props.parentSetStateShowGraph
  const state_show_graph = props.parent_state_show_graph

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "18px",
        backgroundColor: "#333333",
      }}
    >
      <a style={{ fontSize: "9px", color: "white" }}>
        Chart
      </a>
      <div style={{ marginLeft: "auto" }}>
        <img
          style={{
            width: "15px",
            height: "15px",
            marginLeft: "auto",
            cursor: "pointer",
          }}
          //onClick={()  => setStateToggleSummon(!state_toggle_summon)}
          src={process.env.PUBLIC_URL + "/images/" + "834775.png"}
        />

        <img
          style={{ width: "15px", height: "15px", cursor: "pointer" }}
          onClick={()=>setStateShowGraph(false)}
          src={process.env.PUBLIC_URL + "/images/" + "2550273.png"}
        />
      </div>
    </div>
  );
}
