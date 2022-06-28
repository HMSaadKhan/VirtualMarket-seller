import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function MsgLoading({ bool }) {
  return <div>{bool && <CircularProgress />}</div>;
}
