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
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./userprofile.css";
import { toast } from "react-toastify";

export default function UserProfile() {
  const getData = () => {
    sellerService
      .getUserDetails()
      .then((data) => {
        console.log(data.fName);
        setfName(data.fName);
        setlName(data.lName);
        setCity(data.city);
        setCnic(data.cnic);
        setAddress(data.address);
        setPhone(data.phone);
        setStoreName(data.storeName);
        setDeliveryCharge(data.deliveryCharge);
        setPaymentDetails(data.paymentDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getData, []);

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState();
  const [paymentDetails, setPaymentDetails] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
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
                    defaultValue={fName}
                    label="First Name"
                    variant="standard"
                    onChange={(e) => {
                      setfName(e.target.value);
                    }}
                  />
                  <TextField
                    label="Last Name"
                    defaultValue={lName}
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
                  defaultValue={cnic}
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
                  defaultValue={storeName}
                  onChange={(e) => {
                    setStoreName(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Shop Address"
                  variant="standard"
                  defaultValue={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="City"
                  variant="standard"
                  defaultValue={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Phone No"
                  variant="standard"
                  defaultValue={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Payment Details"
                  variant="standard"
                  defaultValue={paymentDetails}
                  onChange={(e) => {
                    setPaymentDetails(e.target.value);
                  }}
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  label="Delivery Charges"
                  variant="standard"
                  defaultValue={deliveryCharge}
                  onChange={(e) => {
                    setDeliveryCharge(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="sellerUpdateImg"
                />

                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div>
                {/* <button className="sellerUpdateButton">Update\</button> */}
                <Button
                  className="sellerUpdateButton"
                  variant="contained"
                  onClick={(e) => {
                    console.log(
                      fName,
                      lName,
                      phone,
                      address,
                      city,
                      storeName,
                      deliveryCharge,
                      cnic,
                      paymentDetails
                    );
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
