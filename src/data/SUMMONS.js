import { ELEMENT_INTERFACE } from './ELEMENT';

export const AURA_BOOST_INTERFACE = {
    opti: JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    omega: JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    //sixdragons: JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "None": 0,
}

export const OPTIMUS_BASE_INTERFACE = {
    150:{
        value:150,
        toggle:false,
    },
    140:{
        value:150,
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
    アグニス: JSON.parse(JSON.stringify(OPTIMUS_BASE_INTERFACE)),
    ヴァルナ: JSON.parse(JSON.stringify(OPTIMUS_BASE_INTERFACE)), 
    ティターン: JSON.parse(JSON.stringify(OPTIMUS_BASE_INTERFACE)),
    ゼピュロス: JSON.parse(JSON.stringify(OPTIMUS_BASE_INTERFACE)),
    ゼウス: JSON.parse(JSON.stringify(OPTIMUS_BASE_INTERFACE)),
    ハデス: JSON.parse(JSON.stringify(OPTIMUS_BASE_INTERFACE)),
}

export const OMEGA_INTERFACE = {
    コロッサス: JSON.parse(JSON.stringify(OMEGA_BASE_INTERFACE)),
    リヴァイアサン: JSON.parse(JSON.stringify(OMEGA_BASE_INTERFACE)),
    ユグドラシル: JSON.parse(JSON.stringify(OMEGA_BASE_INTERFACE)),
    ティアマト: JSON.parse(JSON.stringify(OMEGA_BASE_INTERFACE)),
    シュヴァリエ: JSON.parse(JSON.stringify(OMEGA_BASE_INTERFACE)),
    セレスト: JSON.parse(JSON.stringify(OMEGA_BASE_INTERFACE)),
}
export const SIXDRAGON_INTERFACE = {
    ウィルナス: JSON.parse(JSON.stringify(SIXDRAGON_BASE_INTERFACE)),
    ワムデュス: JSON.parse(JSON.stringify(SIXDRAGON_BASE_INTERFACE)),
    ガレオン: JSON.parse(JSON.stringify(SIXDRAGON_BASE_INTERFACE)),
    イーウィア: JSON.parse(JSON.stringify(SIXDRAGON_BASE_INTERFACE)),
    ルオー: JSON.parse(JSON.stringify(SIXDRAGON_BASE_INTERFACE)),
    フェディエル: JSON.parse(JSON.stringify(SIXDRAGON_BASE_INTERFACE)),  
}

export const SUMMONS_MAIN_INTERFACE = {
    opti: JSON.parse(JSON.stringify(OPTIMUS_INTERFACE)),
    omega: JSON.parse(JSON.stringify(OMEGA_INTERFACE)),
    sixdragon: JSON.parse(JSON.stringify(SIXDRAGON_INTERFACE)),
}

export const STATE_SUMMONS_INTERFACE = {
    MAIN: JSON.parse(JSON.stringify(SUMMONS_MAIN_INTERFACE)),
    FRIEND: JSON.parse(JSON.stringify(SUMMONS_MAIN_INTERFACE)),
}

