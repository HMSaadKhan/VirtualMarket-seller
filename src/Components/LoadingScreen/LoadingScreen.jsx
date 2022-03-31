import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default function LoadingScreen(props) {
  const { Loading } = props;
  const classes = useStyles();

  return <Box>{Loading ? <CircularProgress /> : <></>}</Box>;
}
