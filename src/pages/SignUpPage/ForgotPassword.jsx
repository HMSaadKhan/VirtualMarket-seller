import React, { Fragment } from "react";
import { TextField, Button, Card, CardContent, Box } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//import LoginAuth from "../../Components/AuthWrapper/LoginAuth";
import { Container, ColumnBox } from "../../Styles/StyledBoxes";
import { toast } from "react-toastify";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import LoginAuth from "../../AuthWrapper/LoginAuth";
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const ForgotPassword = (props) => {
  const [email, setEmail] = React.useState("");
  const [loading, setloading] = React.useState(false);

  const history = useHistory();

  return (
    <LoginAuth>
      <LoadingScreen bool={loading} />
      <Container>
        <Card sx={{ minWidth: 350 }}>
          <CardContent>
            <ColumnBox>
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
            </ColumnBox>
            <Box mt={2}>
              <Button
                variant="contained"
                onClick={(e) => {
                  setloading(true);
                  sellerService
                    .forgotPassword(email)
                    .then((data) => {
                      setloading(false);
                      console.log(data._id);
                      history.push("/resetPassword/" + data._id);
                      toast.success(data.data, {
                        position: toast.POSITION.BOTTOM_LEFT,
                      });
                    })
                    .catch((err) => {
                      setloading(false);
                      console.log(err);
                      toast.error(err.response.data, {
                        position: toast.POSITION.BOTTOM_LEFT,
                      });
                    });
                }}
              >
                Send Email
              </Button>
            </Box>
          </CardContent>
        </Card>

        <br />
      </Container>
    </LoginAuth>
  );
};

export default ForgotPassword;
