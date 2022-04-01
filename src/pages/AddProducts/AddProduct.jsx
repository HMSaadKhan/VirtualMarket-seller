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
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";
import { SingleFileUpload } from "../../Components/AddSingleFile/SingleFileUpload";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

export default function AddProduct() {
  const [name, setName] = useState("name");
  const [brand, setBrand] = useState("brand");
  const [category, setCategory] = useState("1");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("this is good product");
  const [sampleOrder, setSampleOrder] = useState("");
  const [stock, setStock] = useState(100);
  const [warrantyPeriod, setWarrantyPeriod] = useState(2);
  const [minOrder, setMinOrder] = useState(1);
  const [price, setPrice] = useState(100);
  const [images, setImages] = useState([]);
  const [bool, setbool] = useState(false);

  let temp = images;
  const imageArray = (e, index) => {
    temp[index] = e;
    setImages(temp);
  };

  const handleChange = (event) => {
    setSampleOrder(event.target.value);
    console.log(sampleOrder);
  };

  const getCategories = () => {
    productService
      .GetCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getCategories, []);
  const selectChange = (e) => {
    setCategory(e.target.value);
  };

  const UploadMultipleFiles = async () => {
    setbool(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("minOrder", minOrder);
    formData.append("warrantyPeriod", warrantyPeriod);
    formData.append("stock", stock);
    formData.append("sampleOrder", sampleOrder);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    console.log(images);
    formData.append("image", images[0]);
    formData.append("image", images[1]);
    formData.append("image", images[2]);
    formData.append("image", images[3]);
    formData.append("image", images[4]);

    // for (let i = 0; i < images.length; i++) {
    //   formData.append("image", images[i]);
    // }

    productService
      .AddProduct(formData)
      .then((data) => {
        console.log(data);
        setbool(false);
        window.location.reload();
        toast.success("Changes Saved Successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        console.log(err);
        setbool(false);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <div className="seller">
      <div className="sellerTitleContainer">
        <h1 className="sellerTitle">Add Product</h1>
        <LoadingScreen Loading={bool} />
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
                  label="Product Price"
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
                <InputLabel variant="standard">Product category</InputLabel>
                <Select
                  variant="standard"
                  onChange={(e) => {
                    selectChange(e);
                  }}
                >
                  {categories.map((item) => (
                    <MenuItem key={item} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
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
                <div className="image">
                  <SingleFileUpload index={0} imageArray={imageArray} />
                </div>
                <div className="image">
                  <SingleFileUpload index={1} imageArray={imageArray} />
                </div>
                <div className="image">
                  <SingleFileUpload index={2} imageArray={imageArray} />
                </div>
                <div className="image">
                  <SingleFileUpload index={3} imageArray={imageArray} />
                </div>
                <div className="image">
                  <SingleFileUpload index={4} imageArray={imageArray} />
                </div>
              </div>
              <div>
                <Button
                  className="sellerAddButton"
                  variant="contained"
                  onClick={() => UploadMultipleFiles()}
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
