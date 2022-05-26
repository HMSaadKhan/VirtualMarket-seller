import React, { useContext, useState } from "react";
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
import { VerifyContext } from "../../Contexts/Verification/Verify";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Container } from "../../Styles/StyledBoxes";
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
        console.log(data);

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
          paddingTop: "10%",
          paddingBottom: "5%",
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
                    Login();
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
