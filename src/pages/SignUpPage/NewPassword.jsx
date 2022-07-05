import React from "react";
import { TextField, Button, Box, Card, CardContent } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const NewPassword = (props) => {
  const [otp, setOtp] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const _id = props.match.params.id;
  const [loading, setloading] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "15%",
        paddingBottom: "5%",
      }}
    >
      <LoadingScreen bool={loading} />
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Title>New Password</Title>

          <Box>
            {" "}
            <TextField
              label="OTP"
              defaultValue={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </Box>

          <Box>
            <TextField
              label="New Password"
              type="password"
              defaultValue={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Box>

          <Box mt={2}>
            <Button
              variant="contained"
              onClick={(e) => {
                setloading(true);
                console.log(_id, otp, password);
                sellerService
                  .resetPassword(_id, { otp, password }) //if gives error then check otp datatype
                  .then((data) => {
                    setloading(false);
                    history.push("/Login");
                    toast.success(data.message, {
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
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewPassword;
