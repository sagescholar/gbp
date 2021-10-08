//import { BASE_SKILL } from "./WEAPONSKILL";

export const EQUIPED_WEAPON_INTERFACE = {
  name: "",
  Lv: 1,
  SLv: 1,
  Bonus: 0,
  Tag: "",
  AX_Skill: {
    1: {
      name: "",
      lank: "",
    },
    2: {
      name: "",
      lank: "",
    }
  }
}

export const DARK_OPUS = [
  "絶対否定の大鎌",
  "絶対否定の杖",
  "絶対否定の堅琴",
  "絶対否定の槍",
  "絶対否定の剣",
  "絶対否定の太刀",

  "永遠拒絶の大鎌",
  "永遠拒絶の杖",
  "永遠拒絶の堅琴",
  "永遠拒絶の槍",
  "永遠拒絶の剣",
  "永遠拒絶の太刀",
]

export const DARK_OPUS_WEAPON = {
  絶対否定の槍: {
    name: "絶対否定の槍",
    element: "風",
    icon: "images/weapon/Weapon_b_1040212500.png",
    skill: {
      1: { e: "風", type: "通常神威", lank: "大", aura: "opti"},
    },
  },
  永遠拒絶の槍: {
    name: "永遠拒絶の槍",
    element: "風",
    icon: "images/weapon/Weapon_b_1040212600.png",
    skill: {
      1: { e: "風", type: "方陣神威", lank: "大", aura: "omega"},
    },
  },
  絶対否定の剣: {
    name: "絶対否定の剣",
    element: "光",
    icon: "images/weapon/Weapon_b_1040017000.png",
    skill: {
      1: { e: "光", type: "通常神威", lank: "大", aura: "opti"},
      2:{},
      3:{}
    },
  },
}


export const ASTRAL = [
  "ソルレムナント",
  "フェイトレス",
  "ユグドラシルブランチ",
  "イノセントラヴ",
  "ロンゴミニアド",
  "黒銀の滅爪"
]

export const SERAPHIC = [
  "ソードオブミカエル",
  "ワンドオブガブリエル",
  "グローブオブウリエル",
  "リングオブラファエル",
  "ハープオブハルワアムル",
  "サイスオブベリアル"
]

