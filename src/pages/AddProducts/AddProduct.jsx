import React, { useState } from "react";
import {
  Box,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  Card,
  CardContent,
  InputAdornment,
} from "@mui/material";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";
import { SingleFileUpload } from "../../Components/AddSingleFile/SingleFileUpload";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { MarginBox } from "../../Styles/StyledBoxes";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import { Inputs } from "../../Styles/StyledInputs";

export default function AddProduct(props) {
  const [progress, setprogress] = useState();
  const config = {
    onUploadProgress: (progressEvent) => {
      setprogress((progressEvent.loaded / progressEvent.total) * 100);
    },
  };
  const [name, setName] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState(false);
  const [stock, setStock] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState();
  const [minOrder, setMinOrder] = useState();
  const [price, setPrice] = useState();
  const [images, setImages] = useState([]);
  const [bool, setbool] = useState(false);

  let temp = images;
  const imageArray = (e, index) => {
    temp[index] = e;
    setImages(temp);
  };

  const handleChange = (event) => {
    setSampleOrder(event.target.value);
  };

  const getCategories = () => {
    productService
      .GetCategories()
      .then((data) => {
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

    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]);
    }

    productService
      .AddProduct(formData, config)
      .then((data) => {
        setbool(false);
        props.history.push("/products");
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        setbool(false);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "150px",
      },
    },
  };

  return (
    <IsLoggedin>
      <EmailVerification>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box mt={7} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
              <LoadingScreen bool={bool} progress={progress} />
              <Card>
                <CardContent>
                  <Typography
                    color="primary"
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Add Product
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "60%",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <MarginBox>
                            <TextField
                              label="Product Name"
                              variant="standard"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                          </MarginBox>
                          <MarginBox>
                            <Inputs
                              label="Product Price"
                              type="number"
                              variant="standard"
                              value={price}
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    PKR.
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </MarginBox>
                          <MarginBox>
                            {" "}
                            <Inputs
                              label="Min. Order Quantity"
                              type="number"
                              variant="standard"
                              helperText="Must be greater than 0"
                              value={minOrder}
                              onChange={(e) => {
                                setMinOrder(e.target.value);
                              }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    Pcs
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </MarginBox>
                          <MarginBox>
                            <InputLabel variant="standard">
                              Product category
                            </InputLabel>
                            <Select
                              sx={{ width: "100%", maxHeight: "50px" }}
                              variant="standard"
                              value={category}
                              MenuProps={{
                                PaperProps: {
                                  maxHeight: "150px",
                                },
                              }}
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
                          </MarginBox>

                          <MarginBox>
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
                          </MarginBox>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                          <MarginBox>
                            <TextField
                              label="Product Brand"
                              variant="standard"
                              placeholder="e.g. Samsung"
                              value={brand}
                              onChange={(e) => {
                                setBrand(e.target.value);
                              }}
                            />
                          </MarginBox>
                          <MarginBox>
                            <Inputs
                              type="number"
                              label="Stock"
                              variant="standard"
                              value={stock}
                              onChange={(e) => {
                                setStock(e.target.value);
                              }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    Pcs
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </MarginBox>
                          <MarginBox>
                            <Inputs
                              type="number"
                              label="Warranty Period"
                              variant="standard"
                              helperText="Minimum 1 Day Check Warranty"
                              value={warrantyPeriod}
                              onChange={(e) => {
                                setWarrantyPeriod(e.target.value);
                              }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    Days
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </MarginBox>
                        </Box>
                      </Box>
                      <MarginBox>
                        <Typography
                          color="primary"
                          sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          Add Product Description
                        </Typography>
                        <TextField
                          label="Product Description"
                          multiline
                          variant="standard"
                          value={description}
                          helperText="e.g. Color, Size, Dimensions etc"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                      </MarginBox>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        color="primary"
                        sx={{
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        Add Product Images
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "left ",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          marginLeft: "10%",
                        }}
                      >
                        <MarginBox sx={{ height: "150px", width: "150px" }}>
                          <Typography
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            Image 1:
                          </Typography>
                          <SingleFileUpload index={0} imageArray={imageArray} />
                        </MarginBox>

                        <MarginBox sx={{ height: "150px", width: "150px" }}>
                          <Typography
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            Image 2:
                          </Typography>
                          <SingleFileUpload index={1} imageArray={imageArray} />
                        </MarginBox>
                        <MarginBox sx={{ height: "150px", width: "150px" }}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: "15px",
                            }}
                          >
                            Image 3:
                          </Typography>
                          <SingleFileUpload index={2} imageArray={imageArray} />
                        </MarginBox>
                        <MarginBox sx={{ height: "150px", width: "150px" }}>
                          <Typography
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            Image 4:
                          </Typography>
                          <SingleFileUpload index={3} imageArray={imageArray} />
                        </MarginBox>
                        <MarginBox sx={{ height: "150px", width: "150px" }}>
                          <Typography
                            sx={{ fontWeight: "bold", fontSize: "15px" }}
                          >
                            Image 5:
                          </Typography>
                          <SingleFileUpload index={4} imageArray={imageArray} />
                        </MarginBox>
                      </Box>
                    </Box>
                  </Box>

                  <MarginBox>
                    <Button
                      variant="contained"
                      onClick={() => UploadMultipleFiles()}
                    >
                      Add Product
                    </Button>
                  </MarginBox>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
