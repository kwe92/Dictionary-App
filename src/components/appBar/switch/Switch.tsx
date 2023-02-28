import { MouseEventHandler } from "react";
import StyledSwitch from "./SwitchStyles";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Switch = (props: { onClick: Function }) => (
  <StyledSwitch
    {...label}
    onClick={props.onClick as MouseEventHandler<HTMLButtonElement>}
  />
);

export default Switch;
