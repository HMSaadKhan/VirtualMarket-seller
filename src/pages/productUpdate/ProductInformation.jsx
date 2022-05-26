import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Card, CardContent } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import productService from "../../Services/ProductServices";
import { useHistory } from "react-router-dom";
import { ColumnBox, Container, MarginBox } from "../../Styles/StyledBoxes";
import { WhiteButton } from "../../Styles/StyledButtons";
const useStyles = makeStyles((theme) => ({
  images: {
    width: "70px",
    height: "100px",
    marginRight: "10px",
    //objectFit: "cover",
    backgroundSize: "cover",
  },
}));

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
  const classes = useStyles();
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
    <Container>
      <Card
        sx={{
          minWidth: 1000,
          maxWidth: 1000,
        }}
      >
        <WhiteButton
          onClick={() => {
            history.push("/editDetails/" + _id);
          }}
        >
          Edit
        </WhiteButton>

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
                    onClick={(e) => {
                      console.log("imageClick");
                      window.open(item.link, "");
                    }}
                  >
                    <img
                      width="150px"
                      height="150px"
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
    </Container>
  );
}
