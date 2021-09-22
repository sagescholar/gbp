export const alertEquipedWeapon = (parent_state_list_equiped) => {

    const state_equiped = {
        AW : {
            toggle: false,
            icon: "images/WeaponSeries_Astral_Weapons_icon.png"
        },
        終末 : {
            toggle: false,
            icon: "images/WeaponSeries_Astral_Weapons_icon.png"
        },
        セラフィックウェポン : {
            toggle: false,
            icon: "images/WeaponSeries_Astral_Weapons_icon.png"
        },
    }

    return(
        <dvi style={{display: "block",backgroundColor: "#666666" ,width: "", padding:"5px"}} class="weapon-element-wrapper">
            <>
            {Object.keys(state_equiped).map((key) => {
                if(state_equiped[key].toggle){
                    return <a style={{backgroundColor:""}}>
                        <img style={{padding: "2px",width: "20px"}}src={process.env.PUBLIC_URL + "/" + state_equiped[key].icon} /> 
                    </a>
                }
                else{
                    return <a style={{backgroundColor:""}}>
                        <img style={{padding: "2px",width: "20px",opacity: "0.5"}}src={process.env.PUBLIC_URL + "/" + state_equiped[key].icon} /> 
                    </a>
                }
            })}
            </>
        </dvi>
    )
}