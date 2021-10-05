import React from "react";
import ReactDOM from "react-dom";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

export default function ControlledTooltip() {
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);
  return (
    <div className="App">
      <Tooltip
        open={tooltipIsOpen}
        onOpen={() => setTooltipIsOpen(true)}
        onClose={() => setTooltipIsOpen(false)}
        title="I'm a controlled tooltip"
      >
        <span>Hover over me or click the button</span>
      </Tooltip>
      <div style={{ marginTop: 50 }}>
        <Button
          onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
          variant="contained"
          color="primary"
        >
          Click me to {tooltipIsOpen ? "close" : "open"} the tooltip
        </Button>
      </div>
    </div>
  );
}