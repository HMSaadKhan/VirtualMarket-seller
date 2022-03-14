import React, { useState, useEffect } from "react";
import "./addproduct.css";
import {
  TextField,
  Box,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Publish } from "@material-ui/icons";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState("true");
  const [stock, setStock] = useState();
  const [warrantyPeriod, setWarrantyPeriod] = useState();
  const [minOrder, setMinOrder] = useState();
  const [price, setPrice] = useState(0);
  const handleChange = (event) => {
    setSampleOrder(event.target.value);
    console.log(sampleOrder);
  };

  const getCategories = () => {
    productService
      .GetCategories()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getCategories, []);

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
                    label="Product Name"
                    variant="standard"
                    placeholder="e.g. S21 Ultra"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    label="Product Brand"
                    variant="standard"
                    placeholder="e.g. Samsung"
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  />
                </Box>
              </div>
              <div className="sellerUpdateItem">
                <TextField
                  label="Product Category"
                  type="number"
                  variant="standard"
                  placeholder="e.g. Electronics"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="sellerUpdateItem">
                <TextField
                  label="Product Category"
                  variant="standard"
                  placeholder="e.g. Electronics"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Quantity"
                  type="number"
                  variant="standard"
                  placeholder="e.g. 10"
                  value={minOrder}
                  onChange={(e) => {
                    setMinOrder(e.target.value);
                  }}
                />
              </div>
              <br></br>

              <FormControl>
                <FormLabel>Sample</FormLabel>
                <RadioGroup
                  defaultValue="included"
                  value={sampleOrder}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Included"
                  />

                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Not Included"
                  />
                </RadioGroup>
              </FormControl>

              <div className="sellerUpdateItem">
                <TextField
                  label="Warranty Period"
                  variant="standard"
                  placeholder="e.g. 2 Years"
                  value={warrantyPeriod}
                  onChange={(e) => {
                    setWarrantyPeriod(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Product Description"
                  variant="standard"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="sellerUpdateItem">
                <TextField
                  label="Stock"
                  variant="standard"
                  value={stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                <img src="" alt="" className="sellerUpdateImg" />

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
                <Button
                  className="sellerUpdateButton"
                  variant="contained"
                  onClick={(e) => {
                    productService
                      .AddProduct({
                        name,
                        brand,
                        category,
                        minOrder,
                        warrantyPeriod,
                        stock,
                        sampleOrder,
                        price,
                        description,
                      })
                      .then((data) => {
                        console.log(data);
                        window.location.reload();
                        toast.success("Changes Saved Successfully", {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      })
                      .catch((err) => {
                        console.log(err);
                        toast.error(err.response.data, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      });
                  }}
                >
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
