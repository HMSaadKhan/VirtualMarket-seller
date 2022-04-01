import React, { useState, useEffect, useRef } from "react";
import "./productupdate.css";
import {
  TextField,
  Box,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";
import { DisplayImage } from "../../Components/AddSingleFile/DisplayImage";

export default function Productupdate(props) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState("");
  const [stock, setStock] = useState();
  const [warrantyPeriod, setWarrantyPeriod] = useState();
  const [minOrder, setMinOrder] = useState();
  const [price, setPrice] = useState();
  const [selectedImages, setSelectedImages] = useState([]);
  const [categories, setCategories] = useState([]);

  const _id = props.match.params.id;
  const temp = useRef();

  const getProduct = async () => {
    await productService.getSellerProduct(_id).then((data) => {
      console.log(data.data);
      setName(data.data.name);
      setPrice(data.data.price);
      setBrand(data.data.brand);
      setCategory(data.data.category._id);
      setDescription(data.data.description);
      setSampleOrder(data.data.sampleOrder);
      setStock(data.data.stock);
      setWarrantyPeriod(data.data.warrantyPeriod);
      setMinOrder(data.data.minOrder);
      setSelectedImages(data.data.images);
    });
  };
  temp.current = getProduct;
  useEffect(() => {
    temp.current();
  }, []);
  const handleChange = (event) => {
    setSampleOrder(event.target.value);
    console.log(sampleOrder);
  };
  const onDelete = (cloudinaryID) => {
    console.log(cloudinaryID);
    productService
      .deleteProductImage(_id, { cloudinaryID })
      .then((data) => {
        console.log(data);
        console.log("image delete funntion call");
        getProduct();
      })
      .catch((error) => {
        console.log(error);
      });
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

  const uploadImage = (data) => {
    console.log(_id, data);
    const formData = new FormData();
    formData.append("image", data);
    productService
      .UpdateProductImage(_id, formData)
      .then((data) => {
        console.log(data);
        console.log("image update funntion call");
        getProduct();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const UpdateInfo = () => {
    productService
      .editDetails({
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
  };

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
                    label="Product Name"
                    variant="standard"
                    placeholder="e.g. S21 Ultra"
                    value={name}
                    InputLabelProps={{ shrink: name ? true : false }}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    label="Product Brand"
                    variant="standard"
                    placeholder="e.g. Samsung"
                    value={brand}
                    InputLabelProps={{ shrink: brand ? true : false }}
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
                  value={price}
                  InputLabelProps={{ shrink: price ? true : false }}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="sellerUpdateItem">
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel variant="standard">Product category</InputLabel>
                  {console.log(category)}
                  <Select
                    variant="standard"
                    value={category}
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
                </FormControl>
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Min Order Quantity"
                  type="number"
                  variant="standard"
                  placeholder="e.g. 10"
                  value={minOrder}
                  InputLabelProps={{ shrink: minOrder ? true : false }}
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
                  InputLabelProps={{ shrink: warrantyPeriod ? true : false }}
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
                  InputLabelProps={{ shrink: description ? true : false }}
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
                  InputLabelProps={{ shrink: stock ? true : false }}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                {selectedImages.length > 0 ? (
                  <>
                    <div className="image">
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={0}
                        deleteImage={onDelete}
                      />
                    </div>
                    <div className="image">
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={1}
                        deleteImage={onDelete}
                      />
                    </div>
                    <div className="image">
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={2}
                        deleteImage={onDelete}
                      />
                    </div>
                    <div className="image">
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={3}
                        deleteImage={onDelete}
                      />
                    </div>
                    <div className="image">
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={4}
                        deleteImage={onDelete}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <Button
                  className="sellerUpdateButton"
                  variant="contained"
                  onClick={() => UpdateInfo()}
                >
                  Update Information
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
