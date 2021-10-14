import {ELEMENT_INTERFACE} from './ELEMENT';
import cloneDeep from 'lodash.clonedeep' 

export const CALCULATE_OUT_INTERFACE = {
    通常攻刃: cloneDeep(ELEMENT_INTERFACE),
    通常背水: cloneDeep(ELEMENT_INTERFACE),
    通常渾身: cloneDeep(ELEMENT_INTERFACE),
    方陣渾身: cloneDeep(ELEMENT_INTERFACE),
    方陣背水: cloneDeep(ELEMENT_INTERFACE),
    方陣攻刃: cloneDeep(ELEMENT_INTERFACE),
    
    EX攻刃: cloneDeep(ELEMENT_INTERFACE),
    技巧: cloneDeep(ELEMENT_INTERFACE),
    DA率: cloneDeep(ELEMENT_INTERFACE),
    TA率: cloneDeep(ELEMENT_INTERFACE),
    アビ与ダメ: cloneDeep(ELEMENT_INTERFACE),
    D上限: cloneDeep(ELEMENT_INTERFACE),
    与ダメージ: cloneDeep(ELEMENT_INTERFACE),
    奥義与ダメ: cloneDeep(ELEMENT_INTERFACE),
    対有利与ダメ: cloneDeep(ELEMENT_INTERFACE),

    EX攻撃: cloneDeep(ELEMENT_INTERFACE),
    EX渾身: cloneDeep(ELEMENT_INTERFACE),
    EX背水: cloneDeep(ELEMENT_INTERFACE),
    EXHP: cloneDeep(ELEMENT_INTERFACE),
    EX防御: cloneDeep(ELEMENT_INTERFACE),

    通常進境: cloneDeep(ELEMENT_INTERFACE),
    堅守: cloneDeep(ELEMENT_INTERFACE),
}

/* EXLB 渾身 */

const calculate_exlb_stamina = (HP,SLank) => {
    let C = {
        1:{100:3 ,減少:66.66, 0:1.0},
        2:{100:4 ,減少:100, 0:1.0},
        3:{100:5 ,減少:75, 0:2.0},
        4:{100:6 ,減少:100, 0:2.0},
        5:{100:7 ,減少:66.66, 0:3.0},
        6:{100:8 ,減少:83.33, 0:3.0},
        7:{100:9 ,減少:100, 0:3.0},
        8:{100:10 ,減少:75, 0:4.0},
        9:{100:11, 減少:87.5, 0:4.0},
        10:{100:12 ,減少:100, 0:4.0},
    }

    const MAX = C[SLank]["100"]
    const DECREACE = C[SLank]["減少"]
    const PLUS = C[SLank]["0"]
    
    return HP > DECREACE ? MAX : ((MAX/DECREACE) * HP + PLUS)
}

const calculate_exlb_enmity = (HP,SLank) => {
    let C = {
        1:{100:1, 75:2, 50: 2.26, 0: 5.0},
        2:{100:1, 75:2, 50: 2.33, 0: 6.0},
        3:{100:1, 75:3, 50: 3.37, 0: 7.5},
        4:{100:1, 75:3, 50: 3.50, 0: 9.0},
        5:{100:1, 75:4, 50: 4.40, 0: 10.0},
        6:{100:1, 75:4, 50: 4.50, 0: 11.0},
        7:{100:1, 75:4, 50: 4.67, 0: 12.0},
        8:{100:1, 75:5, 50: 5.60, 0: 12.5},
        9:{100:1, 75:5, 50: 5.73, 0: 13.75},
        10:{100:1, 75:5, 50: 5.83, 0: 15.0},
    }

    const HP_100 = C[SLank]["100"]
    const HP_75 = C[SLank]["75"]
    const HP_50 = C[SLank]["50"]
    const HP_0 = C[SLank]["0"]

    let RSL = 0

    if(HP >= 75)      RSL = HP_100
    else if(HP >= 50) RSL = (HP_75 - (HP_50-HP_75)/(75.0-50.0) * (HP - 50.0) )
    else              RSL = (HP_0 - (HP_0-HP_50)/(50.0-0) * (HP) )
    
    return RSL
    
}

