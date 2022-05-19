import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import warrantyServices from "../../Services/WarrantyServices";
import WarrantyComponent from "./WarrantyComponent";

export default function WarrantyList(props) {
  const [WarrantyDetails, setWarrantyDetails] = useState([]);

  const warranties = () => {
    warrantyServices
      .getWarranty()
      .then((data) => {
        console.log(data.data);
        setWarrantyDetails(data.data);
      })
      .catch((data) => {
        console.log(data.response);
      });
  };
  React.useEffect(warranties, []);

  return (
    <Box sx={{ width: "50%", marginLeft: "15%" }}>
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
          <>
            <Typography
              ml={30}
              mt={25}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              No Warranty Claimed Yet
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
}
