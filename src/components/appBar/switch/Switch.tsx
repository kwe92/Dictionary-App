import SwitchComponent from "@mui/material/Switch";
import StyledSwitch from "./SwitchStyles";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Switch = (props: {}) => <StyledSwitch {...label} />;

export default Switch;
