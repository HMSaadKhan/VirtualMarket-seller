import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import moment from "moment";
import PageHeader from "../../Components/PageHeader";

const ProductText = styled(Typography)({
  align: "center",
  fontWeight: "bold",
  color: "red",
});
const DataText = styled(Typography)({
  align: "center",
});
const TransactionCard = ({ transactions, Balance }) => {
  return (
    <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <PageHeader heading={"TRANSACTIONS"} />
      <Box sx={{ width: "20%", marginTop: "10px" }}>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold", color: "red", fontSize: "20px" }}
            >
              {"Balance : PKR " + Balance}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card
          sx={{ minWidth: 900, marginTop: "10px", backgroundColor: "#eeeeee" }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <ProductText>Transaction ID</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Transaction Amount</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Transaction Date</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Status</ProductText>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {transactions.length > 0 ? (
        <Box>
          {transactions.map((transaction) => {
            return (
              <Box mt={2}>
                <Card sx={{ backgroundColor: "#fafafa" }}>
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <DataText>{transaction._id}</DataText>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText align="center">
                        {"PKR " + transaction.amount}
                      </DataText>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText align="center">
                        {moment(transaction.createdAt).format("MMMM Do YYYY")}
                      </DataText>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText align="center" sx={{ fontWeight: "bold" }}>
                        {transaction.status}
                      </DataText>
                    </Box>

                    {/* <Divider /> */}
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Typography sx={{ marginLeft: "220px" }}>No transaction</Typography>
      )}
    </Box>
  );
};
export default TransactionCard;
