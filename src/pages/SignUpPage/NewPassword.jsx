import React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import sellerService from "../../Services/SellerServices";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  // width: 20%;
  // padding: 20px;
  // background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const NewPassword = (props) => {
  const [otp, setOtp] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const _id = props.match.params.id;

  return (
    <Container>
      <Wrapper>
        <Title>New Password</Title>

        <Box ml={4}>
          {" "}
          <TextField
            label="OTP"
            defaultValue={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
        </Box>
        <br />
        <Box ml={4}>
          <TextField
            label="New Password"
            type="password"
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <br />
        <Box ml={4}>
          {" "}
          <Button
            color="success"
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
      </Wrapper>
    </Container>
  );
};

export default NewPassword;
