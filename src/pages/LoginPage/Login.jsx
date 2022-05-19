import React from "react";
import {
  TextField,
  Button,
  Card,
  Box,
  Typography,
  CardContent,
} from "@mui/material";
import sellerService from "../../Services/SellerServices";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoginAuth from "../../AuthWrapper/LoginAuth";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)({ fontSize: "24px", fontWeight: "bold" });

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <LoginAuth>
      <Box
        sx={{
          marginLeft: "40%",
          marginTop: "10%",
        }}
      >
        <Card sx={{ maxWidth: 300, padding: "20px" }}>
          <CardContent>
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
                  sx={{ width: "100%" }}
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
