import React from "react";
import { Box, Card, Typography, Button, CardContent } from "@mui/material";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import offerService from "../../Services/OfferService";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: "5px",
  flexWrap: "wrap",
});
const useStyles = makeStyles({
  image: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
  },
  imagemsg: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
  },
  imageprev: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
});
export default function OfferMsg({ message, getMessages }) {
  const classes = useStyles();
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#fafafa",
          width: "100%",
        }}
      >
        <CardContent>
          {message.Offer.Product ? (
            <>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img
                    className={classes.image}
                    src={message.Offer.Product.images[0].link}
                    alt=""
                  />
                </Box>
                <Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      sx={{
                        color: "#ba6a62",
                        fontWeight: "bold",
                      }}
                    >
                      {message.Offer.Product.name}
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <FlexBox>
                      <Typography
                        sx={{
                          color: "#ba6a62",
                          fontWeight: "bold",
                        }}
                      >
                        Brand:
                      </Typography>
                      <Typography>{message.Offer.Product.brand}</Typography>
                    </FlexBox>
                  </Box>
                </Box>
              </Box>
              <Box justifyContent="left">
                <FlexBox>
                  <Typography
                    sx={{
                      color: "#ba6a62",
                      fontWeight: "bold",
                    }}
                  >
                    Offered Price:&nbsp;
                  </Typography>
                  <Typography>{message.Offer.price + " PKR"}</Typography>
                </FlexBox>{" "}
                <FlexBox>
                  <Typography
                    sx={{
                      color: "#ba6a62",
                      fontWeight: "bold",
                    }}
                  >
                    Quantity:&nbsp;
                  </Typography>
                  <Typography>{message.Offer.quantity + " pieces"}</Typography>
                </FlexBox>
                <FlexBox>
                  <Typography
                    sx={{
                      color: "#ba6a62",
                      fontWeight: "bold",
                    }}
                  >
                    Offer Status:&nbsp;
                  </Typography>
                  <Typography>{message.Offer.status}</Typography>
                </FlexBox>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Button
                  disabled={message.Offer.status === "PENDING" ? false : true}
                  sx={{
                    margin: "5px",
                  }}
                  color="success"
                  variant="contained"
                  fullWidth
                  startIcon={<DoneIcon />}
                  onClick={() => {
                    offerService
                      .offerReply(message.Offer._id, {
                        status: "ACCEPT",
                      })
                      .then(() => {
                        getMessages();
                      });
                  }}
                ></Button>
                <Button
                  disabled={message.Offer.status === "PENDING" ? false : true}
                  sx={{
                    backgroundColor: "red",
                    margin: "5px",
                  }}
                  variant="contained"
                  fullWidth
                  startIcon={<CloseIcon />}
                  onClick={() => {
                    offerService
                      .offerReply(message.Offer._id, {
                        status: "REFUSE",
                      })
                      .then(() => {
                        getMessages();
                      });
                  }}
                ></Button>
              </Box>
            </>
          ) : (
            <Typography color="primary">Offer No Longer Available</Typography>
          )}
        </CardContent>
        <Typography pr={1} pb={1} align="right" sx={{ fontSize: "10px" }}>
          {moment(message.Offer.createdAt).format("LT")}
        </Typography>
      </Card>
    </div>
  );
}
