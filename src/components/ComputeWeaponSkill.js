//DATA
import { CALCULATE_OUT_INTERFACE, EX_SKILL } from '../data/WEAPONSKILL';
import { BASE_SKILL, COMPOSITE_SKILL } from '../data/WEAPONSKILL';
import { AURA_BOOST_INTERFACE } from '../data/SUMMONS';
import { weapons } from '../data/WEAPONS';
import { ELEMENT_INTERFACE } from '../data/ELEMENT'
import cloneDeep from 'lodash.clonedeep';

export function computeWeaponSkill(list,aura,HP,isView=true) {

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
    console.log(aura_boost)
    /*AURA TEST END*/

    /*SUM ATK */
    let SUM_ATK = 0
    let SUM_HP = 0
  
    /*HP TEST*/
    let hp = HP;
    /*HP TEST END*/
  
    let obj_equiped_weapon = {}
    let CNT = 1
    /*空の配列に1.2.で初期化する
    1. data/WEAPONSから名前をkeyにして武器情報を読み込み
    2. SLvを15で仮置き
    */
    Object.keys(list).forEach((key) => {
      obj_equiped_weapon[CNT] = weapons[list[key].name];
      SUM_ATK += weapons[list[key].name].atk;
      SUM_HP += weapons[list[key].name].hp;

      SUM_ATK += list[key].Bonus * 5
      SUM_HP += list[key].Bonus * 1
      CNT += 1;

      if (weapons[list[key].name]["Darkops"]) {
        const DarkopsAura = weapons[list[key].name]["skill"]["1"]["aura"]
        const skill_element = weapons[list[key].name]["element"]
        const skill_level = weapons[list[key].name]["skill_level"]
        Object.keys(list[key]["EX_Skill"]).forEach((skill_num) => {
          if (list[key]["EX_Skill"][skill_num].name == undefined) return;
          let skill_name = list[key]["EX_Skill"][skill_num].name;
          if(skill_name == "α")
            Object.keys(ELEMENT_INTERFACE).forEach((ele) => {
              obj_output["ダメージ上限_通常攻撃枠"][ele] += 10
            });
          if(skill_name == "強壮"){
            let skill_name = DarkopsAura == "opti" ? "通常渾身" : "方陣渾身"
            let skill_aura = DarkopsAura == "opti" ? "opti" : "omega"
            let skill_lank = "大"
            obj_output[skill_name][skill_element] +=
              BASE_SKILL[skill_name][skill_lank][skill_level](
                hp,
                skill_name,
                skill_lank,
                skill_level
              ) *
              (1 + aura_boost[skill_aura][skill_element]);
          }
          if(skill_name == "激情"){
            let skill_name = DarkopsAura == "opti" ? "通常背水" : "方陣背水"
            let skill_aura = DarkopsAura == "opti" ? "opti" : "omega"
            let skill_lank = "大"
            obj_output[skill_name][skill_element] +=
              BASE_SKILL[skill_name][skill_lank][skill_level](
                hp,
                skill_name,
                skill_lank,
                skill_level
              ) *
              (1 + aura_boost[skill_aura][skill_element]);
          }
          
        })
      }

      
    })

    
  
    //console.log(obj_equiped_weapon);
  
    
    
    //EX_SKILL
    Object.keys(list).forEach((id) => {
      Object.keys(list[id]["EX_Skill"]).forEach((skill_num) => {
        
        let branch = ["EX渾身","EX背水","EX攻撃"]
        if(list[id]["EX_Skill"][skill_num].name == undefined) return
        let skill_name = list[id]["EX_Skill"][skill_num].name
        let skill_lank = list[id]["EX_Skill"][skill_num].lank
        //console.log(skill_name)
        //console.log(skill_lank)

        if(branch.includes(skill_name)){
          Object.keys(ELEMENT_INTERFACE).forEach((ele)=>{
            obj_output[skill_name][ele] += EX_SKILL[skill_name](HP,skill_lank)
            console.log(obj_output[skill_name])
          })
        }
        })
    })

    //EXSKILL_END
  
    Object.keys(obj_equiped_weapon/*装備中の武器*/).forEach((key_name) => {
      //key = {1,2,3...}
      Object.keys(obj_equiped_weapon[key_name]["skill"]/*装備中の武器のスキル*/).forEach((key_skill_no) => {
        if(obj_equiped_weapon[key_name]["skill"][key_skill_no].e == undefined) return
        //keyNo = {1,2,3,...}
        let skill_element = obj_equiped_weapon[key_name]["skill"][key_skill_no].e;
        let skill_name = obj_equiped_weapon[key_name]["skill"][key_skill_no].type;
        let skill_lank = obj_equiped_weapon[key_name]["skill"][key_skill_no].lank;
        let skill_aura = obj_equiped_weapon[key_name]["skill"][key_skill_no].aura;
        let skill_level = obj_equiped_weapon[key_name]["skill_level"];
  
        //console.log("skill: " + skill_name)
  
        if(Object.keys(COMPOSITE_SKILL).includes(skill_name/*刹那*/)){
          //console.log("複合スキル")
          Object.keys(COMPOSITE_SKILL[skill_name][skill_lank]).forEach((skill_name_composite_parsed/**/) =>{
            let skill_name_composite_parsed_lank = COMPOSITE_SKILL[skill_name][skill_lank][skill_name_composite_parsed]
            obj_output[skill_name_composite_parsed][skill_element] +=
            BASE_SKILL[skill_name_composite_parsed][skill_name_composite_parsed_lank][skill_level]*
            (1+aura_boost[skill_aura][skill_element])
          })
        }
        else{
          //console.log("BASE_SKILL")
          let branch_stamina_list = ["通常渾身","方陣渾身"];
          let branch_enmity_list = ["通常背水","方陣背水"];
          let branch_miss_list = [
            "ダメージ上限_通常攻撃枠","ダメージ上限_武器枠",
            "与ダメージ上昇_クラフト枠",
            "アビ与ダメ","対有利与ダメUP","ATACK"
          ]
          if(branch_stamina_list.includes(skill_name)){
            obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level](hp,skill_name,skill_lank,skill_level)*
            (1+aura_boost[skill_aura][skill_element])
          }
          else if(branch_enmity_list.includes(skill_name)){
            /*FIXME
            背水がゼロだと通常背水が計算式に現れないのが違和感
            */
            obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level](hp,skill_name,skill_lank,skill_level)*
            (1+aura_boost[skill_aura][skill_element])
          }
          else if(branch_miss_list.includes(skill_name)){
            
          }
          else{
            obj_output[skill_name][skill_element] +=
            BASE_SKILL[skill_name][skill_lank][skill_level]*
            (1+aura_boost[skill_aura][skill_element])
          }
        }
      });
    });
    
    if(isView){
      return (
          <div style={{width:"100%",display: "flex", flexFlow: "column", padding: "0px 60px"}}>
          {
              Object.keys(obj_output).map((skill_name) => 
                  Object.keys(obj_output[skill_name]).map((skill_element) => {
                      if(obj_output[skill_name][skill_element] != 0)
                          return(
                              <div style={{fontSize: "12px", textAlign: "left", paddingBottom: "5px"}}>
                                  {skill_name}|
                                  {skill_element}|
                                  {obj_output[skill_name][skill_element] > 0.1 ? obj_output[skill_name][skill_element].toFixed(2) : 0}
                              </div>
                          )
                  })
              )
          }
          <div style={{fontSize: "12px", textAlign: "left", paddingBottom: "5px"}}>
          ATK: {SUM_ATK}<br/>
          HP: {SUM_HP}
          </div>
          </div>
      )
    }else{
      let rtn = cloneDeep(ELEMENT_INTERFACE);
      let cal_list = ["通常攻刃","通常渾身","通常背水","方陣攻刃","方陣渾身","方陣背水","EX攻刃","EX渾身","EX背水"]
      Object.keys(rtn).map((key) => rtn[key] = 1);
      Object.keys(obj_output).map((skill_name) => 
        Object.keys(obj_output[skill_name]).map((skill_element) => {
            if(obj_output[skill_name][skill_element] > 0.1 &&
               cal_list.includes(skill_name))
                rtn[skill_element] = rtn[skill_element] * (1.0+(obj_output[skill_name][skill_element]/100.0))
            if(obj_output[skill_name][skill_element] > 0.1 &&
                skill_name == "技巧" && obj_output[skill_name][skill_element] >= 100)
                rtn[skill_element] = rtn[skill_element] * 1.5
        })
      )
      Object.keys(rtn).map((key) => rtn[key] = rtn[key].toFixed(2));
      return rtn;
    }

  }