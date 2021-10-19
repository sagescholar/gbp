import { computeWeaponSkill } from "./ComputeWeaponSkill";
import { Box, Card } from "@material-ui/core";
import cloneDeep from "lodash.clonedeep";
import { useState } from "react";

import {
  CartesianGrid,
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";
import Draggable from "react-draggable";
import AppbarChart from "../layouts/AppbarChart";
import { ELEMENT_ICON_INTERFACE } from "../data/ELEMENT";

export default function GenerateComputeChart(props) {
  const parent_state_list_equiped = props.parent_state_list_equiped;
  const parent_state_list_aura_boost = props.parent_state_list_aura_boost;
  const parent_state_YMAX = props.parent_state_YMAX;
  const parentSetStateYMax = props.parentSetStateYMax;

  let Data = [];
  let Element = ["火", "水", "土", "風", "光", "闇"];
  let Element_c = {
    火: "#ff6666",
    水: "#668cff",
    土: "#ffb366",
    風: "#057C27",
    光: "#e6b800",
    闇: "#8c66ff",
  };
  let Element_isView = {
    火1: false,
    水1: false,
    土1: false,
    風1: false,
    光1: false,
    闇1: false,

    火2: false,
    水2: false,
    土2: false,
    風2: false,
    光2: false,
    闇2: false,
  };

  let Element_isView_2 = {
    火1: true,
    水1: true,
    土1: true,
    風1: true,
    光1: true,
    闇1: true,

    火2: true,
    水2: true,
    土2: true,
    風2: true,
    光2: true,
    闇2: true,
  };
  const [state_show_radio, setStateShowRadio] = useState(
    cloneDeep(Element_isView_2)
  );

  const buildChartShow = (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        width: "100%",
        height: "18px",
        backgroundColor: "#333333",
      }}
    >
      {Object.keys(state_show_radio).map((key) => (
        <>
          {key.substr(0, 1) == "火" && (
            <a style={{ color: "white", fontSize: "11px" }}>
              Chart[{key.substr(-1)}]
            </a>
          )}
          <a
            onClick={() => {
              let content = cloneDeep(state_show_radio);
              content[key] = !content[key];
              setStateShowRadio(content);
            }}
          >
            <img
              style={{
                height: "15px",
                width: "15px",
                opacity: "1.0",
                opacity: state_show_radio[key] ? "1" : "0.4",
                cursor: "pointer"
              }}
              src={
                process.env.PUBLIC_URL +
                "/" +
                ELEMENT_ICON_INTERFACE[key.substr(0, 1)] +
                ".png"
              }
            />
          </a>
        </>
      ))}
    </div>
  );

  let Rsl_compute = undefined;
  let Rsl_push = undefined;

  for (let nam = 0; nam <= 100; nam += 10) {
    Rsl_push = { name: String(nam) };
    for (
      let index = 1;
      index <= Object.keys(parent_state_list_equiped).length;
      index++
    ) {
      Rsl_compute = computeWeaponSkill(
        parent_state_list_equiped[String(index)],
        parent_state_list_aura_boost[String(index)],
        nam,
        false
      );
      Element.map((e) => {
        Rsl_push[e + String(index)] = Rsl_compute[e];
        if (
          nam == 50 &&
          Rsl_compute[e] > 1 &&
          state_show_radio[e + String(index)]
        )
          Element_isView[e + String(index)] = true;
      });
    }
    Data.push(Rsl_push);
  }

  return (
      <Card>
        <AppbarChart
          parentSetStateShowGraph={props.parentSetStateShowGraph}
          parent_state_show_graph={props.parent_state_show_graph}
          parentSetStateShowGraphDetail={props.parentSetStateShowGraphDetail}
          parent_state_show_graph_detail={props.parent_state_show_graph_detail}
        />
        <Box sx={{ padding: "30px", bgcolor: "background.paper" }}>
          <LineChart width={500} height={400} data={Data}>
            {Element.map((e) => {
              if (!Element_isView[e + String(1)]) return;
              return (
                <Line
                  type="monotone"
                  dataKey={e + String(1)}
                  stroke={Element_c[e]}
                  fillOpacity={0}
                  fill={Element_c[e]}
                />
              );
            })}
            {Element.map((e) => {
              if (!Element_isView[e + String(2)]) return;
              return (
                <Line
                  type="monotone"
                  dataKey={e + String(2)}
                  stroke={Element_c[e]}
                  fillOpacity={0}
                  fill={Element_c[e]}
                  strokeDasharray="3 4 5"
                />
              );
            })}
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis domain={[0.0, parent_state_YMAX]} />
            <XAxis dataKey="name" />
            <Tooltip />
          </LineChart>
        </Box>
        <Box>{buildChartShow}</Box>
      </Card>
  );
}
