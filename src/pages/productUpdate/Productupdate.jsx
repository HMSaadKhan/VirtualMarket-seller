import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";

import {
  TextField,
  Box,
  Radio,
  Card,
  CardContent,
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
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Container, MarginBox } from "../../Styles/StyledBoxes";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import EmailVerification from "../../AuthWrapper/EmailVerification";

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
  const [loading, setloading] = useState(false);
  const _id = props.match.params.id;
  const temp = useRef();

  const getProduct = async () => {
    setloading(true);
    await productService.getSellerProduct(_id).then((data) => {
      setloading(false);
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
    setloading(true);

    console.log(cloudinaryID);
    productService
      .deleteProductImage(_id, { cloudinaryID })
      .then((data) => {
        setloading(false);
        getProduct();
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
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
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  React.useEffect(getCategories, []);

  const selectChange = (e) => {
    setCategory(e.target.value);
  };

  const uploadImage = (data) => {
    setloading(true);

    const formData = new FormData();
    formData.append("image", data);
    productService
      .UpdateProductImage(_id, formData)
      .then((data) => {
        setloading(false);
        getProduct();
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        toast.error(error.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  const UpdateInfo = () => {
    setloading(true);
    productService
      .editDetails(_id, {
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
        setloading(false);

        getProduct();
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        setloading(false);

        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  const StyledButton = styled(Button)({
    color: "#FF0000",
    backgroundColor: "#fff",
    marginLeft: "10px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#FF0002",
      color: "#ffff",
    },
  });

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
        <Container>
          <Card sx={{ minWidth: 1000, maxWidth: 1000 }}>
            <CardContent>
              <h1>Update Product</h1>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "25%" }}>
                  <MarginBox>
                    <TextField
                      label="Product Name"
                      variant="standard"
                      value={name}
                      InputLabelProps={{ shrink: name ? true : false }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Product Price"
                      type="number"
                      variant="standard"
                      placeholder="e.g. Electronics"
                      InputLabelProps={{ shrink: brand ? true : false }}
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    {" "}
                    <TextField
                      label="Min. Order Quantity"
                      type="number"
                      variant="standard"
                      placeholder="e.g. 10"
                      value={minOrder}
                      InputLabelProps={{ shrink: minOrder ? true : false }}
                      onChange={(e) => {
                        setMinOrder(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <InputLabel variant="standard">Product category</InputLabel>
                    <Select
                      fullWidth
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
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Product Description"
                      multiline
                      variant="standard"
                      value={description}
                      InputLabelProps={{ shrink: description ? true : false }}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
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
                <Box sx={{ width: "25%" }}>
                  <MarginBox>
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
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      type="number"
                      label="Stock"
                      variant="standard"
                      value={stock}
                      InputLabelProps={{ shrink: stock ? true : false }}
                      onChange={(e) => {
                        setStock(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      type="number"
                      label="Warranty Period"
                      variant="standard"
                      placeholder="e.g. 2 Years"
                      value={warrantyPeriod}
                      InputLabelProps={{
                        shrink: warrantyPeriod ? true : false,
                      }}
                      onChange={(e) => {
                        setWarrantyPeriod(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox></MarginBox>
                  <MarginBox></MarginBox>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Box
                    m={5}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                      maxWidth: "80%",
                    }}
                  >
                    <MarginBox>
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={0}
                        deleteImage={onDelete}
                      />
                    </MarginBox>
                    <MarginBox>
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={1}
                        deleteImage={onDelete}
                      />
                    </MarginBox>
                    <MarginBox>
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={2}
                        deleteImage={onDelete}
                      />
                    </MarginBox>
                    <MarginBox>
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={3}
                        deleteImage={onDelete}
                      />
                    </MarginBox>
                    <MarginBox>
                      <DisplayImage
                        link={selectedImages}
                        uploadImage={uploadImage}
                        index={4}
                        deleteImage={onDelete}
                      />
                    </MarginBox>
                  </Box>
                </Box>
              </Box>

              <MarginBox>
                <StyledButton variant="contained" onClick={() => UpdateInfo()}>
                  Update
                </StyledButton>
              </MarginBox>
            </CardContent>
          </Card>
        </Container>
      </EmailVerification>
    </IsLoggedin>
  );
}
