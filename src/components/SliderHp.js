import React from "react";
import { Slider } from '@material-ui/core';

export const SliderHp = (parent_state_hp,parentSetStateHp) => {
    const pickUpValue = (v) => {
        parentSetStateHp(v);
    }

    return(
        <Slider
        size="small"
        defaultValue={parent_state_hp}
        aria-label="Small"
        valueLabelDisplay="auto"
        onChange={(e,val)=>pickUpValue(val)}
        min={0}
        max={100}
        step={10}
        />
    )
}