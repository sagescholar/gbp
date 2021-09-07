//import React from 'react';
//import Header from './layouts/Header';
//import { Footer } from './layouts/Footer';
//import "./App.css";
import cloneDeep from 'lodash.clonedeep' 

//COMPONENTS
//import { computeWeaponSkill } from "./components/ComputeWeaponSkill"
//import { buildSummonsButton } from './components/BuildSummonsButton'

//DATA
//import { CALCULATE_OUT_INTERFACE } from "../data/WEAPONSKILL";
//import { BASE_SKILL, COMPOSITE_SKILL } from '../data/WEAPONSKILL';
import { AURA_BOOST_INTERFACE } from '../data/SUMMONS';
//import { weapons } from "./data/WEAPONS";
//import { STATE_SUMMONS_INTERFACE} from './data/SUMMONS'
//import { ELEMENT_STYLE } from './data/ELEMENT';

export const updateAuraBoost = (summons_list,parentUpdateAura) => {
    let cvt_summonname2element = {
      アグニス: "火",
      ヴァルナ: "水",
      ティターン: "土",
      ゼピュロス: '風',
      ゼウス: "光",
      ハデス: "闇",

      コロッサス: "火",
      リヴァイアサン: "水",
      ユグドラシル: "土",
      ティアマト: '風',
      シュヴァリエ: "光",
      セレスト: "闇",

      ウィルナス: "火",
      ワムデュス: "水",
      ガレオン: "土",
      イーウィア: '風',
      ルオー: "光",
      フェディエル: "闇",
    }
    let cvt_summontype2opti = {
      sixdragon: "opti",
      opti: "opti"
    }
    let updated_list_aura_boost = cloneDeep(AURA_BOOST_INTERFACE);
    Object.keys(summons_list).map((key1_)=>
      Object.keys(summons_list[key1_]).map((key2_) =>
        Object.keys(summons_list[key1_][key2_]).map((key3_) =>
          Object.keys(summons_list[key1_][key2_][key3_]).map((key4_) =>{
            let AuraType = cvt_summontype2opti[key2_]
            let AuraElement = cvt_summonname2element[key3_]
            if(summons_list[key1_][key2_][key3_][key4_].toggle)
              updated_list_aura_boost[AuraType][AuraElement] +=
              summons_list[key1_][key2_][key3_][key4_].value/100.0

          })
        )
      )
    )
    console.log(updated_list_aura_boost)
    parentUpdateAura(updated_list_aura_boost);

}