import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import productService from "../../Services/ProductServices";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import ProductCard from "./ProductCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
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
        <LoadingScreen bool={loading} />
        <Box>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <ProductCard
                products={sellerProducts}
                handleDelete={handleDelete}
              />
            </Box>
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default SellerProducts;
