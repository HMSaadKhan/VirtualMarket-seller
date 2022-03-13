import React, { useState, useEffect } from "react";
import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  CardGiftcardstandard,
} from "@material-ui/icons";
import sellerService from "../../Services/SellerServices";
import { Publish, Shop2standard } from "@mui/icons-material";
import { TextField, Button, Box, Paper } from "@mui/material";
import "./userprofile.css";
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";

export default function UserProfile() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState();
  const [paymentDetails, setPaymentDetails] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [avatar, setAvatar] = useState("");

  React.useEffect(() => {
    sellerService
      .getUserDetails()
      .then((data) => {
        console.log(data);
        setfName(data.fName);
        setlName(data.lName);
        setCity(data.city);
        setCnic(data.cnic);
        setAddress(data.address);
        setPhone(data.phone);
        setStoreName(data.storeName);
        setDeliveryCharge(data.deliveryCharge);
        setPaymentDetails(data.paymentDetails);
        setAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const send = (event) => {
    const data = new FormData();

    data.append("File", avatar);
    console.log(data);
    sellerService
      .AddAvatar(data)
      .then((data) => {
        console.log(data);
        // window.location.reload();
        toast.success("Changes Saved Successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });

    // Axios.post("https://httpbin.org/anything", data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  return (
    <div className="seller">
      <div className="sellerTitleContainer">
        <h1 className="sellerTitle">Seller Profile</h1>
      </div>

      <div className="sellerContainer">
        <div className="sellerUpdate">
          <form className="sellerUpdateForm">
            <div className="sellerUpdateLeft">
              <div className="sellerUpdateName">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "30ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    value={fName}
                    label="First Name"
                    variant="standard"
                    onChange={(e) => {
                      setfName(e.target.value);
                    }}
                  />
                  <TextField
                    label="Last Name"
                    value={lName}
                    variant="standard"
                    onChange={(e) => {
                      setlName(e.target.value);
                    }}
                  />
                </Box>
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="CNIC"
                  value={cnic}
                  variant="standard"
                  onChange={(e) => {
                    setCnic(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Store Name"
                  variant="standard"
                  value={storeName}
                  onChange={(e) => {
                    setStoreName(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Shop Address"
                  variant="standard"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="City"
                  variant="standard"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Phone No"
                  variant="standard"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Payment Details"
                  variant="standard"
                  value={paymentDetails}
                  onChange={(e) => {
                    setPaymentDetails(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Delivery Charges"
                  variant="standard"
                  value={deliveryCharge}
                  onChange={(e) => {
                    setDeliveryCharge(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                {/* <img
                  src="https://Avatars.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="sellerUpdateImg"
                /> */}

                <img className="sellerUpdateImg" src={avatar} />

                {/* 
                  <Publish className="sellerUpdateIcon" />
                </label> */}
                <form>
                  <>
                    <label htmlFor="file"></label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => {
                        setAvatar(e.target.files[0]);
                      }}
                    />
                  </>
                </form>
              </div>
              <div>
                {/* <button className="sellerUpdateButton">Update\</button> */}
                <Button
                  className="sellerUpdateButton"
                  variant="contained"
                  onClick={(e) => {
                    console.log(avatar);
                    //send();

                    sellerService
                      .editUserDetails({
                        fName,
                        lName,
                        phone,
                        address,
                        city,
                        storeName,
                        deliveryCharge,
                        cnic,
                        paymentDetails,
                      })
                      .then((data) => {
                        console.log(data);
                        // window.location.reload();
                        toast.success("Changes Saved Successfully", {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      })
                      .catch((err) => {
                        console.log(err);
                        toast.error(err.response.data, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      });
                  }}
                >
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
