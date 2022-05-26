import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import productService from "../../Services/ProductServices";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import TransactionCard from "./AmountCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import transactionServices from "../../Services/TransactionServices";
import { Container } from "../../Styles/StyledBoxes";
import TransactionRequest from "../../Components/PopUps/TransactionRequest";

const SellerAmount = () => {
  const [loading, setloading] = useState(false);
  const [requestPopup, setrequestPopup] = useState(false);
  const [transactions, settransactions] = useState([]);

  const getSellerAmount = () => {
    setloading(true);
    transactionServices
      .getCash()
      .then((data) => {
        console.log(data);
        settransactions(data.data);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        console.log(error);
      });
  };
  useEffect(getSellerAmount, []);

  return (
    <IsLoggedin>
      <EmailVerification>
        <TransactionRequest
          bool={requestPopup}
          setbool={setrequestPopup}
          gettransaction={getSellerAmount}
        />
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          onClick={(e) => {
            setrequestPopup(true);
          }}
        >
          <AddIcon />
        </Fab>
        <Container>
          <LoadingScreen bool={loading} />

          <TransactionCard transactions={transactions} />

          <Box></Box>
        </Container>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default SellerAmount;
