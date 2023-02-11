import SwitchComponent from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Switch = (props: {}) => {
  return <SwitchComponent {...label} />;
};

export default Switch;
