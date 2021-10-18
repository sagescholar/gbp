//import { BASE_SKILL } from "./WEAPONSKILL";

export const EQUIPED_WEAPON_INTERFACE = {
  name: "",
  Lv: 1,
  SLv: 1,
  Bonus: 0,
  Tag: "",
  EX_Skill: {
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
    skill_level:20,
    atk: 3360,
    hp:377,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040212500.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常神威", lank: "大", aura: "opti"},
    },
    
  },
  絶対否定の杖: {
    name: "絶対否定の杖",
    element: "水",
    skill_level:20,
    atk: 3140,
    hp:420,
    type:"staff",
    icon: "images/weapon/Weapon_b_1040415000.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "通常神威", lank: "大", aura: "opti"},
    },
    
  },
  永遠拒絶の槍: {
    name: "永遠拒絶の槍",
    element: "風",
    skill_level:20,
    atk: 3360,
    hp:377,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040212600.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "方陣神威", lank: "大", aura: "omega"},
    },
  },
  絶対否定の剣: {
    name: "絶対否定の剣",
    element: "光",
    skill_level:20,
    atk: 3660,
    hp:316,
    type:"sabre",
    icon: "images/weapon/Weapon_b_1040017000.png",
    EX_Skill: false,
    skill: {
      1: { e: "光", type: "通常神威", lank: "大", aura: "opti"},
      2:{},
      3:{}
    },
  },
}

export const ASTRAL_WEAPON = {
  ソルレムナント: {
    name: "ソルレムナント",
    element: "火",
    skill_level:20,
    atk: 3272,
    hp:236,
    type:"axe",
    icon: "images/weapon/Weapon_b_1040311800.png",
    EX_Skill: false,
    skill: {
      1: { e: "火", type: "EX攻刃", lank: "支配者", aura: "None"},
    },
  },
  イノセントラヴ: {
    name: "イノセントラヴ",
    element: "風",
    skill_level:20,
    atk: 2748,
    hp:340,
    type:"harp",
    icon: "images/weapon/Weapon_b_1040811600.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "EX攻刃", lank: "支配者", aura: "None"},
    },
  },
}

export const SERAPHIC_WEAPON = {
  リングオブラファエル: {
    name: "リングオブラファエル",
    element: "風",
    skill_level:15,
    atk: 2970,
    hp:270,
    type:"bow",
    icon: "images/weapon/Weapon_b_1040709100.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常神威", lank: "小", aura: "opti"},
    },
  }, 
}

