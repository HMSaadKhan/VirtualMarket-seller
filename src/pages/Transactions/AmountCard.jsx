import React from "react";
import { useHistory } from "react-router-dom";

import { Box, IconButton, Card, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

const FlexBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  height: "50px",
});
const ProductText = styled(Typography)({
  align: "center",
  fontWeight: "bold",
  color: "red",
});
const DataText = styled(Typography)({
  align: "center",
});
const TransactionCard = ({ transactions, handleDelete }) => {
  const history = useHistory();

  return (
    <FlexBox sx={{ justifyContent: "center" }}>
      <Box position="fixed" sx={{ zIndex: 3 }}>
        <Card
          sx={{ minWidth: 900, marginTop: "30px", backgroundColor: "#fafafa" }}
        >
          <CardContent>
            <FlexBox sx={{ justifyContent: "space-between" }}>
              <FlexBox sx={{ width: "25%" }}>
                <ProductText>Transaction ID</ProductText>
              </FlexBox>
              <FlexBox sx={{ width: "15%" }}>
                <ProductText>Amount</ProductText>
              </FlexBox>
              <FlexBox sx={{ width: "20%" }}>
                <ProductText>Status</ProductText>
              </FlexBox>
            </FlexBox>
          </CardContent>
        </Card>
      </Box>
      {transactions.length > 0 ? (
        <>
          <Card sx={{ minWidth: 900, marginTop: "150px" }}>
            <CardContent>
              {transactions.map((transaction) => {
                return (
                  <>
                    <FlexBox sx={{ justifyContent: "space-between" }}>
                      <FlexBox sx={{ width: "25%" }}>
                        <DataText>{transaction._id}</DataText>
                      </FlexBox>
                      <FlexBox sx={{ width: "15%" }}>
                        <DataText>{transaction.amount}</DataText>
                      </FlexBox>
                      <FlexBox sx={{ width: "20%" }}>
                        <DataText sx={{ fontWeight: "bold" }}>
                          {transaction.status}
                        </DataText>
                      </FlexBox>
                    </FlexBox>
                    <Divider />
                  </>
                );
              })}
            </CardContent>
          </Card>
        </>
      ) : (
        <Typography sx={{ marginTop: "200px" }}>No transaction</Typography>
      )}
    </FlexBox>
  );
};
export default TransactionCard;
