import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import warrantyServices from "../../Services/WarrantyServices";
import WarrantyComponent from "./WarrantyComponent";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";

export default function WarrantyList(props) {
  const [WarrantyDetails, setWarrantyDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const warranties = () => {
    setloading(true);
    warrantyServices.getWarranty().then((data) => {
      console.log(data);
      setWarrantyDetails(data.data);
      setloading(false);
    });
    // .catch((data) => {
    //   setloading(false);

    //   seterror(data.response.data);
    //   console.log(data.response);
    // });
  };
  useEffect(warranties, []);

  return (
    <EmailVerification>
      <Box
        sx={{
          flex: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5%",
        }}
      >
        <LoadingScreen bool={loading} />
        <Box>
          {WarrantyDetails.length > 0 ? (
            <>
              {WarrantyDetails.map((warranty) => (
                <WarrantyComponent
                  warranty={warranty}
                  key={warranty._id}
                  warranties={warranties}
                />
              ))}
            </>
          ) : (
            <Typography sx={{ marginTop: "200px" }}>
              {WarrantyDetails.length == 0 ? <>No Claimed Yet</> : <></>}
            </Typography>
          )}
        </Box>
      </Box>
    </EmailVerification>
  );
}
