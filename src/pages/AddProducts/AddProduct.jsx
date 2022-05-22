import React, { useState } from "react";
import { styled } from "@mui/material/styles";
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
  InputLabel,
  Card,
  CardContent,
} from "@mui/material";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";
import { SingleFileUpload } from "../../Components/AddSingleFile/SingleFileUpload";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { MarginBox } from "../../Styles/StyledBoxes";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

export default function AddProduct(props) {
  const [name, setName] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState("");
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

    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]);
    }

    productService
      .AddProduct(formData)
      .then((data) => {
        console.log(data);
        setbool(false);
        props.history.push("/products");
        toast.success(data.data, {
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
        <Box
          sx={{
            flex: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5%",
          }}
        >
          <LoadingScreen Loading={bool} />
          <Card sx={{ minWidth: 1000, maxWidth: 1000 }}>
            <CardContent>
              <h1>Add Product</h1>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "25%" }}>
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
                  </MarginBox>
                  <MarginBox>
                    {" "}
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
                      onChange={(e) => {
                        setStock(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Warranty Period"
                      variant="standard"
                      placeholder="e.g. 2 Years"
                      value={warrantyPeriod}
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
                      <SingleFileUpload index={0} imageArray={imageArray} />
                    </MarginBox>
                    <MarginBox>
                      <SingleFileUpload index={1} imageArray={imageArray} />
                    </MarginBox>
                    <MarginBox>
                      <SingleFileUpload index={2} imageArray={imageArray} />
                    </MarginBox>
                    <MarginBox>
                      <SingleFileUpload index={3} imageArray={imageArray} />
                    </MarginBox>
                    <MarginBox>
                      <SingleFileUpload index={4} imageArray={imageArray} />
                    </MarginBox>
                  </Box>
                </Box>
              </Box>

              <MarginBox>
                <StyledButton
                  variant="contained"
                  onClick={() => UploadMultipleFiles()}
                >
                  Add
                </StyledButton>
              </MarginBox>
            </CardContent>
          </Card>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
