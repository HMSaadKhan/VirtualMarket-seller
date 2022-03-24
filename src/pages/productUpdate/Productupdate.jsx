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
} from "@mui/material";
import { Publish } from "@material-ui/icons";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";

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
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const id = props.match.params.id;
  const temp = useRef();

  const getProduct = () => {
    productService.getSellerProduct(id).then((data) => {
      console.log(data.data);
      setName(data.data.name);
      setPrice(data.data.price);
      setBrand(data.data.brand);
      setCategory(data.data.category);
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

  // const getCategories = () => {
  //   productService
  //     .GetCategories()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // React.useEffect(getCategories, []);

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    //const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(multipleFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    console.log(selectedImages);
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
                  label="Product Category"
                  type="number"
                  variant="standard"
                  placeholder="e.g. Electronics"
                  value={price}
                  InputLabelProps={{ shrink: price ? true : false }}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="sellerUpdateItem">
                <TextField
                  label="Product Category"
                  variant="standard"
                  InputLabelProps={{ shrink: category ? true : false }}
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
                {selectedImages.map((image, index) => {
                  return (
                    <div key={image} className="image">
                      <img
                        src={image.link}
                        alt=""
                        className="sellerUpdateImg"
                      />
                    </div>
                  );
                })}

                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <form>
                  {" "}
                  <input
                    type="file"
                    id="file"
                    multiple
                    style={{ display: "none" }}
                    onChange={(e) => MultipleFileChange(e)}
                  />
                </form>
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
