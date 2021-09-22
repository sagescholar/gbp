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
      1: { e: "風", type: "通常渾身", lank: "中", aura: "opti"},
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
  }
};
