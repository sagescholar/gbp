//DATA
import { CALCULATE_OUT_INTERFACE, EX_SKILL } from "../data/WEAPONSKILL";
import { BASE_SKILL, COMPOSITE_SKILL } from "../data/WEAPONSKILL";
import { AURA_BOOST_INTERFACE } from "../data/SUMMONS";
import { weapons } from "../data/WEAPONS";
import { ELEMENT_INTERFACE } from "../data/ELEMENT";
import cloneDeep from "lodash.clonedeep";

export const computeDamageCap = (damage, damage_cap) => {
  let rsl = 0;
  let raw_damage = damage;

  const damagecap = {
    0: { damage: 0, reduction: 0 },
    1: { damage: 300000, reduction: 0 },
    2: { damage: 400000, reduction: 20 },
    3: { damage: 500000, reduction: 40 },
    4: { damage: 600000, reduction: 95 },
    5: { damage: 999999, reduction: 99 },
  };

  Object.keys(damagecap).forEach(
    (key) => (damagecap[key].damage *= 1.0 + damage_cap / 100.0)
  );

  Object.keys(damagecap).forEach((key) => {
    if (key == 0) return;
    if (raw_damage == 0) return;

    let raw_section = damagecap[key].damage - damagecap[key - 1].damage;

    if (raw_damage >= raw_section) {
      raw_damage -= raw_section;
      rsl += raw_section * (1.0 - damagecap[key].reduction / 100.0);
    } else {
      rsl += raw_damage * (1.0 - damagecap[key].reduction / 100.0);
      raw_damage -= raw_damage;
    }
  });

  return rsl;
};

