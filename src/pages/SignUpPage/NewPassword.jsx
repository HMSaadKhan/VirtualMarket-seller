import React from "react";
import { TextField, Button, Box, Card, CardContent } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Container, ColumnBox } from "../../Styles/StyledBoxes";

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

  return (
    <Container>
      <Card>
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
                console.log(_id, otp, password);
                sellerService
                  .resetPassword(_id, { otp, password }) //if gives error then check otp datatype
                  .then((data) => {
                    history.push("/Login");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewPassword;
