import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/styles";
import warrantyServices from "../../Services/WarrantyServices";
import { NameBar } from "../../Styles/NameBar";
import { MarginBox } from "../../Styles/StyledBoxes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
}));

export default function PasswordPopup({
  bool,
  setbool,
  editUserDetails,
  password,
  setpassword,
}) {
  const classes = useStyles();
  const handleClose = () => {
    setbool(false);
    setpassword("");
  };

  return (
    <div>
      <Dialog open={bool} onClose={handleClose}>
        <NameBar name={"Enter Password"} />
        <DialogContent>
          <div className={classes.root}>
            <Box>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <MarginBox>
                {" "}
                <Button variant="contained" onClick={editUserDetails}>
                  Confirm
                </Button>
              </MarginBox>
              <MarginBox>
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
              </MarginBox>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
