import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState, useEffect, useRef } from "react";

import { Card } from "@mui/material";
import { Button, Typography } from "@mui/material";

import productService from "../../Services/ProductServices";
import { useHistory } from "react-router-dom";
import { ColumnBox, MarginBox } from "../../Styles/StyledBoxes";
import { MidPager } from "../../Styles/MidPager";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const HeadingText = styled(Typography)({
  fontSize: "15px",
  fontWeight: "bold",
  color: "red",
});
const SubText = styled(Typography)({
  fontSize: "18px",
  color: "black",
});
const FlexBox = styled(Box)({
  display: "flex",
});

export default function ProductInformation(props) {
  const history = useHistory();

  const [productInfo, setproductInfo] = useState("");
  const [loading, setloading] = useState(false);
  const _id = props.match.params.id;
  const temp = useRef();
  const [error, seterror] = useState();

  const getProduct = async () => {
    setloading(true);
    await productService
      .getSellerProduct(_id)
      .then((data) => {
        setloading(false);
        setproductInfo(data.data);
      })
      .catch((error) => {
        setloading(false);
        seterror(error.response.data);
      });
  };
  temp.current = getProduct;
  useEffect(() => {
    temp.current();
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <LoadingScreen bool={loading} />
      <Box sx={{ width: "100%" }}>
        <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
          {productInfo ? (
            <>
              <Card sx={{ padding: "20px" }}>
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  onClick={() => {
                    history.push("/editDetails/" + _id);
                  }}
                >
                  Edit
                </Button>

                <Box>
                  <MarginBox>
                    <SubText sx={{ fontSize: "30px" }}>
                      {productInfo.name}
                    </SubText>
                  </MarginBox>
                  <FlexBox
                    sx={{
                      justifyContent: "space-around",
                    }}
                  >
                    <ColumnBox sx={{ width: "33%" }}>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Brand</HeadingText>
                          <SubText>{productInfo.brand}</SubText>
                        </MarginBox>
                      </ColumnBox>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Price</HeadingText>
                          <SubText>PKR.{productInfo.price}</SubText>
                        </MarginBox>
                      </ColumnBox>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Min. Order Quantity</HeadingText>
                          <SubText>{productInfo.minOrder} Piece</SubText>
                        </MarginBox>
                      </ColumnBox>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Category</HeadingText>
                          <SubText>{productInfo.category.name}</SubText>
                        </MarginBox>
                      </ColumnBox>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Description</HeadingText>
                          <SubText>{productInfo.description}</SubText>
                        </MarginBox>
                      </ColumnBox>
                    </ColumnBox>
                    <Box sx={{ width: "33%" }}>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Stock</HeadingText>
                          <SubText>{productInfo.stock} pieces</SubText>
                        </MarginBox>
                      </ColumnBox>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Warranty</HeadingText>
                          <SubText>{productInfo.warrantyPeriod} Days</SubText>
                        </MarginBox>
                      </ColumnBox>
                      <ColumnBox>
                        <MarginBox>
                          <HeadingText>Sample Orders</HeadingText>
                          <SubText>
                            {productInfo.sampleOrder ? <>Yes</> : <>No</>}
                          </SubText>
                        </MarginBox>
                      </ColumnBox>
                    </Box>

                    <ColumnBox
                      sx={{
                        width: "34%",
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      {productInfo.images.map((item) => {
                        return (
                          <Box
                            key={item._id}
                            m={1}
                            sx={{ cursor: "pointer" }}
                            onClick={(e) => {
                              console.log("imageClick");
                              window.open(item.link, "");
                            }}
                          >
                            <img
                              width="150px"
                              height="150px"
                              border="1"
                              background-size="cover"
                              src={item.link}
                              alt={item.title}
                              loading="lazy"
                            />
                          </Box>
                        );
                      })}
                    </ColumnBox>
                  </FlexBox>
                </Box>
              </Card>
            </>
          ) : (
            <>
              <MidPager name={error} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