/*hp,skill_name,skill_lank,skill_level*/
const calculate_stamina = (HP,SName,SLank,SLv) => {
    let OBJ_C = {
        "通常渾身":{
            "中": 65.0,
            "大": 56.4,
        },
        "方陣渾身": {
            "中": 60.4,
            "大": 56.4,
        },
        "強壮": {
            "中": 53.7,
            "大": 53.7,
        }
    }
    /*C : 渾身定数*/
    let C =   OBJ_C[SName][SLank];
    if(HP < 25) return 0.0001;
    let s = 0;
    if(SLv <= 15) s = SLv;
    else s = 15 + (0.4 * (SLv+ -15));
    let Rsl = (HP/(C-s))**2.9+2.1;
    return Rsl;
}

const calculate_enmity = (HP,SName,SLank,SLv) => {
    let OBJ_BASE_MAGNIFICATION_ENMITY = {
        "通常背水": {
            "小": {
                1: 0.5,
                2: 1.10,
                3: 1.70,
                4: 2.30,
                5: 2.90,
                6: 3.50,
                7: 4.10,
                8: 4.70,
                9: 5.30,
                10: 6.00,
                11: 6.20,
                12: 6.40,
                13: 6.60,
                14: 6.80,
                15: 7.00,
                16: 7.10,
                17: 7.20,
                18: 7.30,
                19: 7.40,
                20: 7.50,
            },
            "中": {
                1: 1.00,
                2: 1.75,
                3: 2.50,
                4: 3.25,
                5: 4.00,
                6: 4.75,
                7: 5.50,
                8: 6.25,
                9: 7.00,
                10: 8.00,
                11: 8.40,
                12: 8.80,
                13: 9.20,
                14: 9.60,
                15: 10.0,
                16: 10.20,
                17: 10.40,
                18: 10.60,
                19: 10.80,
                20: 11.00,
            },
            "大": {
                1: 3.00,
                2: 4.00,
                3: 5.00,
                4: 5.50,
                5: 6.00,
                6: 6.50,
                7: 7.00,
                8: 8.00,
                9: 9.00,
                10: 10.00,
                11: 10.50,
                12: 11.00,
                13: 11.50,
                14: 12.00,
                15: 12.50,
                16: 12.70,
                17: 12.90,
                18: 13.10,
                19: 13.30,
                20: 13.50,
            }
        },
        "方陣背水": {
            "小": {
                1: 0.5,
                2: 1.10,
                3: 1.70,
                4: 2.30,
                5: 2.90,
                6: 3.50,
                7: 4.10,
                8: 4.70,
                9: 5.30,
                10: 6.00,
                11: 6.20,
                12: 6.40,
                13: 6.60,
                14: 6.80,
                15: 7.00,
                16: 7.10,
                17: 7.20,
                18: 7.30,
                19: 7.40,
                20: 7.50,
            },
            "中": {
                1: 1.00,
                2: 1.75,
                3: 2.50,
                4: 3.25,
                5: 4.00,
                6: 4.75,
                7: 5.50,
                8: 6.25,
                9: 7.00,
                10: 8.00,
                11: 8.40,
                12: 8.80,
                13: 9.20,
                14: 9.60,
                15: 10.0,
                16: 10.20,
                17: 10.40,
                18: 10.60,
                19: 10.80,
                20: 11.00,
            },
            "大": {
                1: 3.00,
                2: 4.00,
                3: 5.00,
                4: 5.50,
                5: 6.00,
                6: 6.50,
                7: 7.00,
                8: 8.00,
                9: 9.00,
                10: 10.00,
                11: 10.50,
                12: 11.00,
                13: 11.50,
                14: 12.00,
                15: 12.50,
                16: 12.70,
                17: 12.90,
                18: 13.10,
                19: 13.30,
                20: 13.50,
            }
        }
    } 
    let k = OBJ_BASE_MAGNIFICATION_ENMITY[SName][SLank][SLv]
    let r = HP / 100.0;
    let Rsl = ( 2 * (r)**2 -5*r +3) * k
    if (Rsl > 0) return ( 2 * (r)**2 -5*r +3) * k;
    else         return 0.0001;
}

/*
weapon:{name: ,element, skill:{1: 2: 3:}}
elementとskillの効果量が異なる場合があるので、skill側で属性を指定する
skill{1: 2: 3:}は3つの情報を持つ -> {属性, 分類, 補正量}

複合スキルの解釈の考え方
weapon定義時点では複合スキルのまま? Sample: skill: {e: "風", t: "刹那", "大"}
計算側で複合スキルリストと照合する
-> 複合スキルと見なした場合、複合スキル名をkeyとして複合スキルリスト(COMPOSITE_SKILL)とからbasicskillを取得
 
武器が属性を指定しているので、COMPOSITE, BASIC側で属性の指示は不要。
*/

