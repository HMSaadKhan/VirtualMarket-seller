import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const WhiteButton = styled(Button)({
  color: "#FF0000",
  backgroundColor: "#fff",
  marginLeft: "10px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#FF0002",
    color: "#ffff",
  },
  "&:focus": {
    backgroundColor: "#FF0002",
    color: "#ffff",
  },
});
