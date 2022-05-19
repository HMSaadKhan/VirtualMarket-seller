import * as React from "react";
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
import warrantyServices from "../../Services/WarrantyServices";

const StyledButton = styled(Button)({});

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
}));

export default function WarrantyComment({
  _id,
  bool,
  setbool,
  status,
  warranties,
}) {
  const classes = useStyles();
  console.log(status);
  const handleClose = () => {
    setbool(false);
  };
  const [comment, setcomment] = React.useState("");

  const respond = () => {
    warrantyServices
      .giveResponse(_id, { comment, status })
      .then((data) => {
        console.log(data.data);
        handleClose();
        warranties();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <Dialog open={bool} onClose={handleClose}>
        <Box
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle id="responsive-dialog-title"></DialogTitle>
          <Box>
            <CancelIcon
              onClick={(e) => {
                setbool(false);
              }}
            >
              Close
            </CancelIcon>
          </Box>
        </Box>

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
              <StyledButton onClick={respond}>keep</StyledButton>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