export const BASE_SKILL = {
    "通常攻刃": {
        "小": {
            "10": 10.0,
            "15": 12.0,
            "20": 12.5,
        },
        "中": {
            "10": 12.0,
            "15": 14.5,
            "20": 15.5,
        },
        "大": {
            "10": 15.0,
            "15": 18.0,
            "20": 20.0,
        },
        "II": {
            "10": 16.0,
            "15": 20.0,
            "20": 22.0,
        },
        "III": {
            "10": 17.0,
            "15": 22.0,
            "20": 0.0,
        },
        "特大": {
            "10": 18.0,
            "15": 23.0,
            "20": 25.5,
        },
        "暴君": {
            "10": 15.0,
            "15": 18.0,
            "20": 20.0,
        },
        "暴君II": {
            "10": 18.0,
            "15": 23.0,
            "20": 25.5,
        },
        "バハ": {
            "10": 30.0,
            "15": 32.0,
        },
        "劫風の攻刃": {
            "10": 25.0,
            "15": 33.0,
        },
    },
    "方陣攻刃": {
        "小": {
            "10": 10.0,
            "15": 12.0,
            "20": 12.5,
        },
        "中": {
            "10": 12.0,
            "15": 14.5,
            "20": 15.5,
        },
        "大": {
            "10": 15.0,
            "15": 18.0,
            "20": 20.0,
        },
        "II": {
            "10": 15.0,
            "15": 18.0,
            "20": 20.0,
        },
    },
    "EX攻刃": {
        "小": {
            "10": 10.0,
            "15": 10.0,
            "20": 10.0,
        },
        "中": {
            "10": 12.0,
            "15": 14.5,
            "20": 0.0,
        },
        "大": {
            "10": 15.0,
            "15": 18.0,
            "20": 21.0,
        },
        "覇道": { /*ゼノ武器?*/
            "10": 18.0,
            "15": 23.0,
            "20": 25.5,
        },
        "虚空": {
            "10": 20.0,
            "15": 20.0,
            "20": 20.0,
        },
        "支配者": { /*アストラルウエポン*/
            "10": 25.0,
            "15": 33.0,
            "20": 37.0,
        },
    },
    "技巧": {
        "小": {
            "10": 2.0,
            "15": 3.0,
            "20": 4.0,
        },
        "中": {
            "10": 5.0,
            "15": 6.5,
            "20": 7.5,
        },
        "大": {
            "10": 8.0,
            "15": 10.0,
            "20": 11.0,
        },
        "II": {
            "10": 10.0,
            "15": 12.0,
            "20": 0.0,
        },
        "水禍の技巧": {
            "10": 20.0,
            "15": 20.0,
            "20": 20.0,
        },
    },
    "通常渾身": {
        "小": {
            "10": 0.0,
            "15": 5.59,
            "20": 0.0,
        },
        "中": {
            "10": calculate_stamina,
            "15": calculate_stamina,
            "20": calculate_stamina,
        },
        "大": {
            "10": calculate_stamina,
            "15": calculate_stamina,
            "20": calculate_stamina,
        },
        "II": {
            "10": 0.0,
            "15": 17.79,
            "20": 0.0,
        },
        "強壮": {
            "10": calculate_stamina,
            "15": calculate_stamina,
            "20": calculate_stamina,
        },
        "呪触の渾身": {
            "10": 18.14,
            "15": 22.41,
            "20": 0.0,
        },
    },
    "方陣渾身": {
        "中": {
            "10": calculate_stamina,
            "15": calculate_stamina,
            "20": calculate_stamina,
        },
        "大": {
            "10": calculate_stamina,
            "15": calculate_stamina,
            "20": calculate_stamina,
        },
    },
    "通常背水": {
        "小": {
            "10": calculate_enmity,
            "15": calculate_enmity,
            "20": calculate_enmity,
        },
        "中": {
            "10": calculate_enmity,
            "15": calculate_enmity,
            "20": calculate_enmity,
        },
        "大": {
            "10": calculate_enmity,
            "15": calculate_enmity,
            "20": calculate_enmity,
        },
        "炎威の背水": {
            "10": 2.0,
            "15": 3.0,
            "20": 0.0,
        },
    },
    "方陣背水": {
        "小": {
            "10": calculate_enmity,
            "15": calculate_enmity,
            "20": calculate_enmity,
        },
        "中": {
            "10": calculate_enmity,
            "15": calculate_enmity,
            "20": calculate_enmity,
        },
        "大": {
            "10": calculate_enmity,
            "15": calculate_enmity,
            "20": calculate_enmity,
        },
    },
    "TA率": {
        "乱舞小": { /*乱舞小*/
            "10": 1.35,
            "15": 2.0,
            "20": 0.0,
        },
        "乱舞中": {
            "10": 2.15,
            "15": 2.9,
            "20": 3.65,
        },
        "小": {
            "10": 2.0,
            "15": 3.5,
            "20": 0.0,
        },
        "中": {
            "10": 3.5,
            "15": 5.0,
            "20": 6.0,
        },
        "大": {
            "10": 5.0,
            "15": 7.0,
            "20": 0.0,
        },
        "バハ": {
            "10": 5.0,
            "15": 8.0,
            "20": 0.0,
        },
        "白の誓約": {
            "10": 0.0,
            "15": 14.0,
            "20": 0.0,
        },
        "オメガ闘争": {
            "10": 20.0,
            "15": 0.0,
            "20": 0.0,
        },
    },
    "堅守": {
        "小": { /*乱舞小*/
            "10": 1.35,
            "15": 2.0,
            "20": 0.0,
        },
        "中": {
            "10": 2.15,
            "15": 2.9,
            "20": 3.65,
        },
        "大": {
            "10": 2.15,
            "15": 2.9,
            "20": 3.65,
        },
    },
    "通常進境": {
        "小": { /*乱舞小*/
            "10": 1.35,
            "15": 2.0,
            "20": 0.0,
        },
        "中": {
            "10": 2.15,
            "15": 2.9,
            "20": 3.65,
        },
        "大": {
            "10": 2.15,
            "15": 2.9,
            "20": 3.65,
        },
    },
    "奥義与ダメ": {
        "雪の極意": {
            "10": 4e5,
            "15": 4e5,
            "20": 4e5,
        },
    }
}

