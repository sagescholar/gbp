export const alertEquipedWeapon = (parent_state_list_equiped) => {

    const state_equiped = {
        AW : {
            toggle: false,
            icon: "images/WeaponSeries_Astral_Weapons_icon.png"
        },
        終末 : {
            toggle: false,
            icon: "images/25px-WeaponSeries_Dark_Opus_Weapons_icon.png"
        },
        セラフィックウェポン : {
            toggle: false,
            icon: "images/25px-WeaponSeries_Seraphic_Weapons_icon.png"
        },
    }

    return(
        <dvi style={{display: "flex",justifyContent: "space-evenly", backgroundColor: "#666666" ,width: "", height: "30px",padding:"5px"}} class="weapon-element-wrapper">
            <>
            {Object.keys(state_equiped).map((key) => {
                if(state_equiped[key].toggle){
                    return <a style={{backgroundColor:""}}>
                        <img style={{padding: "2px",width: "22px"}}src={process.env.PUBLIC_URL + "/" + state_equiped[key].icon} /> 
                    </a>
                }
                else{
                    return <a style={{backgroundColor:""}}>
                        <img style={{padding: "2px",width: "22px",opacity: "0.5"}}src={process.env.PUBLIC_URL + "/" + state_equiped[key].icon} /> 
                    </a>
                }
            })}
            </>
        </dvi>
    )
}