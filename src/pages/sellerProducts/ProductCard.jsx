/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useHistory } from "react-router-dom";

import { Box, IconButton, Card, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import PageHeader from "../../Components/PageHeader";

// const Box = styled(Box)({
//   display: "flex",

//   height: "50px",
// });
const ProductText = styled(Typography)({
  fontWeight: "bold",
  color: "red",
});
const DataText = styled(Typography)({
  align: "center",
});
const ProductCard = ({ products, handleDelete }) => {
  const history = useHistory();
  console.log(products);
  return (
    <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <Box>
        <PageHeader heading={"PRODUCTS"} />
        <Card
          sx={{ width: "100%", backgroundColor: "#eeeeee", marginTop: "10px" }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <ProductText>Product Image</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText>Product Name</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Product Brand</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Product Category</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Stock</ProductText>
            </Box>

            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Status</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center">Action</ProductText>
            </Box>

            <Divider />
          </CardContent>
        </Card>
      </Box>
      <Box>
        {products.map((product) => {
          return (
            <Box mt={1} key={product._id}>
              <Card sx={{ width: "100%", backgroundColor: "#fafafa" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Box sx={{ width: "55px", height: "55px" }}>
                        <img
                          src={product.images[0].link}
                          alt="product image"
                          width="100%"
                          height="100%"
                          objectFit="contain"
                        />
                      </Box>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText
                        sx={{ cursor: "pointer" }}
                        onClick={(e) => {
                          history.push("/product-information/" + product._id);
                        }}
                      >
                        {product.name}
                      </DataText>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText align="center">{product.brand}</DataText>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText align="center">
                        {product.category.name}
                      </DataText>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <DataText align="center">
                        {" "}
                        {product.stock > 10 ? (
                          <DataText>{product.stock}</DataText>
                        ) : (
                          <DataText sx={{ fontWeight: "bold", color: "Red" }}>
                            {product.stock}
                          </DataText>
                        )}
                      </DataText>
                    </Box>
                    {console.log(product.status)}
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <DataText align="center">
                        {product.status === "APPROVED" ? (
                          <DataText
                            align="center"
                            sx={{ fontWeight: "bold", color: "green" }}
                          >
                            {product.status}
                          </DataText>
                        ) : (
                          <></>
                        )}
                        {product.status === "PENDING" ? (
                          <DataText
                            align="center"
                            sx={{ fontWeight: "bold", color: "orange" }}
                          >
                            {product.status}
                          </DataText>
                        ) : (
                          <></>
                        )}
                        {product.status === "DENIED" ? (
                          <DataText sx={{ fontWeight: "bold", color: "red" }}>
                            {product.status}
                          </DataText>
                        ) : (
                          <></>
                        )}
                      </DataText>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
                    </Box>
                  </Box>
                  {/* <Divider /> */}
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default ProductCard;
