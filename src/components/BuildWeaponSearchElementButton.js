import cloneDeep from "lodash.clonedeep";


export const buildWeaponSearchElementButton = (parent_state_weapon_search_element,parentSetStateWeaponSearchButton) => {
    const onClick = (element) => {
        let rsl = cloneDeep(parent_state_weapon_search_element);
        rsl[element] = ! rsl[element];
        parentSetStateWeaponSearchButton(rsl);
    }
    
    return(
        <dvi class="weapon-element-wrapper">
            {Object.keys(parent_state_weapon_search_element).map((element) => {
                if(parent_state_weapon_search_element[element]){
                    return <a onClick={()=>onClick(element)} style={{backgroundColor:"white"}}>{element}</a>
                }
                else{
                    return <a onClick={()=>onClick(element)} style={{backgroundColor:"black"}}>{element}</a>
                }
            })}
        </dvi>
    )
}