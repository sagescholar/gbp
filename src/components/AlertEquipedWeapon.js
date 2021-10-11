import { DARK_OPUS, SERAPHIC, ASTRAL } from "../data/WEAPONS";


export default function AlertEquipedWeapon(props) {
  const parent_state_list_equiped = props.parent_state_list_equiped

  const state_equiped = {
    AW: {
      toggle: false,
      icon: "images/WeaponSeries_Astral_Weapons_icon.png",
    },
    終末: {
      toggle: false,
      icon: "images/25px-WeaponSeries_Dark_Opus_Weapons_icon.png",
    },
    セラフィックウェポン: {
      toggle: false,
      icon: "images/25px-WeaponSeries_Seraphic_Weapons_icon.png",
    },
  };

  Object.keys(parent_state_list_equiped).forEach((id) => {
    if(DARK_OPUS.includes(parent_state_list_equiped[id].name)) state_equiped["終末"].toggle = true
    if(SERAPHIC.includes(parent_state_list_equiped[id].name)) state_equiped["セラフィックウェポン"].toggle = true
    if(ASTRAL.includes(parent_state_list_equiped[id].name)) state_equiped["AW"].toggle = true
  })

  return (
    <dvi
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#666666",
        width: "",
        height: "30px",
        padding: "5px",
      }}
      class="weapon-element-wrapper"
    >
      <>
        {Object.keys(state_equiped).map((key) => {
          if (state_equiped[key].toggle) {
            return (
              <a style={{ backgroundColor: "" }}>
                <img
                  style={{ padding: "2px", width: "22px" }}
                  src={process.env.PUBLIC_URL + "/" + state_equiped[key].icon}
                />
              </a>
            );
          } else {
            return (
              <a style={{ backgroundColor: "" }}>
                <img
                  style={{ cursor: "pointer", padding: "2px", width: "22px", opacity: "0.15" }}
                  src={process.env.PUBLIC_URL + "/" + state_equiped[key].icon}
                />
              </a>
            );
          }
        })}
      </>
    </dvi>
  );
};

export const changeActibeEquiped = (
  parent_state_active_equiped_number,
  parentSetStateActiveEquipedNumber,
  number
) => {
  return (
    <div
      class="button-active-equiped"
      style={{
        width: "100%",
        height: "3px",
        padding: "0px",
        margin: "0px",
        backgroundColor: parent_state_active_equiped_number == number ? "#005ce6" : "black"

      }}
      onClick={() => parentSetStateActiveEquipedNumber(number)}
    />
  );
};
