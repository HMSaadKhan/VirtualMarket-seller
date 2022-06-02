import React from "react";
import {
  TextField,
  Button,
  Card,
  Box,
  CardContent,
  Typography,
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
  // const [fName, setfName] = React.useState("saad");
  // const [lName, setlName] = React.useState("khan");

  return (
    <LoginAuth>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10%",
          paddingBottom: "5%",
        }}
      >
        <Card sx={{ maxWidth: 350, minWidth: 350 }}>
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
                />
                <TextField
                  label="Password"
                  type="password"
                  helperText="should be 6 character"
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
              </>
              <Box mt={2}>
                <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  onClick={(e) => {
                    sellerService
                      .register({
                        email,
                        password,
                        confirmPassword,
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
                  }}
                >
                  CREATE
                </Button>
              </Box>
              <Typography mt={1}>
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
