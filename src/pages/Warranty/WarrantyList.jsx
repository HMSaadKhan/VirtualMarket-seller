import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import warrantyServices from "../../Services/WarrantyServices";
import WarrantyComponent from "./WarrantyComponent";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import { Container } from "../../Styles/StyledBoxes";
import { NameBar } from "../../Styles/NameBar";
import WarrantyMenu from "./WarrantyMenu";

export default function WarrantyList(props) {
  const [WarrantyDetails, setWarrantyDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const getwarranties = () => {
    setloading(true);
    warrantyServices
      .getWarranty()
      .then((data) => {
        console.log(data);
        setWarrantyDetails(data.data);
        setloading(false);
      })
      .catch((data) => {
        setloading(false);

        seterror(data.response.data);
        console.log(data.response);
      });
  };
  useEffect(getwarranties, []);

  return (
    <EmailVerification>
      <LoadingScreen bool={loading} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
          paddingLeft: "200px",
        }}
      >
        <Box>
          <WarrantyComponent
            WarrantyDetails={WarrantyDetails}
            warranties={getwarranties}
          />
        </Box>
      </Box>
    </EmailVerification>
  );
}
