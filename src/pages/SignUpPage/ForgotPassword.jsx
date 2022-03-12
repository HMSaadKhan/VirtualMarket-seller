import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Grid, Paper, Box } from "@material-ui/core";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import { bgcolor } from "@mui/system";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
//import LoginAuth from "../../Components/AuthWrapper/LoginAuth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ForgotPassword = (props) => {
  const [email, setEmail] = React.useState("saad@gmail.com");

  const history = useHistory();

  return (
    <>
      <Container>
        <Wrapper>
          <Form>
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
          </Form>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="primary"
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
          <br />
        </Wrapper>
      </Container>
    </>
  );
};

export default ForgotPassword;
