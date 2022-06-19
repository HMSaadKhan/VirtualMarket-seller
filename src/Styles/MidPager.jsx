import { styled } from "@mui/material/styles";
import { Typography, Container } from "@mui/material";

export const OuterCounter = styled(Container)({
  width: "100%",
  height: " 50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "220px",
});

const InnerText = styled(Typography)({
  fontSize: "30px",
  fontWeight: "bold",
});

export const MidPager = ({ name }) => {
  return (
    <OuterCounter>
      <InnerText color="primary">{name}</InnerText>
    </OuterCounter>
  );
};
