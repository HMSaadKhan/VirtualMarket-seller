import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Grid, Paper, Typography } from "@material-ui/core";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import { bgcolor } from "@mui/system";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

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
  flex-wrap: wrap;
  flex-direction: column;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setCPassword] = React.useState("");
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");

  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Sign Up</Title>
          <TextField
            label="First name"
            value={fName}
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />
          <TextField
            label="Last name"
            value={lName}
            onChange={(e) => {
              setlName(e.target.value);
            }}
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              sellerService
                .register({ fName, lName, email, password, confirmPassword })
                .then((res) => {
                  // toast.success("Signup Successfull", {
                  //   position: toast.POSITION.BOTTOM_LEFT,
                  // });
                  props.history.push("/login");
                })
                .catch((err) => {
                  console.log(err);
                  toast.error(err.response.data, {
                    position: toast.POSITION.BOTTOM_LEFT,
                  });
                });
            }}
          >
            CREATE
          </Button>
          <Typography>
            Already have an account? <Link to="/Login">Login</Link>
          </Typography>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
