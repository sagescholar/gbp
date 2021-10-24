import Tooltip from "@material-ui/core/Tooltip";

export default function AppbarDamageChart(props) {
  //const state_toggle_summon = props.parent_state_toggle_summon
  //const setStateToggleSummon = props.parentSetStateToggleSummon
  //const setStateSummonWindow = props.parentSetStateSummonWindow

  const setStateShowGraph = props.parentSetStateShowGraph
  const state_show_graph = props.parent_state_show_graph
  const setStateShowGraphDetail = props.parentSetStateShowGraphDetail
  const state_show_graph_detail = props.parent_state_show_graph_detail
  const state_YMAX = props.parent_state_YMAX
  const setStateYMAX = props.parentSetStateYMAX

  return (
    <div
      id="imhandle"
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
        予測ダメージ
      </a>
      <div style={{ marginLeft: "auto" }}>

      <Tooltip title="-100000">
        <img
          style={{
            width: "12px",
            height: "12px",
            marginLeft: "auto",
            cursor: "pointer",
            transform: "rotate(180deg)"
          }}
          onClick={()  => setStateYMAX(state_YMAX - 100000.0)}
          src={process.env.PUBLIC_URL + "/images/" + "892681.png"}
        /></Tooltip>
      <a style={{fontSize:"11px",color:"white",cursor:"default"}}>{state_YMAX}</a>
      <Tooltip title="+100000">
        <img
          style={{
            width: "12px",
            height: "12px",
            marginLeft: "auto",
            cursor: "pointer",
          }}
          onClick={()  => setStateYMAX(state_YMAX + 100000.0)}
          src={process.env.PUBLIC_URL + "/images/" + "892681.png"}
        /></Tooltip>
        <Tooltip title={!state_show_graph_detail ? "計算詳細表示" : "計算詳細閉じる"}>
        <img
          style={{
            width: "15px",
            height: "15px",
            marginLeft: "auto",
            cursor: "pointer",
          }}
          onClick={()  => setStateShowGraphDetail(!state_show_graph_detail)}
          src={process.env.PUBLIC_URL + "/images/" + "834775.png"}
        /></Tooltip>
        <Tooltip title="閉じる">
        <img
          style={{ width: "15px", height: "15px", cursor: "pointer" }}
          onClick={()=>setStateShowGraph(false)}
          src={process.env.PUBLIC_URL + "/images/" + "2550273.png"}
        /></Tooltip>
      </div>
    </div>
  );
}
