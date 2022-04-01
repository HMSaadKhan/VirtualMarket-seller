import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    margin: "auto",
  },
});
export default function LoadingScreen(props) {
  const { Loading } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>{Loading ? <CircularProgress /> : <></>}</Box>
  );
}
