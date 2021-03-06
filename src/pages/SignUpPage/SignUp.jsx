import React from "react";
import {
  TextField,
  Button,
  Card,
  Box,
  CardContent,
  Typography,
  Checkbox,
} from "@mui/material";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColumnBox } from "../../Styles/StyledBoxes";
import LoginAuth from "../../AuthWrapper/LoginAuth";

const Title = styled(Typography)({ fontSize: "24px", fontWeight: "bold" });

const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setCPassword] = React.useState("");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const SignUpFunction = () => {
    sellerService
      .register({
        email,
        password,
        confirmPassword,
        terms: checked,
      })
      .then((res) => {
        toast.success(res.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };

  return (
    <LoginAuth>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <Card sx={{ maxWidth: 350, minWidth: 400 }}>
          <CardContent>
            <ColumnBox>
              <Title>Sign Up</Title>
              <>
                <TextField
                  label="Email"
                  value={email}
                  helperText="example@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      SignUpFunction();
                      // write your functionality here
                    }
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  helperText="should be 6 character"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      SignUpFunction();
                      // write your functionality here
                    }
                  }}
                />
                <TextField
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      SignUpFunction();
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
                    SignUpFunction();
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      SignUpFunction();
                      // write your functionality here
                    }
                  }}
                >
                  CREATE
                </Button>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }} mt={1}>
                <Checkbox checked={checked} onChange={handleChange} />
                <Typography sx={{ fontSize: "11px" }}>
                  I have read and agree to the &nbsp;
                </Typography>
                <Typography
                  sx={{ fontSize: "11px" }}
                  component={Link}
                  to={"terms-and-conditions"}
                >
                  terms of use and privacy statement
                </Typography>
              </Box>
              <Typography mt={1} ml={1}>
                Already have an account? <Link to="/Login">Login</Link>
              </Typography>
            </ColumnBox>
          </CardContent>
        </Card>
      </Box>
    </LoginAuth>
  );
};

export default Register;
