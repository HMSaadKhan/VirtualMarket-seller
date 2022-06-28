import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material/";
import warrantyService from "../../Services/WarrantyServices";
import WarrantyComponent from "./WarrantyComponent";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

export default function WarrantyDetails(props) {
  const id = props.match.params.id;
  console.log(id);

  const [warrantyDetails, setwarrantyDetails] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const Getwarranty = () => {
    console.log("fun");
    setloading(true);
    warrantyService
      .GetWarrantyDetails(id)
      .then((data) => {
        setloading(false);
        console.log(data.data);
        setwarrantyDetails(data.data);
        seterror("");
      })
      .catch((data) => {
        setloading(false);
        seterror(data.response.data);
      });
  };
  useEffect(Getwarranty, [id]);

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            aligItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {!error.length > 0 ? (
              <>
                {warrantyDetails ? (
                  <>
                    <WarrantyComponent warranty={warrantyDetails} />
                  </>
                ) : (
                  <Box m={2}>
                    <Typography
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {error}
                    </Typography>
                  </Box>
                )}
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