export function computeDamage(list, aura, HP, isView = true) {
  //DeepCopyMethod -> JSON.parse(JSON.stringify(***DeepCopyTarget***))
  let obj_output = JSON.parse(JSON.stringify(CALCULATE_OUT_INTERFACE));

  /*
    計算手順
    1. 情報を取得する 装備中武器/武器加護補正量,
    2. 初期化したobj_outputに武器*武器加護補正計算後の値を加算
    3. 武器スキルの合計値を返す
    */

  /*AURA TEST*/
  let aura_boost = aura;
  console.log(aura_boost);
  /*AURA TEST END*/

  /*SUM ATK */
  let SUM_ATK = 0;
  let ATK_MAINCHARACTER = 20000;
  let ATK_SUMMONCHARACTER = 16000;
  SUM_ATK += ATK_MAINCHARACTER;
  SUM_ATK += ATK_SUMMONCHARACTER;

  //FIXME: テストモードなので防御値は10固定
  let DEF = 10;

  let SUM_HP = 0;
  //DamageCap
  let DamageCap = 0;

  /*HP TEST*/
  let hp = HP;
  /*HP TEST END*/

  let obj_equiped_weapon = {};
  let CNT = 1;
  /*空の配列に1.2.で初期化する
    1. data/WEAPONSから名前をkeyにして武器情報を読み込み
    2. SLvを15で仮置き
    */
  Object.keys(list).forEach((key) => {
    obj_equiped_weapon[CNT] = weapons[list[key].name];
    SUM_ATK += weapons[list[key].name].atk;
    SUM_HP += weapons[list[key].name].hp;

    SUM_ATK += list[key].Bonus * 5;
    SUM_HP += list[key].Bonus * 1;
    CNT += 1;

    if (weapons[list[key].name]["Darkops"]) {
      console.log(list[key]["EX_Skill"])
      Object.keys(list[key]["EX_Skill"]).forEach((skill_num) => {
        if (list[key]["EX_Skill"][skill_num].name == undefined) return;
        let skill_name = list[key]["EX_Skill"][skill_num].name;
        if(skill_name == "α")
          Object.keys(ELEMENT_INTERFACE).forEach((ele) => {
            obj_output["ダメージ上限_通常攻撃枠"][ele] += 10
          });
      })
    }

    
  });

  //console.log(obj_equiped_weapon);

  //EX_SKILL
  Object.keys(list).forEach((id) => {
    Object.keys(list[id]["EX_Skill"]).forEach((skill_num) => {
      let branch = ["EX渾身", "EX背水", "EX攻撃"];
      if (list[id]["EX_Skill"][skill_num].name == undefined) return;
      let skill_name = list[id]["EX_Skill"][skill_num].name;
      let skill_lank = list[id]["EX_Skill"][skill_num].lank;
      //console.log(skill_name)
      //console.log(skill_lank)

      if (branch.includes(skill_name)) {
        Object.keys(ELEMENT_INTERFACE).forEach((ele) => {
          obj_output[skill_name][ele] += EX_SKILL[skill_name](HP, skill_lank);
          console.log(obj_output[skill_name]);
        });
      }
    });
  });

  //EXSKILL_END

  Object.keys(obj_equiped_weapon /*装備中の武器*/).forEach((key_name) => {
    //key = {1,2,3...}
    Object.keys(
      obj_equiped_weapon[key_name]["skill"] /*装備中の武器のスキル*/
    ).forEach((key_skill_no) => {
      if (obj_equiped_weapon[key_name]["skill"][key_skill_no].e == undefined)
        return;
      //keyNo = {1,2,3,...}
      let skill_element = obj_equiped_weapon[key_name]["skill"][key_skill_no].e;
      let skill_name = obj_equiped_weapon[key_name]["skill"][key_skill_no].type;
      let skill_lank = obj_equiped_weapon[key_name]["skill"][key_skill_no].lank;
      let skill_aura = obj_equiped_weapon[key_name]["skill"][key_skill_no].aura;
      let skill_level = obj_equiped_weapon[key_name]["skill_level"];

      //console.log("skill: " + skill_name)

      if (Object.keys(COMPOSITE_SKILL).includes(skill_name /*刹那*/)) {
        //console.log("複合スキル")
        Object.keys(COMPOSITE_SKILL[skill_name][skill_lank]).forEach(
          (skill_name_composite_parsed /**/) => {
            let skill_name_composite_parsed_lank =
              COMPOSITE_SKILL[skill_name][skill_lank][
                skill_name_composite_parsed
              ];
            obj_output[skill_name_composite_parsed][skill_element] +=
              BASE_SKILL[skill_name_composite_parsed][
                skill_name_composite_parsed_lank
              ][skill_level] *
              (1 + aura_boost[skill_aura][skill_element]);
          }
        );
      } else {
        //console.log("BASE_SKILL")
        let branch_stamina_list = ["通常渾身", "方陣渾身"];
        let branch_enmity_list = ["通常背水", "方陣背水"];
        let branch_damagecap_list = [
          "ダメージ上限_通常攻撃枠",
          "ダメージ上限_武器枠",
        ];
        let branch_supplement_list = ["与ダメージ上昇_クラフト枠"];
        let branch_seraphic_list = ["対有利与ダメUP"];
        if (branch_stamina_list.includes(skill_name)) {
          obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level](
              hp,
              skill_name,
              skill_lank,
              skill_level
            ) *
            (1 + aura_boost[skill_aura][skill_element]);
        } else if (branch_enmity_list.includes(skill_name)) {
          /*FIXME
            背水がゼロだと通常背水が計算式に現れないのが違和感
            */
          obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level](
              hp,
              skill_name,
              skill_lank,
              skill_level
            ) *
            (1 + aura_boost[skill_aura][skill_element]);
        } else if (branch_damagecap_list.includes(skill_name)) {
          obj_output[skill_name][skill_element] += skill_lank;
        } else if (branch_supplement_list.includes(skill_name)) {
          obj_output[skill_name][skill_element] += skill_lank;
        } else if (branch_seraphic_list.includes(skill_name)) {
          obj_output[skill_name][skill_element] += skill_lank;
        } else {
          obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level] *
            (1 + aura_boost[skill_aura][skill_element]);
        }
      }
    });
  });

  if (isView) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "column",
          padding: "0px 60px",
        }}
      >
        {Object.keys(obj_output).map((skill_name) =>
          Object.keys(obj_output[skill_name]).map((skill_element) => {
            if (obj_output[skill_name][skill_element] != 0)
              return (
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "left",
                    paddingBottom: "5px",
                  }}
                >
                  {skill_name}|{skill_element}|
                  {obj_output[skill_name][skill_element] > 0.1
                    ? obj_output[skill_name][skill_element].toFixed(2)
                    : 0}
                </div>
              );
          })
        )}
        <div
          style={{ fontSize: "12px", textAlign: "left", paddingBottom: "5px" }}
        >
          ATK: {SUM_ATK}
          <br />
          HP: {SUM_HP}
        </div>
      </div>
    );
  } else {
    //武器
    let rtn = cloneDeep(ELEMENT_INTERFACE);
    let cal_list = [
      "通常攻刃",
      "通常渾身",
      "通常背水",
      "方陣攻刃",
      "方陣渾身",
      "方陣背水",
      "EX攻刃",
      "EX渾身",
      "EX背水",
    ];
    Object.keys(rtn).map((key) => (rtn[key] = 1));
    Object.keys(obj_output).map((skill_name) =>
      Object.keys(obj_output[skill_name]).map((skill_element) => {
        if (
          obj_output[skill_name][skill_element] > 0.1 &&
          cal_list.includes(skill_name)
        )
          rtn[skill_element] =
            rtn[skill_element] *
            (1.0 + obj_output[skill_name][skill_element] / 100.0);
        if (
          obj_output[skill_name][skill_element] > 0.1 &&
          skill_name == "技巧" &&
          obj_output[skill_name][skill_element] >= 100
        )
          rtn[skill_element] = rtn[skill_element] * 1.5;
      })
    );

    //基礎ダメージ
    Object.keys(rtn).map((key) => (rtn[key] = rtn[key].toFixed(2) * SUM_ATK));

    //防御値
    Object.keys(rtn).map((key) => (rtn[key] = rtn[key].toFixed(2) / DEF));

    //弱点補正 -> 有利を殴る前提

    //減衰計算
    Object.keys(rtn).map((key) => {
      let d_cap = 0;
      d_cap += obj_output["ダメージ上限_通常攻撃枠"][key];
      d_cap += obj_output["ダメージ上限_武器枠"][key];
      d_cap += 10.0 //天司分
      rtn[key] = computeDamageCap(rtn[key], d_cap);
    });

    //与ダメージUP
    Object.keys(rtn).map((key) => {
      let d_seraphic = 0;
      d_seraphic += obj_output["対有利与ダメUP"][key];
      d_seraphic += 10.0;
      rtn[key] *= 1.0 + d_seraphic / 100.0;
    });

    //与ダメージ上昇
    Object.keys(rtn).map((key) => {
      if(obj_output["技巧"][key] >= 100)
        rtn[key] += obj_output["与ダメージ上昇_クラフト枠"][key];
        rtn[key] +=　30000 //ベリアル分
    });

    return rtn;
  }
}
