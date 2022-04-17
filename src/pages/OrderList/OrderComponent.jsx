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
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "red",
  },
  text: {
    color: "black",
  },
}));

export default function OrderComponent({ order, ChangeOrderStatus }) {
  const classes = useStyles();
  const [buttonLabel, setbuttonLabel] = useState("");
  const [dates, setdates] = useState([]);
  const [index, setindex] = useState(0);
  const [bool, setbool] = useState();
  const ButtonLabel = () => {
    if (order.status == "PLACED") {
      setbuttonLabel("PACKAGING");
      setindex(1);
    }
    if (order.status == "PACKAGING") {
      setbuttonLabel("SHIPPING");
      setindex(2);
    }
    if (order.status == "SHIPPING") {
      setbuttonLabel("DELIVERED");
      setindex(3);
    }
    if (order.status == "DELIVERED") {
      setindex(4);
    }
    if (order.status == "RETURNED") {
      setindex(4);
    }
  };
  useEffect(ButtonLabel, []);
  console.log(order);

  return (
    <Box>
      <Card sx={{ width: "100%", height: "80%" }}>
        <CardContent>
          <Card sx={{ margin: "10px" }}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  Order#{" "}
                  <Typography ml={2} className={classes.text}>
                    {order._id}
                  </Typography>
                </Typography>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  Order Type{" "}
                  <Typography className={classes.text} ml={2}>
                    {order.type}
                  </Typography>
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "50%" }}>
                  <Typography className={classes.heading}>
                    Product Name
                  </Typography>
                </Box>
                <Box sx={{ width: "25%" }}>
                  <Typography className={classes.heading}>Quantity</Typography>
                </Box>
                <Box sx={{ width: "25%" }}>
                  <Typography className={classes.heading}>Price</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px" }}>
            <CardContent>
              {order.items.map((items) => (
                <OrderItems items={items} key={items.id} />
              ))}
            </CardContent>
          </Card>
          <Box sx={{ margin: "10px", display: "flex" }}>
            <Card sx={{ width: "40%", marginLeft: "10px" }}>
              <CardContent>
                <Typography className={classes.heading}>
                  Shipping Details
                </Typography>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  Name{" "}
                  <Typography ml={4} className={classes.text}>
                    {order.buyerName}
                  </Typography>
                </Typography>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  Address{" "}
                  <Typography className={classes.text} ml={2}>
                    {order.deliveryAddress}
                  </Typography>
                </Typography>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  City{" "}
                  <Typography ml={6} className={classes.text}>
                    {order.deliveryCity.name}
                  </Typography>
                </Typography>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  Phone{" "}
                  <Typography ml={4} className={classes.text}>
                    {order.buyerContact}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "40%", marginLeft: "90px" }}>
              <CardContent>
                <Typography
                  className={classes.heading}
                  sx={{ display: "flex" }}
                >
                  Sub Total
                  <Typography className={classes.text} ml={8}>
                    {order.subTotal}
                  </Typography>
                </Typography>
                <Typography
                  sx={{ display: "flex" }}
                  className={classes.heading}
                >
                  Delivery Charge{" "}
                  <Typography ml={2} className={classes.text}>
                    {order.deliveryCharge}
                  </Typography>
                </Typography>
                <Divider />
                <Typography
                  sx={{ display: "flex" }}
                  className={classes.heading}
                >
                  Total
                  <Typography ml={12} className={classes.text}>
                    {order.total}
                  </Typography>
                </Typography>
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
                  }}
                >
                  {buttonLabel}
                </Button>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
      <Divider />
    </Box>
  );
}
