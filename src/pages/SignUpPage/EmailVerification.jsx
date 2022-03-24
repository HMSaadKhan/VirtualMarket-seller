import React, { Fragment } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Grid, Paper, Box } from "@material-ui/core";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import { bgcolor } from "@mui/system";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import EmailVerification from "../../AuthWrapper/EmailVerification";

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

const ForgotPassword = (props) => {
  const [otp, setOtp] = React.useState();
  const [emailVerificationCheck, setEmailVerificationCheck] =
    React.useState("");
  const getVerificationdata = () => {
    sellerService
      .getStatus()
      .then((data) => {
        console.log(data);
        if (data.emailVerified) {
          props.history.push("/add-information");
        }

        setEmailVerificationCheck(data.emailVerified);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(getVerificationdata, []);
  const history = useHistory();

  return (
    <>
      {emailVerificationCheck ? (
        history.push("/add-information")
      ) : (
        <Container>
          <Wrapper>
            <Form>
              <Title>Verify Your Otp</Title>
              <TextField
                required
                id="filled-required"
                label="OTP"
                defaultValue={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            </Form>
            <Box mt={2}>
              <Button
                variant="outlined"
                color="primary"
                onClick={(e) => {
                  sellerService
                    .VerifyOtp({ otp })
                    .then((data) => {
                      console.log(data);
                      window.location.reload();
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error(err.response.data, {
                        position: toast.POSITION.BOTTOM_LEFT,
                      });
                    });
                }}
              >
                Verify{" "}
              </Button>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={(e) => {
                    sellerService
                      .verificationOTP()
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Send Otp{" "}
                </Button>
              </Box>
            </Box>
            <br />
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default ForgotPassword;
