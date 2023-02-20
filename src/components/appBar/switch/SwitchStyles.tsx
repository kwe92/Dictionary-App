import { styled } from "@mui/material/styles";
import AppTheme from "../../../styles/theme/AppTheme";
import SwitchComponent from "@mui/material/Switch";

const themes = AppTheme;
const _StyledSwitch = styled(SwitchComponent)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "white",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: themes.otherColors.purpleColor,
  },
}));

const StyledSwitch = styled(_StyledSwitch)`
  @media screen and (max-width: 450px) {
    margin-right: 0.4375rem;
  }
`;

export default StyledSwitch;
