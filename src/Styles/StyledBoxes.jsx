import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  paddingTop: "5%",
  marginLeft: "100px",
});
export const ColumnBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
});
export const MarginBox = styled(Box)({
  margin: "10px",
});
