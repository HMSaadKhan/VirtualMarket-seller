import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import TransactionCard from "./AmountCard";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import transactionServices from "../../Services/TransactionServices";

import TransactionRequest from "../../Components/PopUps/TransactionRequest";
import sellerService from "../../Services/SellerServices";

const SellerAmount = () => {
  const [Balance, setBalance] = useState(0);
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
  useEffect(() => {
    setloading(true);
    sellerService.GetBalance().then((data) => {
      console.log(data.data.balance);
      setBalance(data.data.balance);
      setloading(false);
    });
  }, []);

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TransactionCard transactions={transactions} Balance={Balance} />
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
};
export default SellerAmount;