export const GRAND_WEAPON = {
  イクサバ: {
    name: "イクサバ",
    element: "火",
    skill_level:15,
    atk: 3620,
    hp:236,
    type:"katana",
    icon: "images/weapon/Weapon_b_1040906400.png",
    EX_Skill: false,
    skill: {
      1: { e: "火", type: "通常攻刃", lank: "特大", aura: "opti"},
      2: { e: "火", type: "通常渾身", lank: "中", aura: "opti"},
    },
  },
  絶拳: {
    name: "絶拳",
    element: "火",
    skill_level:15,
    atk: 3141,
    hp:327,
    type:"melee",
    icon: "images/weapon/Weapon_b_1040612700.png",
    EX_Skill: false,
    skill: {
      1: { e: "火", type: "通常刹那", lank: "特大", aura: "opti"},
      2: { e: "火", type: "通常三手", lank: "小", aura: "opti"},
    },
  },
  ガリレオサイト: {
    name: "ガリレオサイト",
    element: "水",
    skill_level:15,
    atk: 3044,
    hp:345,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040211600.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "通常克己", lank: "中", aura: "opti"},
      2: { e: "水", type: "通常渾身", lank: "大", aura: "opti"},
    },
  },
  虚無乃哭風: {
    name: "虚無乃哭風",
    element: "風",
    skill_level:15,
    atk: 3107,
    hp:333,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040212700.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常渾身", lank: "大", aura: "opti"},
      //2: { e: "風", type: "通常渾身", lank: "中", aura: "omega"},
    },
  },
  エデン: {
    name: "エデン",
    element: "光",
    skill_level:15,
    atk: 3140,
    hp:340,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040207000.png",
    EX_Skill: false,
    skill: {
      1: { e: "光", type: "通常攻刃", lank: "特大", aura: "opti"},
      2: { e: "光", type: "通常渾身", lank: "中", aura: "opti"},
    },
  },
  アーク: {
    name: "アーク",
    element: "光",
    skill_level:15,
    atk: 3180,
    hp:318,
    type:"dagger",
    icon: "images/weapon/Weapon_b_1040112500.png",
    EX_Skill: false,
    skill: {
      1: { e: "光", type: "通常刹那", lank: "特大", aura: "opti"},
      //2: { e: "光", type: "通常渾身", lank: "中", aura: "omega"},
    },
  },
  太歳精弓: {
    name: "太歳精弓",
    element: "水",
    skill_level:15,
    atk: 3020,
    hp:363,
    type:"bow",
    icon: "images/weapon/Weapon_b_1040708700.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "通常攻刃", lank: "II", aura: "opti"},
      2: { e: "水", type: "技巧", lank: "大", aura: "opti"},
    },
  },
  泡末夢幻: {
    name: "泡末夢幻",
    element: "風",
    skill_level:15,
    atk: 3369,
    hp:281,
    type:"sabre",
    icon: "images/weapon/Weapon_b_1040022000.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "技巧", lank: "II", aura: "opti"},
      2: { e: "風", type: "通常攻刃", lank: "中", aura: "opti"}
    },
  },
  アトランティス: {
    name: "アトランティス",
    element: "水",
    skill_level:15,
    atk: 3079,
    hp:338,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040216300.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "通常背水", lank: "大", aura: "opti"},
      2: { e: "水", type: "堅守", lank: "大", aura: "opti"},
    }
  },
  エターナルラヴ: {
    name: "エターナルラヴ",
    element: "風",
    skill_level:15,
    atk: 3200,
    hp:320,
    type:"dagger",
    icon: "images/weapon/Weapon_b_1040105400.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "III", aura: "opti"},
      2: { e: "風", type: "通常乱舞", lank: "中", aura: "opti"},
    },
  },
}

