import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const ColumnBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
});
