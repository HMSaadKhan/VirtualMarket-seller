import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/styles";
import { styled } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import transactionServices from "../../Services/TransactionServices";
import { NameBar } from "../../Styles/NameBar";
import { MarginBox } from "../../Styles/StyledBoxes";
import { toast } from "react-toastify";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const StyledButton = styled(Button)({});

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
  const [accountTitle, setaccountTitle] = useState("");
  const [bankTitle, setbankTitle] = useState("");
  const [accountNumber, setaccountNumber] = useState();
  const [amount, setamount] = useState();
  const [loading, setloading] = useState(false);

  const request = () => {
    setloading(true);
    transactionServices
      .withdrawRequest({
        accountNumber,
        accountTitle,
        bankTitle,
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
        <NameBar name={"Transaction Details"} />
        <DialogContent>
          <div className={classes.root}>
            <Box>
              <TextField
                label="Bank Title"
                fullWidth
                multiline
                value={bankTitle}
                onChange={(e) => {
                  setbankTitle(e.target.value);
                }}
              />
              <TextField
                label="Account Title"
                fullWidth
                multiline
                value={accountTitle}
                onChange={(e) => {
                  setaccountTitle(e.target.value);
                }}
              />
              <TextField
                label="Account Number"
                fullWidth
                multiline
                value={accountNumber}
                onChange={(e) => {
                  setaccountNumber(e.target.value);
                }}
              />
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
                <StyledButton variant="contained" onClick={request}>
                  Confirm
                </StyledButton>
              </MarginBox>
              <MarginBox>
                <StyledButton variant="contained" onClick={handleClose}>
                  Cancel
                </StyledButton>
              </MarginBox>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
