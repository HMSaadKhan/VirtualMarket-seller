import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material/";

import moment from "moment";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const HeadingText = styled(Typography)({
  fontWeight: "bold",
  color: "red",
});
export default function OrderList({ orderDetails }) {
  return (
    <Box sx={{ marginLeft: "200px" }}>
      <Box m={2}>
        <Card sx={{ backgroundColor: "#eeeeee" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <HeadingText>Order ID</HeadingText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <HeadingText align="center">Order Payment</HeadingText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <HeadingText align="center">Order Status</HeadingText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <HeadingText align="center">Order City</HeadingText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <HeadingText align="center">Order Date</HeadingText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <HeadingText align="center">Action</HeadingText>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box>
        {orderDetails.map((order) => {
          return (
            <Box m={2}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    aligItems: "center",
                  }}
                >
                  <Box sx={{ width: "100%" }}>
                    <Typography align="center">{order._id}</Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography align="center">{order.type}</Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography align="center">{order.status}</Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography align="center">
                      {order.deliveryCity.name}
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography align="center">
                      {moment(order.createdAt).format("MMMM Do YYYY")}
                    </Typography>
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <Typography align="center">
                      <Link to={"/OrderDetails/" + order._id}>
                        View Details
                      </Link>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
