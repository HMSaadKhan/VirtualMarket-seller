import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/styles";
import transactionServices from "../../Services/TransactionServices";
import { NameBar } from "../../Styles/NameBar";
import { MarginBox } from "../../Styles/StyledBoxes";
import { toast } from "react-toastify";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
}));

export default function TransactionRequest({ bool, setbool, gettransaction }) {
  const classes = useStyles();

  const handleClose = () => {
    setbool(false);
  };

  const [amount, setamount] = useState();
  const [loading, setloading] = useState(false);

  const request = () => {
    setloading(true);
    transactionServices
      .withdrawRequest({
        amount,
      })
      .then((data) => {
        setloading(false);
        gettransaction();
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        setloading(false);
        toast.error(error.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <div>
      <Dialog open={bool} onClose={handleClose}>
        <LoadingScreen bool={loading} />
        <NameBar name={"REQUEST WITHDRAWAL"} />
        <DialogContent>
          <div className={classes.root}>
            <Box>
              <TextField
                label="Amount"
                fullWidth
                multiline
                value={amount}
                onChange={(e) => {
                  setamount(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <MarginBox>
                <Button variant="contained" onClick={request}>
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
