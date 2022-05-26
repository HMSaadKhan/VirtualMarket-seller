import React, { Fragment } from "react";
import { TextField, Button, Card, CardContent, Box } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

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
  const [otpsent, setOtpsent] = React.useState(true);
  const [loading, setloading] = React.useState(false);
  const [emailVerificationCheck, setEmailVerificationCheck] =
    React.useState("");
  // const getVerificationdata = () => {
  // setloading(true);
  //   sellerService
  //     .getStatus()
  //     .then((data) => {
  //setloading(false);
  //       console.log(data);
  //       if (data.emailVerified) {
  //         props.history.push("/add-information");
  //       }

  //       setEmailVerificationCheck(data.emailVerified);
  //     })
  //     .catch((error) => {
  //setloading(false);
  //       console.log(error);
  //     });
  // };
  // React.useEffect(getVerificationdata, []);
  const history = useHistory();

  return (
    <IsLoggedin>
      <LoadingScreen bool={loading} />
      {emailVerificationCheck ? (
        history.push("/add-information")
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            paddingTop: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Form>
                <Title>Verify Your Otp</Title>
                <Box mt={2} mb={2}>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      setOtpsent(true);
                      setloading(true);
                      sellerService
                        .verificationOTP()
                        .then((data) => {
                          setOtpsent(false);
                          setloading(false);
                          toast.success(data.data, {
                            position: toast.POSITION.BOTTOM_LEFT,
                          });
                        })
                        .catch((err) => {
                          setloading(false);
                          toast.error(err.response.data, {
                            position: toast.POSITION.BOTTOM_LEFT,
                          });
                        });
                    }}
                  >
                    Send Otp{" "}
                  </Button>
                </Box>
                <Box>
                  <TextField
                    autoFocus
                    required
                    id="filled-required"
                    label="OTP"
                    defaultValue={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                  />
                </Box>
              </Form>
              <Box mt={2}>
                <Button
                  disabled={otpsent}
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    setloading(true);
                    sellerService
                      .VerifyOtp({ otp })
                      .then((data) => {
                        console.log(data);
                        setloading(false);
                        window.location.href = "/";
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
                  Verify{" "}
                </Button>
              </Box>
              <br />
            </CardContent>
          </Card>
        </Box>
      )}
    </IsLoggedin>
  );
};

export default ForgotPassword;
