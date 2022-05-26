import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { WhiteButton } from "../../Styles/StyledButtons";

const orderStatus = [
  "PLACED",
  "PACKAGING",
  "SHIPPING",
  "DELIVERED",
  "RETURNED",
  
];
export default function OrderMenu() {
  const history = useHistory();

  return (
    <Box sx={{  display: "flex", justifyContent: "center" }}>
      <Box>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            {orderStatus.map((status) => {
              return (
                <WhiteButton
                  onClick={(e) => {
                    history.push("/orders/" + status);
                  }}
                >
                  {status}
                </WhiteButton>
              );
            })}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
