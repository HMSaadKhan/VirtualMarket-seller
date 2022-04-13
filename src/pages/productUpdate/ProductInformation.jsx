import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Card, CardContent } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import productService from "../../Services/ProductServices";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  images: {
    width: "70px",
    height: "100px",
    marginRight: "10px",
    //objectFit: "cover",
    backgroundSize: "cover",
  },
}));

export default function ProductInformation(props) {
  const history = useHistory();
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
    <Card sx={{ height: "100%", marginLeft: "15%", marginTop: "30px" }}>
      <Button
        sx={{
          color: "#FF0000",
          backgroundColor: "#fff",
          marginLeft: "10px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FF0002",
            color: "#ffff",
          },
        }}
        onClick={() => {
          history.push("/editDetails/" + _id);
        }}
      >
        Edit
      </Button>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box m={3}>
          <Box>
            <Typography
              m={1}
              sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
            >
              Name
            </Typography>
            <Typography m={1} sx={{ fontSize: "15px" }}>
              {name}
            </Typography>
            <Typography
              m={1}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              PKR. {price}
            </Typography>
          </Box>

          <Box>
            <Typography
              m={1}
              sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
            >
              Brand
            </Typography>
            <Typography m={1} sx={{ color: "secondary" }}>
              {brand}
            </Typography>
            <Typography
              m={1}
              sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
            >
              Mininum Order Quantity
            </Typography>
            <Typography m={1} sx={{ color: "secondary" }}>
              {minOrder}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  m={1}
                  sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
                >
                  Category
                </Typography>
                <Typography m={1} sx={{ color: "secondary" }}>
                  {category}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  m={1}
                  sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
                >
                  Sample Order
                </Typography>
                <Typography m={1} sx={{ color: "secondary" }}>
                  {sampleOrder ? <>Yes</> : <>No</>}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                m={1}
                sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
              >
                Warranty Period
              </Typography>
              <Typography m={1} sx={{ color: "secondary" }}>
                {warrantyPeriod}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                m={1}
                sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
              >
                Available Stock
              </Typography>
              <Typography m={1} sx={{ color: "secondary" }}>
                {stock} pieces
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height: "150px", width: "auto" }}>
            <Typography
              m={1}
              sx={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
            >
              Description
            </Typography>
            <Typography m={1}>{description}</Typography>
          </Box>
        </Box>
        <Box m={2}>
          <Box
            mt={5}
            sx={{ display: "flex", flexDirection: "row", flexwrap: "wrap" }}
          >
            {selectedImages.map((item) => {
              return (
                <Box mr={2}>
                  <img
                    width="80px"
                    height="100px"
                    background-size="cover"
                    src={item.link}
                    alt={item.title}
                    loading="lazy"
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
