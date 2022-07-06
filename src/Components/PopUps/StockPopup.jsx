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
import productService from "../../Services/ProductServices";

import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
}));

export default function StockPopup({
  bool,
  setbool,
  getSellerProducts,
  productId,
}) {
  const classes = useStyles();
  const [stock, setstock] = React.useState();
  const handleClose = () => {
    setbool(false);
    setstock("");
  };

  return (
    <div>
      <Dialog open={bool} onClose={handleClose}>
        <NameBar name={"Enter Stock"} />
        <DialogContent>
          <div className={classes.root}>
            <Box>
              <TextField
                label="New Stock"
                type="number"
                value={stock}
                onChange={(e) => {
                  setstock(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <MarginBox>
                {" "}
                <Button
                  variant="contained"
                  onClick={() => {
                    productService
                      .updateStock(productId, { stock })
                      .then((data) => {
                        handleClose();
                        getSellerProducts();
                        toast.success(data.data, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      })
                      .catch((err) => {
                        toast.error(err.response.data, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      });
                  }}
                >
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
