import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
//import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material/";

export default function ChatLoading({ bool }) {
  return <div>{bool && <LinearProgress />}</div>;
}
