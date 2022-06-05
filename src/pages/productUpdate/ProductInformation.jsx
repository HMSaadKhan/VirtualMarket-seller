import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState, useEffect, useRef } from "react";

import { Card } from "@mui/material";
import { Button, Typography } from "@mui/material";

import productService from "../../Services/ProductServices";
import { useHistory } from "react-router-dom";
import { ColumnBox, MarginBox } from "../../Styles/StyledBoxes";

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

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [sampleOrder, setSampleOrder] = useState("");
  const [stock, setStock] = useState();
  const [warrantyPeriod, setWarrantyPeriod] = useState();
  const [minOrder, setMinOrder] = useState();
  const [price, setPrice] = useState();
  const [selectedImages, setSelectedImages] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [imageIndex, setImageIndex] = useState(0);

  const _id = props.match.params.id;
  const temp = useRef();

  const getProduct = async () => {
    await productService.getSellerProduct(_id).then((data) => {
      console.log(data.data);
      setName(data.data.name);
      setPrice(data.data.price);
      setBrand(data.data.brand);
      setCategory(data.data.category.name);
      setDescription(data.data.description);
      setSampleOrder(data.data.sampleOrder);
      setStock(data.data.stock);
      setWarrantyPeriod(data.data.warrantyPeriod);
      setMinOrder(data.data.minOrder);
      setSelectedImages(data.data.images);
    });
  };
  temp.current = getProduct;
  useEffect(() => {
    temp.current();
  }, []);

  const getCategories = () => {
    productService
      .GetCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getCategories, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width: "100%" }}>
        <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
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
                <SubText sx={{ fontSize: "30px" }}>{name}</SubText>
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
                      <SubText>{brand}</SubText>
                    </MarginBox>
                  </ColumnBox>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Price</HeadingText>
                      <SubText>PKR.{price}</SubText>
                    </MarginBox>
                  </ColumnBox>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Min. Order Quantity</HeadingText>
                      <SubText>{minOrder} Piece</SubText>
                    </MarginBox>
                  </ColumnBox>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Category</HeadingText>
                      <SubText>{category}</SubText>
                    </MarginBox>
                  </ColumnBox>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Description</HeadingText>
                      <SubText>{description}</SubText>
                    </MarginBox>
                  </ColumnBox>
                </ColumnBox>
                <Box sx={{ width: "33%" }}>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Stock</HeadingText>
                      <SubText>{stock} pieces</SubText>
                    </MarginBox>
                  </ColumnBox>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Warranty</HeadingText>
                      <SubText>{warrantyPeriod} Days</SubText>
                    </MarginBox>
                  </ColumnBox>
                  <ColumnBox>
                    <MarginBox>
                      <HeadingText>Sample Orders</HeadingText>
                      <SubText>{sampleOrder ? <>Yes</> : <>No</>}</SubText>
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
                  {selectedImages.map((item) => {
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
        </Box>
      </Box>
    </Box>
  );
}
