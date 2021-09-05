//DATA
import { CALCULATE_OUT_INTERFACE } from '../data/WEAPONSKILL';
import { BASE_SKILL, COMPOSITE_SKILL } from '../data/WEAPONSKILL';
import { AURA_BOOST_INTERFACE } from '../data/SUMMONS';
import { weapons } from '../data/WEAPONS';

export function computeWeaponSkill(list) {

    /*
    計算手順
    1. 情報を取得する 装備中武器/武器加護補正量,
    2. 初期化したobj_outputに武器*武器加護補正計算後の値を加算
    3. 武器スキルの合計値を返す
    */
  
  
    /*AURA TEST*/
    let aura_boost = JSON.parse(JSON.stringify(AURA_BOOST_INTERFACE));
    aura_boost["omega"]["火"] = 0.0;
    /*AURA TEST END*/
  
    /*HP TEST*/
    let hp = 70;
    /*HP TEST END*/
  
    let obj_equiped_weapon = {}
    let CNT = 1
    list.forEach((value) => {
      obj_equiped_weapon[CNT] = weapons[value];
      obj_equiped_weapon[CNT]["skill_level"] = "15";
      CNT += 1;
    })
  
    console.log(obj_equiped_weapon);
  
    //DeepCopyMethod -> JSON.parse(JSON.stringify(***DeepCopyTarget***))
    let obj_output = JSON.parse(JSON.stringify(CALCULATE_OUT_INTERFACE));
  
    Object.keys(obj_equiped_weapon/*装備中の武器*/).forEach((key_name) => {
      //key = {1,2,3...}
      Object.keys(obj_equiped_weapon[key_name]["skill"]/*装備中の武器のスキル*/).forEach((key_skill_no) => {
        //keyNo = {1,2,3,...}
        let skill_element = obj_equiped_weapon[key_name]["skill"][key_skill_no].e;
        let skill_name = obj_equiped_weapon[key_name]["skill"][key_skill_no].type;
        let skill_lank = obj_equiped_weapon[key_name]["skill"][key_skill_no].lank;
        let skill_aura = obj_equiped_weapon[key_name]["skill"][key_skill_no].aura;
        let skill_level = obj_equiped_weapon[key_name]["skill_level"];
  
        console.log("skill: " + skill_name)
  
        if(Object.keys(COMPOSITE_SKILL).includes(skill_name/*刹那*/)){
          console.log("複合スキル")
          Object.keys(COMPOSITE_SKILL[skill_name][skill_lank]).forEach((skill_name_composite_parsed/**/) =>{
            let skill_name_composite_parsed_lank = COMPOSITE_SKILL[skill_name][skill_lank][skill_name_composite_parsed]
            obj_output[skill_name_composite_parsed][skill_element] +=
            BASE_SKILL[skill_name_composite_parsed][skill_name_composite_parsed_lank][skill_level]*
            (1+aura_boost[skill_aura][skill_element])
          })
        }
        else{
          console.log("BASE_SKILL")
          let branch_stamina_list = ["通常渾身","方陣渾身"];
          let branch_enmity_list = ["通常背水","方陣背水"];
          if(branch_stamina_list.includes(skill_name)){
            obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level](hp,skill_name,skill_lank,skill_level)*
            (1+aura_boost[skill_aura][skill_element])
          }
          else if(branch_enmity_list.includes(skill_name)){
            obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level](hp,skill_name,skill_lank,skill_level)*
            (1+aura_boost[skill_aura][skill_element])
          }
          else{
            obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level]*
            (1+aura_boost[skill_aura][skill_element])
          }
        }
      });
    });
    return (
      /*<ul style={{ listStyle: "circle", textAlign: "left", fontSize: "14px" }}>
        {Object.keys(obj_output).map((skill_name) => 
          Object.keys(obj_output[skill_name]).map((skill_element) => (
            <li>
              {skill_name} | {skill_element}: {obj_output[skill_name][skill_element]}
            </li>
          ))
        )}
      </ul>*/
      Object.keys(obj_output).map((skill_name) => 
        Object.keys(obj_output[skill_name]).map((skill_element) => {
          if(obj_output[skill_name][skill_element] != 0)
            return(
                <div style={{display: "flex"}}>
                    {skill_name}|
                    {skill_element}|
                    {obj_output[skill_name][skill_element]}
                </div>
            )
        })
    ));
  }