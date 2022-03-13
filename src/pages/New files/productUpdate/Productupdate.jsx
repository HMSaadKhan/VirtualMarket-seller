import { Publish, Shop2standard } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";
import "./productupdate.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Productupdate() {
  return (
    <div className="seller">
      <div className="sellerTitleContainer">
        <h1 className="sellerTitle">Update Product</h1>
      </div>

      <div className="sellerContainer">
        <div className="sellerUpdate">
          <form className="sellerUpdateForm">
            <div className="sellerUpdateLeft">
              <div className="sellerUpdateName">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Product Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Product Brand"
                    variant="standard"
                  />
                </Box>
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Product Category"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Quantity"
                  type="number"
                  variant="standard"
                />
              </div>

              <br></br>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Sample
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="included"
                    control={<Radio />}
                    label="Included"
                  />

                  <FormControlLabel
                    value="not included"
                    control={<Radio />}
                    label="Not Included"
                  />
                </RadioGroup>
              </FormControl>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Warranty Period"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Product Description"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Payment Details"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Delivery Charges"
                  variant="standard"
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="sellerUpdateImg"
                />

                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div>
                <Button className="sellerUpdateButton" variant="contained">
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
