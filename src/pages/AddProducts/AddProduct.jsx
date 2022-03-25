import React, { useState, useEffect } from "react";
import "./addproduct.css";
import {
  TextField,
  Box,
  Radio,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Publish } from "@material-ui/icons";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";
import { RssFeedTwoTone } from "@mui/icons-material";
import { Label } from "recharts";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState("");
  const [stock, setStock] = useState();
  const [warrantyPeriod, setWarrantyPeriod] = useState();
  const [minOrder, setMinOrder] = useState();
  const [price, setPrice] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

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
  // const MultipleFileChange = (e) => {
  //   setMultipleFiles(e.target.files);
  //   //const selectedFiles = event.target.files;
  //   const selectedFilesArray = Array.from(multipleFiles);
  //   const imagesArray = selectedFilesArray.map((file) => {
  //     return URL.createObjectURL(file);
  //   });
  //   setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  //   console.log(selectedImages);
  // };
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const UploadMultipleFiles = async () => {
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

    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("image", multipleFiles[i]);
    }

    productService
      .AddProduct(formData)
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
  };

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
                {selectedImages.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} alt="" className="sellerUpdateImg" />
                    </div>
                  );
                })}

                <label htmlFor="file">
                  <Typography>Select 5 Images</Typography>
                </label>
                <form>
                  {" "}
                  <input
                    type="file"
                    id="file"
                    multiple
                    onChange={(e) => MultipleFileChange(e)}
                  />
                </form>
              </div>
              <div>
                <Button
                  className="sellerUpdateButton"
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
