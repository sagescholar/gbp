import { computeWeaponSkill } from "./ComputeWeaponSkill";

import { CartesianGrid, LineChart, Line, YAxis, XAxis ,Tooltip} from 'recharts'

export const generateComputeChart = (parent_state_list_equiped, parent_state_list_aura_boost, parent_state_YMAX, parentSetStateYMax) => {
    let Data = []
    let Element = ["火","水","土","風","光","闇"]
    let Element_c = {
        火: "#ff6666",
        水: "#668cff",
        土: "#ffb366",
        風: "#057C27",
        光: "#e6b800",
        闇: "#8c66ff"
    }
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
            闇2: false
    }

    let Rsl_compute = undefined
    let Rsl_push = undefined
    
    for(let nam = 0 ; nam <= 100 ; nam+=10){
        Rsl_push = {name: String(nam)}
        for(let index = 1 ; index <= Object.keys(parent_state_list_equiped).length ; index++){
            Rsl_compute = computeWeaponSkill(parent_state_list_equiped[String(index)],parent_state_list_aura_boost,nam,false)
            Element.map((e) => {
                Rsl_push[e + String(index)] = Rsl_compute[e]
                if(nam == 50 && Rsl_compute[e] > 1) Element_isView[e + String(index)] = true;
            })
        }
        Data.push(Rsl_push);
    }

    return(
        <>
            <button class="button-up-ymax" onClick={()=>parentSetStateYMax(parent_state_YMAX + 10.0)}>▲</button>
            <button class="button-dn-ymax" onClick={()=>parentSetStateYMax(parent_state_YMAX - 10.0)}>▼</button>
            <LineChart width={500} height={400} data={Data} >
            {Element.map((e) => {
                if(!Element_isView[e+String(1)]) return
                return <Line type="monotone" dataKey={e+String(1)} stroke={Element_c[e]} fillOpacity={0} fill={Element_c[e]}/>
            })}
            {Element.map((e) => {
                if(!Element_isView[e+String(2)]) return
                return <Line type="monotone" dataKey={e+String(2)} stroke={Element_c[e]} fillOpacity={0} fill={Element_c[e]} strokeDasharray="3 4 5"/>
            })}
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis domain={[0.0, parent_state_YMAX]} />
            <XAxis dataKey="name" />
            <Tooltip />
            </LineChart>
        </>
    )
}