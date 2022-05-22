import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import productService from "../../Services/ProductServices";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import TransactionCard from "./TransactionCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import transactionServices from "../../Services/TransactionServices";

const Transactions = () => {
  const [loading, setloading] = useState(false);
  const [sellerProducts, setSellerProducts] = useState([]);

  // const geSellerTransaction = () => {
  //   setloading(true);
  //   transactionServices
  //     .getTransactions()
  //     .then((data) => {
  //       console.log(data);
  //       setloading(false);
  //     })
  //     .catch((error) => {
  //       setloading(false);
  //       console.log(error);
  //     });
  // };
  // useEffect(geSellerTransaction, []);

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
          {/* 
          <ProductCard products={sellerProducts} /> */}

          <Box></Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default Transactions;
