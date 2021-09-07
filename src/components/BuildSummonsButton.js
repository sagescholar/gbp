import React from 'react';
import cloneDeep from 'lodash.clonedeep' 

import { updateAuraBoost } from './UpdateAuraBoost'

//DATA
import { CALCULATE_OUT_INTERFACE } from "../data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from '../data/WEAPONSKILL';
import { AURA_BOOST_INTERFACE } from '../data/SUMMONS';
import { weapons } from "../data/WEAPONS";
import { STATE_SUMMONS_INTERFACE} from '../data/SUMMONS'
import { ELEMENT_STYLE } from '../data/ELEMENT';

export const buildSummonsButton = (summons_list, main_or_friend, parentUpdateSummons, parent_summons_list,parentUpdateAura) =>{
    
    /*
    key_1: MAIN or FRIEND
    key_2: OPTIMUS or OMEGA or SIXDRAGON
    key_3: SUMMON_NAME
    key_4: 5凸 or 4凸
    */
    const updateSummon = (key_1,key_2,key_3,key_4) => {
        let item = cloneDeep(parent_summons_list);
        //CHECK: ここではTrueになっている
        console.log(item)
        /*全てのToggleをoffにする*/
        /*
        1.通常/方陣の場合はkey3以下の六竜以外を全てOFFにする
        2.六竜の場合は六竜を全てOFFにする
        */
        if(key_2 == "sixdragon"){
            Object.keys(item[key_1]["sixdragon"]).map((key3_) =>
                Object.keys(item[key_1]["sixdragon"][key3_]).map((key4_) =>
                    item[key_1]["sixdragon"][key3_][key4_].toggle = false
                )
            )
        }
        else{
            Object.keys(item[key_1]).map((key2_) =>
                Object.keys(item[key_1][key2_]).map((key3_) =>
                    Object.keys(item[key_1][key2_][key3_]).forEach((key4_) => {
                        if(key2_ !== "sixdragon")
                            item[key_1][key2_][key3_][key4_].toggle = false
                    })
                )
            )
        }

        
        //console.log(item[key_1][key_2][key_3][key_4].toggle)
        item[key_1][key_2][key_3][key_4].toggle =
        !item[key_1][key_2][key_3][key_4].toggle;
        //console.log(item[key_1][key_2][key_3][key_4].toggle)
        console.log(item)
        parentUpdateSummons(item);
        updateAuraBoost(item,parentUpdateAura)
    }

    const Rsl = {
      opti: [],
      omega: [],
      sixdragon: [],
    }
    Object.keys(summons_list).map((omega_or_opti) =>
      Object.keys(summons_list[omega_or_opti]).map((element) => 
        Object.keys(summons_list[omega_or_opti][element]).forEach((lank) => {
          if(main_or_friend == "FRIEND" && omega_or_opti == "sixdragon") return
          let key__1 = main_or_friend;
          let key__2 = omega_or_opti;
          let key__3 = element;
          let key__4 = lank;
          let text_value = "";
          if(key__2 == "sixdragon") text_value = element + " " + lank + "%";
          else                      text_value = element + "Lv." + lank;
          Rsl[omega_or_opti].push(
            <input 
              //disabled
              style={{border: "1px solid " + ELEMENT_STYLE[element], color: "#303030"}} 
              class="summons-button"
              value={text_value} 
              onClick={()=>updateSummon(key__1,key__2,key__3,key__4)}
            />
          )
        })
      )
    )
    return(
      <div>
        <p style={{textAlign: "center"}}>{main_or_friend}</p>
        <div class="opti_button">
          {Rsl.opti}
        </div>
        <hr/>
        <div class="omega_button">
          {Rsl.omega}
        </div>
        <hr />
        <div class="sixdragon_button">
          {Rsl.sixdragon}
        </div>
      </div>
    )
  }