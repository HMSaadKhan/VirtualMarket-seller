import React, { useState, useEffect } from "react";
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

export default function AddProduct(props) {
  const [name, setName] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState("");
  const [stock, setStock] = useState();
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
    console.log(images);
    // formData.append("image", images[0]);
    // formData.append("image", images[1]);
    // formData.append("image", images[2]);
    // formData.append("image", images[3]);
    // formData.append("image", images[4]);

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
  const StyledBox = styled(Box)({
    margin: "10px",
  });
  const LeftBox = styled(Box)({});
  const CenterBox = styled(Box)({});
  const RightBox = styled(Box)({});
  const Container = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "10%",
    paddingLeft: "10%",
  });
  const InnerContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
  });
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
    <Container>
      <Card>
        <CardContent>
          <h1>Add Product</h1>
          <InnerContainer>
            <LeftBox>
              <StyledBox>
                <TextField
                  required
                  fullWidth
                  id="filled-required"
                  label="Email"
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <TextField
                  label="Product Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </StyledBox>
              <StyledBox>
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
              </StyledBox>
              <StyledBox>
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
              </StyledBox>
              <StyledBox>
                <InputLabel variant="standard">Product category</InputLabel>
                <Select
                  fullWidth
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
              </StyledBox>
              <StyledBox>
                <TextField
                  label="Product Description"
                  variant="standard"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </StyledBox>
              <StyledBox>
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
              </StyledBox>
            </LeftBox>
            <CenterBox>
              <StyledBox>
                <TextField
                  label="Product Brand"
                  variant="standard"
                  placeholder="e.g. Samsung"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </StyledBox>
              <StyledBox>
                <TextField
                  label="Stock"
                  variant="standard"
                  value={stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </StyledBox>
              <StyledBox>
                <TextField
                  label="Warranty Period"
                  variant="standard"
                  placeholder="e.g. 2 Years"
                  value={warrantyPeriod}
                  onChange={(e) => {
                    setWarrantyPeriod(e.target.value);
                  }}
                />
              </StyledBox>
              <StyledBox></StyledBox>
              <StyledBox></StyledBox>
            </CenterBox>
            <RightBox>
              <InnerContainer m={5} sx={{ flexWrap: "wrap", maxWidth: "80%" }}>
                <StyledBox>
                  <SingleFileUpload index={0} imageArray={imageArray} />
                </StyledBox>
                <StyledBox>
                  <SingleFileUpload index={1} imageArray={imageArray} />
                </StyledBox>
                <StyledBox>
                  <SingleFileUpload index={2} imageArray={imageArray} />
                </StyledBox>
                <StyledBox>
                  <SingleFileUpload index={3} imageArray={imageArray} />
                </StyledBox>
                <StyledBox>
                  <SingleFileUpload index={4} imageArray={imageArray} />
                </StyledBox>
              </InnerContainer>
            </RightBox>
          </InnerContainer>

          <StyledBox>
            <StyledButton
              variant="contained"
              onClick={() => UploadMultipleFiles()}
            >
              Add
            </StyledButton>
            <LoadingScreen Loading={bool} />
          </StyledBox>
        </CardContent>
      </Card>
      <div className="seller">
        <div className="sellerTitleContainer"></div>
      </div>
    </Container>
  );
}
