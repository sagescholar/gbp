import cloneDeep from 'lodash.clonedeep' 
import { ELEMENT_INTERFACE } from './ELEMENT';

export const AURA_BOOST_INTERFACE = {
    opti: cloneDeep(ELEMENT_INTERFACE),
    omega: cloneDeep(ELEMENT_INTERFACE),
    //sixdragons: JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "None": cloneDeep(ELEMENT_INTERFACE),
}

export const OPTIMUS_BASE_INTERFACE = {
    150:{
        value:150,
        toggle:false,
    },
    140:{
        value:140,
        toggle:false,
    }
}

export const OMEGA_BASE_INTERFACE = {
    140:{
        value:140,
        toggle:false,
    },
    120:{
        value:120,
        toggle:false,
    }
}

export const ICON_SUMMONS = {
    アグニス: "images/summon/Summon_b_2040094000_02.png",
    ヴァルナ: "images/summon/Summon_b_2040100000_02.png",
    ティターン: "images/summon/Summon_b_2040084000_02.png",
    ゼピュロス: "images/summon/Summon_b_2040098000_02.png",
    ゼウス: "images/summon/Summon_b_2040080000_02.png",
    ハデス: "images/summon/Summon_b_2040090000_02.png",

    コロッサス: "images/summon/Summon_b_2040034000_02.png",
    リヴァイアサン: "images/summon/Summon_b_2040028000_02.png",
    ユグドラシル: "images/summon/Summon_b_2040027000_02.png",
    ティアマト: "images/summon/Summon_b_2040020000_02.png",
    シュヴァリエ: "images/summon/Summon_b_2040047000_02.png",
    セレスト: "images/summon/Summon_b_2040046000_02.png",

    ウィルナス: "images/summon/Summon_b_2040090000_02.png",
    ワムデュス: "images/summon/Summon_b_2040090000_02.png",
    ガレオン: "images/summon/Summon_b_2040090000_02.png",
    イーウィア: "images/summon/Summon_b_2040090000_02.png",
    ルオー: "images/summon/Summon_b_2040090000_02.png",
    フェディエル: "images/summon/Summon_b_2040090000_02.png",
}

export const SIXDRAGON_BASE_INTERFACE = {
    20:{
        value:20,
        toggle:false,
    },
    10:{
        value:10,
        toggle:false,
    }
}

export const OPTIMUS_INTERFACE = {
    アグニス: cloneDeep(OPTIMUS_BASE_INTERFACE),
    ヴァルナ: cloneDeep(OPTIMUS_BASE_INTERFACE), 
    ティターン: cloneDeep(OPTIMUS_BASE_INTERFACE),
    ゼピュロス: cloneDeep(OPTIMUS_BASE_INTERFACE),
    ゼウス: cloneDeep(OPTIMUS_BASE_INTERFACE),
    ハデス: cloneDeep(OPTIMUS_BASE_INTERFACE),
}

export const OMEGA_INTERFACE = {
    コロッサス: cloneDeep(OMEGA_BASE_INTERFACE),
    リヴァイアサン: cloneDeep(OMEGA_BASE_INTERFACE),
    ユグドラシル: cloneDeep(OMEGA_BASE_INTERFACE),
    ティアマト: cloneDeep(OMEGA_BASE_INTERFACE),
    シュヴァリエ: cloneDeep(OMEGA_BASE_INTERFACE),
    セレスト: cloneDeep(OMEGA_BASE_INTERFACE),
}
export const SIXDRAGON_INTERFACE = {
    ウィルナス: cloneDeep(SIXDRAGON_BASE_INTERFACE),
    ワムデュス: cloneDeep(SIXDRAGON_BASE_INTERFACE),
    ガレオン: cloneDeep(SIXDRAGON_BASE_INTERFACE),
    イーウィア: cloneDeep(SIXDRAGON_BASE_INTERFACE),
    ルオー: cloneDeep(SIXDRAGON_BASE_INTERFACE),
    フェディエル: cloneDeep(SIXDRAGON_BASE_INTERFACE),  
}

export const SUMMONS_MAIN_INTERFACE = {
    opti: cloneDeep(OPTIMUS_INTERFACE),
    omega: cloneDeep(OMEGA_INTERFACE),
    sixdragon: cloneDeep(SIXDRAGON_INTERFACE),
}

export const STATE_SUMMONS_INTERFACE = {
    MAIN: cloneDeep(SUMMONS_MAIN_INTERFACE),
    FRIEND: cloneDeep(SUMMONS_MAIN_INTERFACE),
}

