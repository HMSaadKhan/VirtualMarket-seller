import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

const BG = styled(Box)({
  backgroundColor: "#c9485b",
  color: "white",
});
const InnerText = styled(Typography)({
  marginLeft: "20%",
  marginTop: "10px",
  marginBottom: "10px",
  fontSize: "30px",
  fontWeight: "bold",
});

export const NameBar = ({ name }) => {
  return (
    <BG>
      <InnerText align="left">{name}</InnerText>
    </BG>
  );
};
