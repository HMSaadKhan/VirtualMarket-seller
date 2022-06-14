import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import productService from "../../Services/ProductServices";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import ProductCard from "./ProductCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

const SellerProducts = (props) => {
  const [loading, setloading] = useState(false);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [totalpages, settotalpages] = useState();
  const page = props.match.params.page ? props.match.params.page : 1;

  const getSellerProducts = () => {
    setloading(true);
    productService
      .GetAllBySeller(page)
      .then((data) => {
        console.log(data);
        setloading(false);
        setSellerProducts(data.products);
        settotalpages(data.pages);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  };
  useEffect(getSellerProducts, [page]);

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography align="center">Page: {page}</Typography>
            <Pagination
              size="large"
              count={totalpages}
              page={page}
              onChange={(e, value) => {
                props.history.push("/products/" + value);
              }}
            />
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default SellerProducts;
