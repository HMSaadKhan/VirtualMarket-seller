/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useHistory } from "react-router-dom";

import { Box, IconButton, Card, CardContent, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import PageHeader from "../../Components/PageHeader";
import { Pagination } from "@mui/material";

import { makeStyles } from "@mui/styles";
import StockPopup from "../../Components/PopUps/StockPopup";
import ConfirmPopup from "../../Components/PopUps/ConfirmPopup";

const useStyles = makeStyles({
  image: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
  },
});
const ProductText = styled(Typography)({
  fontWeight: "bold",
});
const DataText = styled(Typography)({
  align: "center",
});

const ProductCard = ({
  products,
  handleDelete,
  totalpages,
  page,
  setPage,
  getSellerProducts,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [stockpopup, setstockpopup] = React.useState(false);

  const [productId, setproductId] = React.useState();

  return (
    <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <StockPopup
        bool={stockpopup}
        setbool={setstockpopup}
        getSellerProducts={getSellerProducts}
        productId={productId}
      />

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
              <ProductText color="primary">Image</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText color="primary">Name</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText color="primary">Brand</ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center" color="primary">
                Product Category
              </ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center" color="primary">
                Stock
              </ProductText>
            </Box>

            <Box sx={{ width: "100%" }}>
              <ProductText align="center" color="primary">
                Status
              </ProductText>
            </Box>
            <Box sx={{ width: "100%" }}>
              <ProductText align="center" color="primary">
                Action
              </ProductText>
            </Box>

            <Divider />
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="center">Page: {page}</Typography>
        <Pagination
          size="large"
          count={totalpages}
          page={page}
          onChange={(e, value) => {
            setPage(value);
            history.push("/products/" + parseInt(page));
          }}
        />
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
                    <Box sx={{ width: "90%" }}>
                      <img
                        src={product.images[0].link}
                        alt="product image"
                        className={classes.image}
                      />
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
                    <Box ml={5} sx={{ width: "100%" }}>
                      <DataText>{product.brand}</DataText>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <DataText>{product.category.name}</DataText>
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
                      <IconButton
                        onClick={(e) => {
                          setproductId(product._id);
                          setstockpopup(true);
                        }}
                      >
                        <InventoryIcon />
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
