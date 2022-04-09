import React, { useState, useEffect, useRef } from "react";

import { TextField, Box, Card, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import productService from "../../Services/ProductServices";
import { DisplayImage } from "../../Components/AddSingleFile/DisplayImage";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "grey",
    PaddingRight: "10px",
  },
  heading: { fontWeight: "bold", fontSize: "20px", color: "red" },
  content: { fontSize: "20px", fontWeight: "bold", color: "red" },
}));

export default function Productupdate(props) {
  const classes = useStyles();

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
      setCategory(data.data.category.name);
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

  return (
    <Box>
      <Box m={4} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card sx={{ width: "100%", backgroundColor: "grey" }}>
          <Typography
            ml={10}
            mt={2}
            sx={{ fontWeight: "bold", fontSize: "20px", color: "red" }}
          >
            Product Informaton
          </Typography>
          <Box ml={2} sx={{ display: "flex" }}>
            <Box m={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Product Name
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>{name}</Typography>
            </Box>
            <Box ml={12} mt={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Product Brand
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>{brand}</Typography>
            </Box>
          </Box>
          <Box ml={2} sx={{ display: "flex" }}>
            <Box m={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Product Price
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>PKR. {price}</Typography>
            </Box>
            <Box ml={12} mt={2} mr={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Product Category
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>{category}</Typography>
            </Box>
          </Box>
          <Box ml={2} sx={{ display: "flex" }}>
            <Box m={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Mininum Order Quantity
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                {minOrder} Product{" "}
              </Typography>
            </Box>
            <Box m={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Sample Order
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                {sampleOrder ? (
                  <Typography>Yes</Typography>
                ) : (
                  <Typography>No</Typography>
                )}
              </Typography>
            </Box>
          </Box>
          <Box ml={2} sx={{ display: "flex" }}>
            <Box m={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Product Warranty
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                {warrantyPeriod}
              </Typography>
            </Box>
            <Box ml={8} mt={2}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
              >
                Product Stock
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>{stock}</Typography>
            </Box>
          </Box>
          <Box ml={4}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "16px", color: "red" }}
            >
              Product Description
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>{description}</Typography>
          </Box>
        </Card>

        {selectedImages.length > 0 ? (
          <>
            {selectedImages.map((image) => {
              return (
                <Box ml={5} mt={5} mr={4}>
                  <img
                    height="100"
                    width="100"
                    border="1"
                    key={image._id}
                    src={image.link}
                  />
                </Box>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
