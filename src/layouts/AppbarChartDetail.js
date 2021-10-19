import Tooltip from "@material-ui/core/Tooltip";

export default function AppbarChartDetail(props) {
  //const state_toggle_summon = props.parent_state_toggle_summon
  //const setStateToggleSummon = props.parentSetStateToggleSummon
  //const setStateSummonWindow = props.parentSetStateSummonWindow

  const setStateShowGraphDetail = props.parentSetStateShowGraphDetail
  const state_show_graph_detail = props.parent_state_show_graph_detail

  return (
    <div
      id="imhandle-child"
      style={{
        cursor:"move",
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

        <Tooltip title="閉じる">
        <img
          style={{ width: "15px", height: "15px", cursor: "pointer" }}
          onClick={()=>setStateShowGraphDetail(false)}
          src={process.env.PUBLIC_URL + "/images/" + "2550273.png"}
        /></Tooltip>
      </div>
    </div>
  );
}