export const COMPOSITE_SKILL = {
    /*
    1: {
        2: {
            3-X: XXX
            3-Y: YYY
        }
    }
    1: 複合スキルとして称号される
    2: lankの指定、2.自体はkeyとして使用されるのみでBASE_SKILLとの一致は問わない
    3: 3-X:BASE_SKILLのkey, 3-XXX: BASE_SKILLのlank
    */
    "通常刹那": {
        "特大":{
            "技巧": "II",
            "通常攻刃": "特大"
        },
        "中":{
            "技巧": "中",
            "通常攻刃": "中"
        },
    },
    "通常三手": {
        "小":{
            "TA率": "小",
        },
        "大":{
            "TA率": "大",
        }
    },
    通常乱舞: {
        中: {
            TA率: "中",
            通常攻刃: "中"
        }
    },
    修羅: {
        大: {
            通常攻刃: "大"
        }
    },
    "通常克己": {
        "小":{
            技巧: "小",
            //DA率: "小"
        },
        "中":{
            技巧: "中",
            //DA率: "中"
        },
        "大":{
            技巧: "大",
            //DA率: "大"
        }
    },
    "修羅": {
        "大":{
            通常攻刃: "大",
            //DA率: "大"
        }
    },
    "通常神威": {
        "大":{
            通常攻刃: "大",
            //DA率: "大"
        },
        "中":{
            通常攻刃: "中",
            //DA率: "大"
        },
        "小":{
            通常攻刃: "小",
            //DA率: "大"
        }
    },
    "方陣神威": {
        "小":{
            方陣攻刃: "小",
            //DA率: "大"
        },
        "中":{
            方陣攻刃: "中",
            //DA率: "大"
        },
        "大":{
            方陣攻刃: "大",
            //DA率: "大"
        },
    },
    "方陣克己": {
        "小":{
            技巧: "小",
            //DA率: "小"
        },
        "中":{
            技巧: "中",
            //DA率: "中"
        },
        "大":{
            技巧: "大",
            //DA率: "大"
        }
    },
}

export const EX_SKILL = {
    /* EX渾身,EX背水 -> ComputeWeaponSkillから呼ばれる */
    EX渾身: calculate_exlb_stamina,
    EX背水: calculate_exlb_enmity
    //久遠:
}