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
const TransactionCard = ({ products, handleDelete }) => {
  const history = useHistory();

  return (
    <FlexBox sx={{ justifyContent: "center" }}>
      <Box position="fixed" sx={{ zIndex: 3 }}>
        <Card sx={{ minWidth: 900, marginTop: "100px" }}>
          <CardContent>
            <FlexBox sx={{ justifyContent: "space-between" }}>
              <FlexBox sx={{ width: "25%" }}>
                <ProductText>Product Name</ProductText>
              </FlexBox>
              <FlexBox sx={{ width: "15%" }}>
                <ProductText>Product Brand</ProductText>
              </FlexBox>
              <FlexBox sx={{ width: "20%" }}>
                <ProductText>Product Category</ProductText>
              </FlexBox>
              <FlexBox sx={{ width: "5%" }}>
                <ProductText>Stock</ProductText>
              </FlexBox>

              <FlexBox sx={{ width: "10%" }}>
                <ProductText>Status</ProductText>
              </FlexBox>
              <FlexBox sx={{ width: "10%" }}>
                <ProductText>Action</ProductText>
              </FlexBox>
            </FlexBox>
            <Divider />
          </CardContent>
        </Card>
      </Box>
      {products.length > 0 ? (
        <>
          <Card sx={{ minWidth: 900, marginTop: "100px" }}>
            <CardContent>
              {products.map((product) => {
                return (
                  <>
                    <FlexBox sx={{ justifyContent: "space-between" }}>
                      <FlexBox sx={{ width: "25%" }}>
                        <DataText>{product.name}</DataText>
                      </FlexBox>
                      <FlexBox sx={{ width: "15%" }}>
                        <DataText>{product.brand}</DataText>
                      </FlexBox>
                      <FlexBox sx={{ width: "20%" }}>
                        {product.category.name}
                      </FlexBox>
                      <FlexBox sx={{ width: "5%" }}>
                        <DataText>
                          {" "}
                          {product.stock > 10 ? (
                            <DataText>{product.stock}</DataText>
                          ) : (
                            <DataText sx={{ fontWeight: "bold", color: "Red" }}>
                              {product.stock}
                            </DataText>
                          )}
                        </DataText>
                      </FlexBox>

                      <FlexBox sx={{ width: "10%" }}>
                        <DataText>
                          {" "}
                          {product.approved ? (
                            <DataText
                              sx={{ fontWeight: "bold", color: "green" }}
                            >
                              Approved
                            </DataText>
                          ) : (
                            <DataText sx={{ fontWeight: "bold", color: "Red" }}>
                              Not Approved
                            </DataText>
                          )}
                        </DataText>
                      </FlexBox>
                      <FlexBox sx={{ width: "10%" }}>
                        <FlexBox sx={{ justifyContent: "space-between" }}>
                          <IconButton
                            onClick={() => {
                              history.push("/editDetails/" + product._id);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={(e) => {
                              handleDelete(product._id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </FlexBox>
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
        <Typography sx={{ marginTop: "200px" }}>No products</Typography>
      )}
    </FlexBox>
  );
};
export default TransactionCard;
