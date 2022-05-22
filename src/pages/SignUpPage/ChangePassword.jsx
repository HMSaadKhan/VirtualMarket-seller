import React from "react";
import { TextField, Button } from "@mui/material";
import sellerService from "../../Services/SellerServices";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

//import Auth from "../../Components/AuthWrapper/Auth";

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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const ChangenewPassword = (props) => {
  const [oldPassword, setOldPassword] = React.useState();
  const [newPassword, setNewPassword] = React.useState("");
  const history = useHistory();

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Change Password</Title>
          <Form>
            <Input
              placeholder="Old Password"
              type="Password"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />

            <TextField
              placeholder="New Password"
              type="Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </Form>
          <br />
          <Button
            color="success"
            variant="contained"
            onClick={(e) => {
              sellerService
                .changePassword({ oldPassword, newPassword }) //if gives error then check oldPassword datatype
                .then((data) => {
                  history.push("/AccountSettings");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Save
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default ChangenewPassword;