export const weapons = {
  イクサバ: {
    name: "イクサバ",
    element: "火",
    icon: "images/weapon/Weapon_b_1040906400.png",
    skill: {
      1: { e: "火", type: "通常攻刃", lank: "特大", aura: "opti"},
      2: { e: "火", type: "通常渾身", lank: "中", aura: "opti"},
    },
  },
  絶拳: {
    name: "絶拳",
    element: "火",
    icon: "images/weapon/Weapon_b_1040612700.png",
    skill: {
      1: { e: "火", type: "通常刹那", lank: "特大", aura: "opti"},
      2: { e: "火", type: "通常三手", lank: "小", aura: "opti"},
    },
  },
  ガリレオサイト: {
    name: "ガリレオサイト",
    element: "水",
    icon: "images/weapon/Weapon_b_1040211600.png",
    skill: {
      1: { e: "水", type: "通常克己", lank: "中", aura: "opti"},
      2: { e: "水", type: "通常渾身", lank: "大", aura: "opti"},
    },
  },
  虚無乃哭風: {
    name: "虚無乃哭風",
    element: "風",
    icon: "images/weapon/Weapon_b_1040212700.png",
    skill: {
      1: { e: "風", type: "通常渾身", lank: "大", aura: "opti"},
      //2: { e: "風", type: "通常渾身", lank: "中", aura: "omega"},
    },
  },
  エデン: {
    name: "エデン",
    element: "光",
    icon: "images/weapon/Weapon_b_1040207000.png",
    skill: {
      1: { e: "光", type: "通常攻刃", lank: "特大", aura: "opti"},
      2: { e: "光", type: "通常渾身", lank: "中", aura: "opti"},
    },
  },
  アーク: {
    name: "アーク",
    element: "光",
    icon: "images/weapon/Weapon_b_1040112500.png",
    skill: {
      1: { e: "光", type: "通常刹那", lank: "特大", aura: "opti"},
      //2: { e: "光", type: "通常渾身", lank: "中", aura: "omega"},
    },
  },
  シュヴァリエソードマグナ: {
    name: "シュヴァリエソードマグナ",
    element: "光",
    icon: "images/weapon/Luminiera_Sword_Omega.png",
    skill: {
      1: { e: "光", type: "方陣攻刃", lank: "中", aura: "omega"},
      2: { e: "光", type: "通常攻刃", lank: "小", aura: "opti"},
    },
  },
  扇抜: {
    name: "扇抜",
    element: "水",
    icon: "images/weapon/Weapon_b_1040704800.png",
    skill: {
      1: { e: "火", type: "通常攻刃", lank: "特大", aura: "opti"},
      2: { e: "火", type: "通常渾身", lank: "中", aura: "opti"},
    },
  },
  太歳精弓: {
    name: "太歳精弓",
    element: "水",
    icon: "images/weapon/Weapon_b_1040708700.png",
    skill: {
      1: { e: "火", type: "通常攻刃", lank: "特大", aura: "opti"},
      2: { e: "火", type: "通常渾身", lank: "中", aura: "opti"},
    },
  },
  グラーシーザー: {
    name: "グラーシーザー",
    element: "闇",
    icon: "images/weapon/Weapon_b_1040200700.png",
    skill: {
      1: { e: "闇", type: "通常攻刃", lank: "II", aura: "opti"},
      2: { e: "闇", type: "通常背水", lank: "中", aura: "opti"},
    },
  },
  エッケザックス: {
    name: "エッケザックス",
    element: "火",
    icon: "images/weapon/Ecke_Sachs.png",
    skill: {
      1: { e: "火", type: "通常刹那", lank: "中", aura: "opti"},
      2: { e: "火", type: "通常背水", lank: "小", aura: "opti"},
    },
  },
  ドス: {
    name: "ドス",
    element: "火",
    icon: "images/weapon/Weapon_b_1040112600.png",
    skill: {
      1: { e: "火", type: "技巧", lank: "小", aura: "opti"},
      2: { e: "火", type: "通常背水", lank: "大", aura: "opti"},
    },
  },
  ソルレムナント: {
    name: "ソルレムナント",
    element: "火",
    icon: "images/weapon/Weapon_b_1040311800.png",
    skill: {
      1: { e: "火", type: "EX攻刃", lank: "支配者", aura: "None"},
    },
  },
  イノセントラヴ: {
    name: "イノセントラヴ",
    element: "風",
    icon: "images/weapon/Weapon_b_1040811600.png",
    skill: {
      1: { e: "風", type: "EX攻刃", lank: "支配者", aura: "None"},
    },
  },
  リングオブラファエル: {
    name: "リングオブラファエル",
    element: "風",
    icon: "images/weapon/Weapon_b_1040709100.png",
    skill: {
      1: { e: "風", type: "通常神威", lank: "小", aura: "opti"},
    },
  },
  泡末夢幻: {
    name: "泡末夢幻",
    element: "風",
    icon: "images/weapon/Weapon_b_1040022000.png",
    skill: {
      1: { e: "風", type: "技巧", lank: "II", aura: "opti"},
      2: { e: "風", type: "通常攻刃", lank: "中", aura: "opti"}
    },
  },
  第八綿羊行刃: {
    name: "第八綿羊行刃",
    element: "風",
    icon: "images/weapon/Weapon_b_1040313100.png",
    skill: {
      1: { e: "風", type: "通常乱舞", lank: "中", aura: "opti"},
    },
  },
  宿命鉄拳: {
    name: "宿命鉄拳",
    element: "風",
    icon: "images/weapon/462px-Weapon_b_1040614800.png",
    skill: {
      1: { e: "風", type: "修羅", lank: "大", aura: "opti"},
      2: { e: "風", type: "通常背水", lank: "小", aura: "opti"},
    },
  },
  ラストストームハープ: {
    name: "ラストストームハープ",
    element: "風",
    icon: "images/weapon/462px-Last_Storm_Harp.png",
    skill: {
      1: { e: "風", type: "方陣渾身", lank: "中", aura: "omega"},
      2: { e: "風", type: "技巧", lank: "大", aura: "omega"},
    },
  },
  タアロマサラ: {
    name: "タアロマサラ",
    element: "闇",
    icon: "images/weapon/Weapon_b_1040615400.png",
    skill: {
      1: { e: "闇", type: "通常攻刃", lank: "中", aura: "opti"},
      2: { e: "闇", type: "通常背水", lank: "小", aura: "opti"},
      3: { e: "闇", type: "修羅", lank: "大", aura: "opti"},
    },
  },
  方天画戟: {
    name: "方天画戟",
    element: "闇",
    icon: "images/weapon/Sky_Piercer.png",
    skill: {
      1: { e: "闇", type: "通常背水", lank: "大", aura: "opti"},
    },
  },
  
  ティアマトボルトマグナ: {
    name: "ティアマトボルトマグナ",
    element: "風",
    icon: "images/weapon/Tiamat_Bolt_Omega.png",
    skill: {
      1: { e: "風", type: "方陣背水", lank: "小", aura: "omega"},
      2: { e: "風", type: "方陣攻刃", lank: "中", aura: "omega"},
      3:{}
    },
  },
  輝羅煌閃杖: {
    name: "輝羅煌閃杖",
    element: "風",
    icon: "images/weapon/Weapon_b_1040418000.png",
    skill: {
      1: { e: "風", type: "方陣神威", lank: "小", aura: "omega"},
      2: { e: "風", type: "方陣克己", lank: "中", aura: "omega"},
      3:{}
    },
  },
  方天画戟: {
    name: "方天画戟",
    element: "風",
    icon: "images/weapon/Sky_Piercer.png",
    skill: {
      1: { e: "風", type: "通常背水", lank: "大", aura: "opti"},
    },
  },
  ティアマトガントレマグナ: {
    name: "ティアマトガントレマグナ",
    element: "風",
    icon: "images/weapon/Tiamat_Gauntlet_Omega.png",
    skill: {
      1: { e: "風", type: "方陣攻刃", lank: "大", aura: "omega"},
    },
  },
  エターナルラヴ: {
    name: "エターナルラヴ",
    element: "風",
    icon: "images/weapon/Weapon_b_1040105400.png",
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "III", aura: "opti"},
      2: { e: "風", type: "通常乱舞", lank: "中", aura: "opti"},
    },
  },
  イーウィアビーク: {
    name: "イーウィアビーク",
    element: "風",
    icon: "images/weapon/Weapon_b_1040912400.png",
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "劫風の攻刃", aura: "None"},
    }
  },
  ルフェイ: {
    name: "ルフェイ",
    element: "風",
    icon: "images/weapon/Le_Fay.png",
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "暴君", aura: "opti"},
      2: { e: "風", type: "通常三手", lank: "大", aura: "opti"},
    }
  },
  青竜邪槍王: {
    name: "青竜邪槍王",
    element: "風",
    icon: "images/weapon/Qinglong_Spear_Regus.png",
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "II", aura: "opti"},
      2: { e: "風", type: "技巧", lank: "中", aura: "opti"},
    }
  },
  ...DARK_OPUS_WEAPON
}