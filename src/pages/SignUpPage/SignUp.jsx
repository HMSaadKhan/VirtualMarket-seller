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
import { Container, ColumnBox } from "../../Styles/StyledBoxes";

const Title = styled(Typography)({ fontSize: "24px", fontWeight: "bold" });

const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setCPassword] = React.useState("");
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");

  return (
    
    <Container>
      <Card sx={{ maxWidth: 350 }}>
        <CardContent>
          <ColumnBox>
            <Title>Sign Up</Title>
            <>
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
            </>
            <Box mt={2}>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                onClick={(e) => {
                  sellerService
                    .register({
                      fName,
                      lName,
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
            <Typography>
              Already have an account? <Link to="/Login">Login</Link>
            </Typography>
          </ColumnBox>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
