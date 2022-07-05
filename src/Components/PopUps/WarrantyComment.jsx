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

export default function WarrantyComment({
  _id,
  bool,
  setbool,
  status,
  warranties,
  Getwarranty,
}) {
  const classes = useStyles();
  const handleClose = () => {
    setbool(false);
  };
  const [comment, setcomment] = React.useState("");

  const respond = () => {
    warrantyServices
      .giveResponse(_id, { comment, status })
      .then((data) => {
        handleClose();
        Getwarranty();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <Dialog open={bool} onClose={handleClose}>
        <NameBar name={"Comment"} />
        <DialogContent>
          <div className={classes.root}>
            <Box>
              <TextField
                label="Comment"
                fullWidth
                multiline
                value={comment}
                onChange={(e) => {
                  setcomment(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <MarginBox>
                {" "}
                <Button variant="contained" onClick={respond}>
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
