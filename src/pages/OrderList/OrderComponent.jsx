import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import OrderItems from "./OrderItems";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import moment from "moment";
import PageHeader from "../../Components/PageHeader";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "red",
  },
  text: {
    color: "black",
  },
}));

export default function OrderComponent({ order, ChangeOrderStatus }) {
  const history = useHistory();
  const classes = useStyles();
  const [buttonLabel, setbuttonLabel] = useState("");

  const [index, setindex] = useState(0);

  const ButtonLabel = () => {
    if (order.status === "PLACED") {
      setbuttonLabel("Add to PACKAGING");
      setindex(1);
    }
    if (order.status === "PACKAGING") {
      setbuttonLabel("Add to SHIPPING");
      setindex(2);
    }
    if (order.status === "SHIPPING") {
      setbuttonLabel("DELIVERED");
      setindex(3);
    }
    if (order.status === "DELIVERED") {
      setindex(4);
    }
    if (order.status === "RETURNED") {
      setindex(4);
    }
  };
  useEffect(ButtonLabel, [order.status]);
  console.log(order);

  const FlexBox = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  });

  return (
    <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <Card sx={{ backgroundColor: "#fafafa" }}>
        <CardContent>
          <PageHeader heading={"ORDER DETAILS"} />
          <Card sx={{ marginTop: "10px" }}>
            <CardContent>
              <FlexBox>
                <FlexBox>
                  <Typography className={classes.heading}>Order# </Typography>
                  <Typography className={classes.text}>{order._id}</Typography>
                </FlexBox>
                <FlexBox>
                  <Typography className={classes.heading}>
                    Order Type
                  </Typography>
                  <Typography className={classes.text}>{order.type}</Typography>
                </FlexBox>
              </FlexBox>
            </CardContent>
          </Card>
          <Typography
            ml={1}
            sx={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
          >
            Ordered Products
          </Typography>
          <Card sx={{}}>
            <CardContent>
              {order.items.map((items) => (
                <OrderItems items={items} key={items.id} />
              ))}
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <Typography
              ml={1}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              Shipping Details
            </Typography>
            <Card sx={{}}>
              <CardContent>
                <FlexBox>
                  <Typography className={classes.heading}>Name </Typography>
                  <Typography className={classes.text}>
                    {order.buyerName}
                  </Typography>
                </FlexBox>
                <FlexBox sx={{ alignItems: "start" }}>
                  <Typography className={classes.heading}>Address</Typography>
                  <Box sx={{ width: "50%" }}>
                    <Typography align="right" className={classes.text}>
                      {order.deliveryAddress}
                    </Typography>
                  </Box>
                </FlexBox>
                <FlexBox>
                  <Typography className={classes.heading}>City </Typography>
                  <Typography className={classes.text}>
                    {order.deliveryCity.name}
                  </Typography>
                </FlexBox>
                <FlexBox>
                  <Typography className={classes.heading}>Phone </Typography>
                  <Typography className={classes.text}>
                    {order.buyerContact}
                  </Typography>
                </FlexBox>
              </CardContent>
            </Card>
            <Typography
              ml={1}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
            >
              Billing Details
            </Typography>
            <Card>
              <CardContent>
                <FlexBox>
                  <Typography className={classes.heading}>Sub Total</Typography>
                  <Typography className={classes.text}>
                    PKR. {order.subTotal}
                  </Typography>
                </FlexBox>
                <FlexBox>
                  <Typography className={classes.heading}>
                    Delivery Charge
                  </Typography>
                  <Typography className={classes.text}>
                    PKR. {order.deliveryCharge}
                  </Typography>
                </FlexBox>
                <Divider />
                <FlexBox>
                  <Typography className={classes.heading}>Total</Typography>
                  <Typography className={classes.text}>
                    PKR.{order.total}
                  </Typography>
                </FlexBox>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "100%", margin: "20px" }}>
            <Stepper alternativeLabel activeStep={index}>
              {order.events.map((label) => {
                return (
                  <Step key={label._id}>
                    <StepLabel>
                      {label.name}
                      <br />
                      {moment(label.date).format("MMMM Do YYYY")}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>

          <Box sx={{ display: "flex", marginLeft: "70%" }}>
            <Box m={1}>
              {order.status === "SHIPPING" ? (
                <Button
                  value="RETURNED"
                  sx={{
                    color: "#FFFF",
                    backgroundColor: "#FF0000",
                    "&:hover": {
                      backgroundColor: "#b22222",
                      color: "#ffff",
                    },
                  }}
                  onClick={(e) => {
                    ChangeOrderStatus(order._id, e.target.value);
                    history.push("/orders/" + order.status);
                  }}
                >
                  Returned
                </Button>
              ) : (
                <></>
              )}
            </Box>
            {order.status === "CANCELED" ||
            order.status === "RETURNED" ||
            order.status === "DELIVERED" ? (
              <></>
            ) : (
              <Box m={1}>
                {" "}
                <Button
                  value={buttonLabel}
                  sx={{
                    color: "#FFFF",
                    backgroundColor: "#FF0000",
                    "&:hover": {
                      backgroundColor: "#b22222",
                      color: "#ffff",
                    },
                  }}
                  onClick={(e) => {
                    ChangeOrderStatus(order._id, e.target.value);
                    history.push("/orders/" + order.status);
                  }}
                >
                  {buttonLabel}
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
