import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function ChatLoading({ bool }) {
  return <div>{bool && <LinearProgress />}</div>;
}