const OMEGA_WEAPON = {
  シュヴァリエソードマグナ: {
    name: "シュヴァリエソードマグナ",
    element: "光",
    skill_level:20,
    atk: 2850,
    hp:244,
    type:"sabre",
    icon: "images/weapon/Luminiera_Sword_Omega.png",
    EX_Skill: true,
    skill: {
      1: { e: "光", type: "方陣攻刃", lank: "中", aura: "omega"},
      2: { e: "光", type: "通常攻刃", lank: "小", aura: "opti"},
    },
  },
  ティアマトボルトマグナ: {
    name: "ティアマトボルトマグナ",
    element: "風",
    skill_level:20,
    atk: 3050,
    hp:202,
    type:"gun",
    icon: "images/weapon/Tiamat_Bolt_Omega.png",
    EX_Skill: true,
    skill: {
      1: { e: "風", type: "方陣背水", lank: "小", aura: "omega"},
      2: { e: "風", type: "方陣攻刃", lank: "中", aura: "omega"},
      3:{}
    },
  },
  ティアマトガントレマグナ: {
    name: "ティアマトガントレマグナ",
    element: "風",
    skill_level:20,
    atk: 2670,
    hp:281,
    type:"melee",
    icon: "images/weapon/Tiamat_Gauntlet_Omega.png",
    EX_Skill: true,
    skill: {
      1: { e: "風", type: "方陣攻刃", lank: "大", aura: "omega"},
    },
  },
  セレストホーンマグナ: {
    name: "セレストホーンマグナ",
    element: "闇",
    skill_level:20,
    atk: 2620,
    hp:289,
    type:"spear",
    icon: "images/weapon/Celeste_Horn_Omega.png",
    EX_Skill: true,
    skill: {
      1: { e: "闇", type: "方陣攻刃", lank: "大", aura: "omega"},
      2: { e: "風", type: "通常背水", lank: "大", aura: "opti"},
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
  
  
  扇抜: {
    name: "扇抜",
    element: "水",
    skill_level:15,
    atk: 2700,
    hp:250,
    type:"bow",
    icon: "images/weapon/Weapon_b_1040704800.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "通常神威", lank: "中", aura: "opti"},
      2: { e: "水", type: "堅守", lank: "中", aura: "opti"},
    },
  },
  コロンバ: {
    name: "コロンバ",
    element: "水",
    skill_level:15,
    atk: 2826,
    hp:253,
    type:"bow",
    icon: "images/weapon/Weapon_b_1040711000.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "奥義与ダメ", lank: "雪の極意", aura: "opti"},
      2: { e: "水", type: "EX攻刃", lank: "大", aura: "None"},
    }
  },
  ゲイアサイル: {
    name: "ゲイアサイル",
    element: "風",
    skill_level:15,
    atk: 2780,
    hp:314,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040212200.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "大", aura: "opti"},
      2: { e: "風", type: "通常背水", lank: "中", aura: "opti"},
    }
  },
  
  グラーシーザー: {
    name: "グラーシーザー",
    element: "闇",
    skill_level:15,
    atk: 2810,
    hp:309,
    type:"spear",
    icon: "images/weapon/Weapon_b_1040200700.png",
    EX_Skill: false,
    skill: {
      1: { e: "闇", type: "通常攻刃", lank: "II", aura: "opti"},
      2: { e: "闇", type: "通常背水", lank: "中", aura: "opti"},
    },
  },
  エッケザックス: {
    name: "エッケザックス",
    element: "火",
    skill_level:15,
    atk: 2030,
    hp:800,
    type:"sabre",
    icon: "images/weapon/Ecke_Sachs.png",
    EX_Skill: false,
    skill: {
      1: { e: "火", type: "通常刹那", lank: "中", aura: "opti"},
      2: { e: "火", type: "通常背水", lank: "小", aura: "opti"},
    },
  },
  ドス: {
    name: "ドス",
    element: "火",
    skill_level:15,
    atk: 2950,
    hp:280,
    type:"dagger",
    icon: "images/weapon/Weapon_b_1040112600.png",
    EX_Skill: false,
    skill: {
      1: { e: "火", type: "技巧", lank: "小", aura: "opti"},
      2: { e: "火", type: "通常背水", lank: "大", aura: "opti"},
    },
  },
  
  
  
  第八綿羊行刃: {
    name: "第八綿羊行刃",
    element: "風",
    skill_level:15,
    atk: 3180,
    hp:230,
    type:"axe",
    icon: "images/weapon/Weapon_b_1040313100.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常乱舞", lank: "中", aura: "opti"},
    },
  },
  宿命鉄拳: {
    name: "宿命鉄拳",
    element: "風",
    skill_level:10,
    atk: 2539,
    hp:210,
    type:"melee",
    icon: "images/weapon/462px-Weapon_b_1040614800.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "修羅", lank: "大", aura: "opti"},
      2: { e: "風", type: "通常背水", lank: "小", aura: "opti"},
    },
  },
  
  ラストストームハープ: {
    name: "ラストストームハープ",
    element: "風",
    skill_level:15,
    atk: 2400,
    hp:260,
    type:"harp",
    icon: "images/weapon/462px-Last_Storm_Harp.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "方陣渾身", lank: "中", aura: "omega"},
      2: { e: "風", type: "技巧", lank: "大", aura: "omega"},
    },
  },
  タアロマサラ: {
    name: "タアロマサラ",
    element: "闇",
    skill_level:15,
    atk: 3020,
    hp:266,
    type:"melee",
    icon: "images/weapon/Weapon_b_1040615400.png",
    EX_Skill: false,
    skill: {
      1: { e: "闇", type: "通常攻刃", lank: "中", aura: "opti"},
      2: { e: "闇", type: "通常背水", lank: "小", aura: "opti"},
      3: { e: "闇", type: "修羅", lank: "大", aura: "opti"},
    },
  },
  方天画戟: {
    name: "方天画戟",
    element: "闇",
    skill_level:20,
    atk: 3562,
    hp:382,
    type:"melee",
    icon: "images/weapon/Sky_Piercer.png",
    EX_Skill: false,
    skill: {
      1: { e: "闇", type: "通常背水", lank: "大", aura: "opti"},
    },
  },
  
  
  輝羅煌閃杖: {
    name: "輝羅煌閃杖",
    element: "風",
    skill_level:15,
    atk: 2400,
    hp:350,
    type:"staff",
    icon: "images/weapon/Weapon_b_1040418000.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "方陣神威", lank: "小", aura: "omega"},
      2: { e: "風", type: "方陣克己", lank: "中", aura: "omega"},
      3:{}
    },
  },
  方天画戟: {
    name: "方天画戟",
    element: "風",
    skill_level:20,
    atk: 3562,
    hp:382,
    type:"melee",
    icon: "images/weapon/Sky_Piercer.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常背水", lank: "大", aura: "opti"},
    },
  },
  
  
  イーウィアビーク: {
    name: "イーウィアビーク",
    element: "風",
    skill_level:15,
    atk: 3209,
    hp:224,
    type:"katana",
    icon: "images/weapon/Weapon_b_1040912400.png",
    EX_Skill: true,
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "劫風の攻刃", aura: "None"},
    }
  },
  ルフェイ: {
    name: "ルフェイ",
    element: "風",
    skill_level:15,
    atk: 2570,
    hp:290,
    type:"dagger",
    icon: "images/weapon/Le_Fay.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "暴君", aura: "opti"},
      2: { e: "風", type: "通常三手", lank: "大", aura: "opti"},
    }
  },
  青竜邪槍王: {
    name: "青竜邪槍王",
    element: "風",
    skill_level:15,
    atk: 2180,
    hp:240,
    type:"spear",
    icon: "images/weapon/Qinglong_Spear_Regus.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常攻刃", lank: "II", aura: "opti"},
      2: { e: "風", type: "技巧", lank: "中", aura: "opti"},
    }
  },
  暁: {
    name: "暁",
    element: "水",
    skill_level:15,
    atk: 3550,
    hp:160,
    type:"katana",
    icon: "images/weapon/Weapon_b_1040912300.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "技巧", lank: "中", aura: "opti"},
      2: { e: "水", type: "通常背水", lank: "大", aura: "opti"},
    }
  },
  第九申行棒: {
    name: "第九申行棒",
    element: "水",
    skill_level:15,
    atk: 2880,
    hp:291,
    type:"axe",
    icon: "images/weapon/Weapon_b_1040314200.png",
    EX_Skill: false,
    skill: {
      1: { e: "水", type: "通常神威", lank: "中", aura: "opti"},
      2: { e: "水", type: "通常進境", lank: "中", aura: "opti"},
    }
  },
  
  
  ディアドリッククロー: {
    name: "ディアドリッククロー",
    element: "風",
    skill_level:15,
    atk: 2830,
    hp:300,
    type:"melee",
    icon: "images/weapon/Weapon_b_1040607200.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "技巧", lank: "中", aura: "opti"},
      2: { e: "風", type: "通常背水", lank: "大", aura: "opti"},
    }
  },
  クリーピィクロウ: {
    name: "クリーピィクロウ",
    element: "風",
    skill_level:15,
    atk: 2895,
    hp:291,
    type:"melee",
    icon: "images/weapon/1040615500.png",
    EX_Skill: false,
    skill: {
      1: { e: "風", type: "通常背水", lank: "大", aura: "opti"},
      //2: { e: "風", type: "通常三手", lank: "大", aura: "opti"},
    }
  },
  ...OMEGA_WEAPON,
  ...GRAND_WEAPON,
  ...DARK_OPUS_WEAPON,
  ...SERAPHIC_WEAPON,
  ...ASTRAL_WEAPON,
}