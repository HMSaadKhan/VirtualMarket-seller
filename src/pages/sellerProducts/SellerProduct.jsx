import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import productService from "../../Services/ProductServices";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import ProductCard from "./ProductCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

const SellerProducts = () => {
  const [loading, setloading] = useState(false);
  const [sellerProducts, setSellerProducts] = useState([]);

  const getSellerProducts = () => {
    setloading(true);
    productService
      .GetAllBySeller()
      .then((data) => {
        console.log(data);
        setloading(false);
        setSellerProducts(data);
        console.log(sellerProducts);
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
            flex: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1%",
          }}
        >
          <LoadingScreen bool={loading} />

          <ProductCard products={sellerProducts} handleDelete={handleDelete} />

          <Box></Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default SellerProducts;
