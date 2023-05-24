import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Display } from "./types";

const MenuToggle = () => {

    const [display, setDisplay] = useState(Display.SHORT)

    const toggleAudioDisplay = () => {
        setDisplay(display==Display.SHORT ? Display.FULL : Display.SHORT)
    }

    return (
        <ToggleButtonGroup
          value={display}
          exclusive
          onChange={toggleAudioDisplay}
          aria-label="text alignment"
        >
          <ToggleButton value={Display.SHORT} aria-label="left aligned">
            Shorts
          </ToggleButton>
          <ToggleButton value={Display.FULL} aria-label="centered">
            Full Audio
          </ToggleButton>
        </ToggleButtonGroup>
      );
}

export default MenuToggle;