import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function OrderItems({ items }) {
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            component={Link}
            sx={{ color: "black" }}
            to={"/product-information/" + items.Product}
          >
            {items.productName}
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography align="center">{"Qty: " + items.quantity}</Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography align="center">{"PKR." + items.totalPrice}</Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
}
