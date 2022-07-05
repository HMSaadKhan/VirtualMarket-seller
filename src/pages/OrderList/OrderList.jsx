import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material/";
import { MidPager } from "../../Styles/MidPager";
import moment from "moment";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const HeadingText = styled(Typography)({
  fontWeight: "bold",
});
export default function OrderList({ orderDetails, error }) {
  return (
    <Box sx={{ marginLeft: "200px" }}>
      {error.length > 0 ? (
        <Box sx={{ width: "100%" }}>
          <MidPager name={error} />
        </Box>
      ) : (
        <>
          <Box m={2}>
            <Card sx={{ backgroundColor: "#eeeeee" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <HeadingText color="primary">Order ID</HeadingText>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <HeadingText align="center" color="primary">
                    Order Status
                  </HeadingText>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <HeadingText color="primary" align="center">
                    Order City
                  </HeadingText>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <HeadingText color="primary" align="center">
                    Order Date
                  </HeadingText>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <HeadingText align="center" color="primary">
                    Action
                  </HeadingText>
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
                      <Box
                        sx={{
                          width: {
                            xs: "5ch",
                            sm: "10ch",
                            md: "20ch",
                            lg: "100%",
                          },
                        }}
                      >
                        <Typography noWrap>{order._id}</Typography>
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
        </>
      )}
    </Box>
  );
}
