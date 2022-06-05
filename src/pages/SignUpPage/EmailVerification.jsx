import React from "react";
import { TextField, Button, Card, CardContent, Box } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import styled from "styled-components";
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

  return (
    <IsLoggedin>
      <LoadingScreen bool={loading} />
      <Box
        sx={{
          paddingTop: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "220px",
            }}
          >
            <Card sx={{ maxWidth: 300, padding: "20px" }}>
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
                    Verify
                  </Button>
                </Box>
                <br />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </IsLoggedin>
  );
};

export default ForgotPassword;
