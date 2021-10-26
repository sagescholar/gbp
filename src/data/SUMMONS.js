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

    ウィルナス: "images/summon/218610.png",
    ワムデュス: "images/summon/218609.png",
    ガレオン: "images/summon/218559.png",
    イーウィア: "images/summon/218608.png",
    ルオー: "images/summon/218606.png",
    フェディエル: "images/summon/06e572c1db4f20de7646efd9c180c90b.jpg",

    ミカエル: "images/summon/Summon_b_2040306000.png",
    ガブリエル: "images/summon/Summon_b_2040311000.png",
    ウリエル: "images/summon/Summon_b_2040203000.png",
    ラファエル: "images/Summon_b_2040202000.png",
    メタトロン: "images/summon/Summon_b_2040330000.png",
    サリエル: "images/summon/Summon_b_2040327000.png",

    ベリアル: "images/summon/06e572c1db4f20de7646efd9c180c90b.jpg",
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

export const SUMMONS_OPTIMUS = {
    アグニス:{
        element: "火",
        ATK:3685,
        HP:1253,
    },
    ヴァルナ:{
        element: "水",
        ATK:3485,
        HP:1303,
    },
    ティターン:{
        element: "土",
        ATK:3163,
        HP:1505,
    },
    ゼピュロス:{
        element: "風",
        ATK:3653,
        HP:1259,
    },
    ゼウス:{
        element: "光",
        ATK:3608,
        HP:1285,
    },
    ハデス:{
        element: "闇",
        ATK:3798,
        HP:1229,
    },
}

export const SUMMONS_BONUS = {
    セキトバ:{
        element: "火",
        ATK:2042,
        HP:812,
    },
    カリュブディス:{
        element: "水",
        ATK:1680,
        HP:900,
    },
    マンモス:{
        element: "土",
        ATK:2012,
        HP:818,
    },
    オウルキャット:{
        element: "風",
        ATK:2057,
        HP:809,
    },
    アルテミス:{
        element: "光",
        ATK:2032,
        HP:814,
    },
    ジルニトラ:{
        element: "闇",
        ATK:2174,
        HP:804,
    },
}

export const SUMMONS_ARCARUM = {
    デス:{
        element: "闇",
        ATK:2850,
        HP:1128,
    },
    ジャスティス:{
        element: "水",
        ATK:2717,
        HP:1134,
    },
    ムーン:{
        element: "水",
        ATK:2820,
        HP:1094,
    },
    スター:{
        element: "光",
        ATK:2830,
        HP:1132,
    },
    サン:{
        element: "火",
        ATK:2837,
        HP:1090,
    },
    デビル:{
        element: "火",
        ATK:2737,
        HP:1130,
    },
    ジャッジメント:{
        element: "風",
        ATK:2832,
        HP:1091,
    },
    テンペランス:{
        element: "風",
        ATK:2732,
        HP:1131,
    },
    ハングドマン:{
        element: "土",
        ATK:2825,
        HP:1093,
    },
    タワー:{
        element: "土",
        ATK:2722,
        HP:1133,
    },
}

export const SUMMONS_PROVIDENSE = {
    ベリアル:{
        element: "闇",
        ATK:3265,
        HP:1140,
        Skill:{
            1:{name:"与ダメージ上昇_ベリアル枠",boost:30000}
        }
    }
}

export const SUMMONS_ARCHANGEL = {
    ミカエル:{
        element: "火",
        ATK:2240,
        HP:832,
        Skill:{
            1:{name:"ダメージ上限_召喚石枠",boost:"10"}
        }
    },
    ガブリエル:{
        element: "水",
        ATK:2100,
        HP:850,
    },
    ウリエル:{
        element: "土",
        ATK:2180,
        HP:844,
    },
    ラファエル:{
        element: "風",
        ATK:1750,
        HP:930,
    },
    メタトロン:{
        element: "光",
        ATK:2022,
        HP:816,
    },
    サリエル:{
        element: "闇",
        ATK:2155,
        HP:790,
    },
}

export const DATA_SUMMONS = {
    ...SUMMONS_OPTIMUS,
    ...SUMMONS_BONUS,
    ...SUMMONS_ARCARUM,
    ...SUMMONS_PROVIDENSE,
    ...SUMMONS_ARCHANGEL


}
