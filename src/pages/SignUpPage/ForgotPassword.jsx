import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Card, CardContent, Box } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import { bgcolor } from "@mui/system";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
//import LoginAuth from "../../Components/AuthWrapper/LoginAuth";
import { Container, ColumnBox } from "../../Styles/StyledBoxes";

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const ForgotPassword = (props) => {
  const [email, setEmail] = React.useState("saad@gmail.com");

  const history = useHistory();

  return (
    <>
      <Container>
        <Card sx={{ maxWidth: 350 }}>
          <CardContent>
            <ColumnBox>
              <Title>Forgot Password</Title>
              <TextField
                required
                id="filled-required"
                label="Email"
                defaultValue={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </ColumnBox>
            <Box mt={2}>
              <Button
                variant="outlined"
                onClick={(e) => {
                  sellerService
                    .forgotPassword(email)
                    .then((data) => {
                      console.log(email);
                      console.log(data._id);
                      history.push("/resetPassword/" + data._id);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Send Email
              </Button>
            </Box>
          </CardContent>
        </Card>

        <br />
      </Container>
    </>
  );
};

export default ForgotPassword;
