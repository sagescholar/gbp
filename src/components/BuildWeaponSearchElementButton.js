import cloneDeep from "lodash.clonedeep";
import { ELEMENT_ICON_INTERFACE, ELEMENT_TOGGLE_INTERFACE } from "../data/ELEMENT"


export const buildWeaponSearchElementButton = (parent_state_weapon_search_element,parentSetStateWeaponSearchButton) => {
    const onClick = (element) => {
        let rsl = cloneDeep(ELEMENT_TOGGLE_INTERFACE);
        rsl[element] = ! rsl[element];
        parentSetStateWeaponSearchButton(rsl);
    }
    
    return(
        <dvi style={{display: "flex", alignItems: "center",justifyContent: "center", backgroundColor: "#666666" ,height: "30px", padding:"5px"}} class="weapon-element-wrapper">
            <>
            {Object.keys(parent_state_weapon_search_element).map((element) => {
                if(parent_state_weapon_search_element[element]){
                    return <a onClick={()=>onClick(element)} style={{backgroundColor:""}}>
                        <img style={{padding: "2.5px",width: "15px"}}src={process.env.PUBLIC_URL + "/" + ELEMENT_ICON_INTERFACE[element] + ".png"} /> 
                    </a>
                }
                else{
                    return <a onClick={()=>onClick(element)} style={{backgroundColor:""}}>
                        <img style={{padding: "2.5px",width: "15px",opacity: "0.175"}}src={process.env.PUBLIC_URL + "/" + ELEMENT_ICON_INTERFACE[element] + ".png"} /> 
                    </a>
                }
            })}
            </>
        </dvi>
    )
}