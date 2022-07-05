import React, { useState } from "react";
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
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
const Title = styled(Typography)({ fontSize: "24px", fontWeight: "bold" });

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setloading] = useState(false);

  const Login = () => {
    setloading(true);
    sellerService
      .login(email, password)
      .then((data) => {
        window.location.href = "/";
        toast.success("Login Successfull", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        setloading(false);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <LoginAuth>
      <LoadingScreen bool={loading} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { xs: "200px", md: "200px", lg: "200px" },
          marginBottom: { xs: "200px", md: "200px", lg: "200px" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                      helperText="example@example.com"
                      defaultValue={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          Login();
                          // write your functionality here
                        }
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
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          Login();
                          // write your functionality here
                        }
                      }}
                    />
                  </>
                  <Box mt={2}>
                    <Button
                      sx={{ width: "100%" }}
                      variant="contained"
                      onClick={(e) => {
                        Login();
                      }}
                    >
                      LOGIN
                    </Button>
                  </Box>
                  <Box mt={1}>
                    <Typography>
                      <Link to="/signup">Register as a new seller</Link>
                    </Typography>
                    <Link to="/forgotpassword">Forgot Password</Link>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </LoginAuth>
  );
};

export default Login;
