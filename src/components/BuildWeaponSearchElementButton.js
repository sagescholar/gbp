import cloneDeep from "lodash.clonedeep";
import { ELEMENT_ICON_INTERFACE } from "../data/ELEMENT"


export const buildWeaponSearchElementButton = (parent_state_weapon_search_element,parentSetStateWeaponSearchButton) => {
    const onClick = (element) => {
        let rsl = cloneDeep(parent_state_weapon_search_element);
        rsl[element] = ! rsl[element];
        parentSetStateWeaponSearchButton(rsl);
    }
    
    return(
        <dvi style={{display: "block",backgroundColor: "#666666" ,width: "", padding:"5px"}} class="weapon-element-wrapper">
            <>
            {Object.keys(parent_state_weapon_search_element).map((element) => {
                if(parent_state_weapon_search_element[element]){
                    return <a onClick={()=>onClick(element)} style={{backgroundColor:""}}>
                        <img style={{padding: "2px",width: "20px"}}src={process.env.PUBLIC_URL + "/" + ELEMENT_ICON_INTERFACE[element] + ".png"} /> 
                    </a>
                }
                else{
                    return <a onClick={()=>onClick(element)} style={{backgroundColor:""}}>
                        <img style={{padding: "2px",width: "20px",opacity: "0.5"}}src={process.env.PUBLIC_URL + "/" + ELEMENT_ICON_INTERFACE[element] + ".png"} /> 
                    </a>
                }
            })}
            </>
        </dvi>
    )
}