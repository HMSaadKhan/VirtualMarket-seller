import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Alert, Box, Typography } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import LoginAuth from "../../AuthWrapper/LoginAuth";

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

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  return (
    <LoginAuth>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Box sx={{}}>
            <>
              <TextField
                required
                fullWidth
                id="filled-required"
                label="Email"
                defaultValue={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </>
            <>
              <TextField
                label="Password"
                type="password"
                fullWidth
                autoComplete="current-password"
                defaultValue={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </>
            <Box mt={2}>
              <Button
                sx={{ backgroundColor: "red" }}
                variant="contained"
                onClick={(e) => {
                  sellerService
                    .login(email, password)
                    .then((data) => {
                      console.log(data);
                      props.history.push("/emailverification");
                      window.location.reload();
                      toast.success("Login Successfull", {
                        position: toast.POSITION.BOTTOM_LEFT,
                      });
                    })
                    .catch((err) => {
                      toast.error(err.response.data, {
                        position: toast.POSITION.BOTTOM_LEFT,
                      });
                    });
                }}
              >
                LOGIN
              </Button>
            </Box>
            <Box mt={1}>
              <Typography>
                Don't have an account? <Link to="/signup">SignUp</Link>
              </Typography>
              <Link to="/forgotpassword">Forgot Password</Link>
            </Box>
          </Box>
        </Wrapper>
      </Container>
    </LoginAuth>
  );
};

export default Login;
