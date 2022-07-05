import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material/";
import { MidPager } from "../../Styles/MidPager";
import moment from "moment";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const HeadingText = styled(Typography)({
  fontWeight: "bold",
});
export default function WarrantyList({ warrantyDetails, error }) {
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
                  <HeadingText color="primary">warranty ID</HeadingText>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <HeadingText align="center" color="primary">
                    Product Name
                  </HeadingText>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <HeadingText color="primary" align="center">
                    Ordered Quantity
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
            {warrantyDetails.map((warranty) => {
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
                            xs: "10ch",
                            sm: "15ch",
                            md: "100%",
                            lg: "100%",
                          },
                        }}
                      >
                        <Typography noWrap>{warranty._id}</Typography>
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography align="center">
                          <Link
                            to={"/product-information/" + warranty.Product}
                            sx={{ color: "black" }}
                          >
                            {warranty.productName}
                          </Link>
                        </Typography>
                      </Box>
                      <Box sx={{ width: "100%" }}>
                        <Typography align="center">
                          {"Qty: " + warranty.quantity}
                        </Typography>
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography align="center">
                          <Link to={"/warrantyDetails/" + warranty._id}>
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
