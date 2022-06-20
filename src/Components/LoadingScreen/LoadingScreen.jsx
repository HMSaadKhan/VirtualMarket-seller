import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material/";
export default function LoadingScreen({ bool, progress }) {
 
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={bool}
      >
        <CircularProgress />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {progress ? (
            <>
              {" "}
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
              >
                {`${Math.floor(progress)}%`}
              </Typography>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Backdrop>
    </div>
  );
}
