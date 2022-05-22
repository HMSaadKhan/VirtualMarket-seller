import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useHistory } from "react-router-dom";
import { WhiteButton } from "../../Styles/StyledButtons";

const productStatus = ["APPROVED", "PENDING", "DENIED"];
export default function ProductsTab() {
  const history = useHistory();

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ display: "flex", justifyContent: "space-between" }}>
          <CardContent>
            {productStatus.map((status) => {
              return <WhiteButton onClick={(e) => {}}>{status}</WhiteButton>;
            })}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
