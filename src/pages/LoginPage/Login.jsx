  import React from "react";
  import { makeStyles } from "@mui/styles";
  import {
    TextField,
    Button,
    Alert,
    Card,
    Box,
    Typography,
    CardContent,
  } from "@mui/material";
  import sellerService from "../../Services/SellerServices";
  import styled from "styled-components";
  import { Link, useHistory } from "react-router-dom";
  import { toast } from "react-toastify";
  import LoginAuth from "../../AuthWrapper/LoginAuth";

  const Container = styled.div`
    width: 100%;
    height: 100%;
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
        <Box
          sx={{
            marginLeft: "40%",
            marginTop: "10%",
            width: "100%",
            height: "100%",
            display: "flex",
            alignitems: "center",
            justifycontent: "center",
          }}
        >
          <Card sx={{ width: "30%", padding: "20px" }}>
            <CardContent>
              <Title>SIGN IN</Title>
              <Box sx={{}}>
                <>
                  <TextField
                    required
                    fullWidth
                    id="filled-required"
                    label="Email"
                    variant="standard"
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
                    variant="standard"
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
            </CardContent>
          </Card>
        </Box>
      </LoginAuth>
    );
  };

  export default Login;
