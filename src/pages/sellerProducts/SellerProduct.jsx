import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import productService from "../../Services/ProductServices";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import ProductCard from "./ProductCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import { Container } from "../../Styles/StyledBoxes";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const SellerProducts = (props) => {
  const [loading, setloading] = useState(false);
  const [sellerProducts, setSellerProducts] = useState([]);

  const getSellerProducts = () => {
    setloading(true);
    productService
      .GetAllBySeller()
      .then((data) => {
        setloading(false);
        setSellerProducts(data);
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
      });
  };
  useEffect(getSellerProducts, []);

  const handleDelete = async (_id) => {
    await productService.deleteProduct(_id);
    getSellerProducts();
  };
  return (
    <IsLoggedin>
      <EmailVerification>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "5%",
            paddingBottom: "5%",
            paddingLeft: "200px",
          }}
        >
          <Fab
            color="primary"
            aria-label="add"
            sx={{ position: "fixed", bottom: 16, right: "1%" }}
            onClick={(e) => {
              props.history.push("/addProduct");
            }}
          >
            <AddIcon />
          </Fab>
          <LoadingScreen bool={loading} />

          <ProductCard products={sellerProducts} handleDelete={handleDelete} />
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default SellerProducts;
