import * as React from "react";
import "./addproduct.css";
import TextField from "@mui/material/TextField";
import { Publish } from "@material-ui/icons";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AddProduct() {
  return (
    <div className="seller">
      <div className="sellerTitleContainer">
        <h1 className="sellerTitle">Add Product</h1>
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
                    placeholder="e.g. S21 Ultra"
                    defaultValue=""
                  />
                  <TextField
                    id="standard-basic"
                    label="Product Brand"
                    variant="standard"
                    placeholder="e.g. Samsung"
                    defaultValue=""
                  />
                </Box>
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Product Category"
                  variant="standard"
                  placeholder="e.g. Electronics"
                  defaultValue=""
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Quantity"
                  type="number"
                  variant="standard"
                  placeholder="e.g. 10"
                  defaultValue=""
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
                  placeholder="e.g. 2 Years"
                  defaultValue=""
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Product Description"
                  variant="standard"
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                <img
                  src="https://www.orissapost.com/wp-content/uploads/2019/05/AIR-CONDITIONERS-1024x860.jpg"
                  alt=""
                  className="sellerUpdateImg"
                />

                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  style={{ display: "none" }}
                />
              </div>
              <div>
                <Button className="sellerUpdateButton" variant="contained">
                  Add
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
