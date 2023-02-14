import { styled } from "@mui/material/styles";
import AppTheme from "../../../styles/theme/AppTheme";
import SwitchComponent from "@mui/material/Switch";

const themes = AppTheme;
const StyledSwitch = styled(SwitchComponent)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "white",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: themes.otherColors.purpleColor,
  },
}));

export default StyledSwitch;
