export const ELEMENT_INTERFACE = {
    "火": 0,
    "水": 0,
    "土": 0,
    "風": 0,
    "光": 0,
    "闇": 0,
}

export const CALCULATE_OUT_INTERFACE = {
    "通常攻刃": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "通常背水": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "通常渾身": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "方陣渾身": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "方陣背水": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "方陣攻刃": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "技巧": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "DA率": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
    "TA率": JSON.parse(JSON.stringify(ELEMENT_INTERFACE)),
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
        "特大": 22.0,
    },
    "通常渾身": {
        "中": 9.6,
        "大": 12.0
    },
    "技巧": {
        "II": 12.0,
        "大": 10.0
    },
}

export const COMPOSITE_SKILL = {
    "刹那": {
        "特大":{
            "技巧": "II",
            "通常攻刃": "特大"
        },
    },
    "通常三手": {
        "小":{
            "TA率": 2,
        }
    }
}