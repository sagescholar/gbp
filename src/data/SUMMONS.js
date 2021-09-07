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

