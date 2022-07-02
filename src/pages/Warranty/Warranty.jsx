import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import warrantyServices from "../../Services/WarrantyServices";
// import WarrantyComponent from "./WarrantyComponent";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import { MidPager } from "../../Styles/MidPager";
import WarrantyMenu from "./WarrantyMenu";
import WarrantyList from "./WarrantyList";

export default function Warranty(props) {
  const [WarrantyDetails, setWarrantyDetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const status = props.match.params.status;
  const getwarranties = () => {
    setloading(true);
    warrantyServices
      .getWarranty(status)
      .then((data) => {
        console.log(data.data);
        setWarrantyDetails(data.data);
        setloading(false);
        seterror("");
      })
      .catch((data) => {
        setloading(false);

        seterror(data.response.data);
        console.log(data.response);
      });
  };
  useEffect(getwarranties, [status]);

  return (
    <EmailVerification>
      <LoadingScreen bool={loading} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box>
            <WarrantyMenu />
          </Box>
          <Box>
            {/* {error.length > 0 ? (
              <Box sx={{ width: "100%" }}>
                <MidPager name={error} />
              </Box>
            ) : (
              <> */}
            <WarrantyList warrantyDetails={WarrantyDetails} error={error} />
            {/* </>
            )} */}
          </Box>
        </Box>
      </Box>
    </EmailVerification>
  );
}
