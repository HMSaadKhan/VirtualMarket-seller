import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";

import { styled } from "@mui/material/styles";
import WarrantyComment from "../../Components/PopUps/WarrantyComment";
import { useHistory } from "react-router-dom";
const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const useStyles = makeStyles({
  heading: {
    color: "red",
  },
  text: {
    color: "black",
  },
});

export default function WarrantyComponent({ warranty, warranties }) {
  const classes = useStyles();
  const history = useHistory();
  const response = ["DENIED", "REPLACED", "REPAIRED"];
  console.log(warranty);
  const [bool, setbool] = useState(true);
  const [respond, setrespond] = useState();

  const selectRespond = (e) => {
    setrespond(e.target.value);
    setbool(true);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 800, minWidth: 800, height: "80%" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Card sx={{ margin: "10px" }}>
            <CardContent>
              <StyledBox>
                <StyledBox>
                  <Typography className={classes.heading}>
                    warranty#{" "}
                  </Typography>
                  <Typography className={classes.text}>warranty._id</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography className={classes.heading}>warranty#</Typography>
                  <Typography className={classes.text}>warranty._id</Typography>
                </StyledBox>
              </StyledBox>
            </CardContent>
          </Card>

          <Card sx={{ margin: "10px" }}>
            <CardContent>
              <StyledBox>
                <Box sx={{ width: "50%" }}>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={(e) => {
                      history.push("/product-information/" + warranty.Product);
                    }}
                  >
                    {warranty.Product}
                  </Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Typography className={classes.heading}>
                    {warranty.productName}
                  </Typography>
                </Box>
                <Box sx={{ width: "25%" }}>
                  <Typography className={classes.heading}>
                    {warranty.quantity}
                  </Typography>
                </Box>
                <StyledBox sx={{ width: "25%" }}>
                  <FormControl sx={{ width: 150 }}>
                    <InputLabel variant="standard">Response</InputLabel>

                    <Select
                      variant="standard"
                      value={respond}
                      onChange={(e) => {
                        selectRespond(e);
                      }}
                    >
                      {response.map((item) => (
                        <MenuItem key={item.id} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </StyledBox>
                {respond ? (
                  <WarrantyComment
                    bool={bool}
                    setbool={setbool}
                    status={respond}
                    _id={warranty._id}
                    warranties={warranties}
                  />
                ) : (
                  <></>
                )}
              </StyledBox>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px" }}>
            <CardContent>
              <Typography className={classes.heading}>
                Buyer Comment:
              </Typography>
              <Typography>{warranty.buyerComment}</Typography>
            </CardContent>
          </Card>
          <>
            <Card sx={{ marginLeft: "10px" }}>
              <CardContent>
                <Typography className={classes.heading}>
                  Shipping Details
                </Typography>
                <StyledBox>
                  <Typography className={classes.heading}>Name </Typography>
                  <Typography className={classes.text}>
                    {warranty.Order.buyerName}
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography className={classes.heading}>Address</Typography>
                  <Typography className={classes.text}>
                    {warranty.Order.deliveryAddress}{" "}
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography className={classes.heading}>City </Typography>
                  <Typography className={classes.text}>
                    {warranty.Order.deliveryCity.name}
                  </Typography>
                </StyledBox>
                <StyledBox>
                  <Typography className={classes.heading}>Phone </Typography>
                  <Typography className={classes.text}>
                    {warranty.Order.buyerContact}
                  </Typography>
                </StyledBox>
              </CardContent>
            </Card>
          </>
        </CardContent>
      </Card>
      <Divider />
    </Box>
  );
}
