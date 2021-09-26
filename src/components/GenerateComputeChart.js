import { computeWeaponSkill } from "./ComputeWeaponSkill";

import { CartesianGrid, LineChart, Line, YAxis, XAxis ,Tooltip} from 'recharts'

export const generateComputeChart = (parent_state_list_equiped, parent_state_list_aura_boost) => {
    let Data = []
    let Element = ["火","水","土","風","光","闇"]
    let Element_c = {
        火: "#ff6666",
        水: "#668cff",
        土: "#ffb366",
        風: "#66ff8c",
        光: "#e6b800",
        闇: "#8c66ff"
    }
    let Element_isView = {
        火: false,
        水: false,
        土: false,
        風: false,
        光: false,
        闇: false
    }

    for(let nam = 0 ; nam <= 100 ; nam+=10){
        let Rsl_compute = computeWeaponSkill(parent_state_list_equiped,parent_state_list_aura_boost,nam,false)
        let Rsl_push = {name: String(nam)}
        Element.map((e) => {
            Rsl_push[e] = Rsl_compute[e]
            if(nam == 50 && Rsl_compute[e] > 1) Element_isView[e] = true;
        })
        Data.push(Rsl_push);
    }

    return(
        <LineChart width={600} height={450} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }} >
          {Element.map((e) => {
            if(!Element_isView[e]) return 
            return <Line type="monotone" dataKey={e} stroke={Element_c[e]} fillOpacity={0} fill={Element_c[e]}/>
          })}
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis domain={[0.0, 80.0]} />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
    )
}