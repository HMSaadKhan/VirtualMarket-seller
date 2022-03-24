import React, { useState, useEffect } from "react";
import sellerService from "../../Services/SellerServices";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import "./AddInformation.css";
import { toast } from "react-toastify";

import { Publish, Shop2standard } from "@mui/icons-material";
export default function AddInformation(props) {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState();
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [cnicFront, setCnicFront] = useState("");
  const [cnicBack, setCnicBack] = useState("");
  const [images, setImages] = useState(["1", "2", "3"]);
  const getVerificationdata = () => {
    sellerService
      .getStatus()
      .then((data) => {
        console.log(data);
        if (data.infoCompleted) {
          props.history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(getVerificationdata, []);
  let temp = images;
  const imageSet = (e, index) => {
    console.log(index);
    temp[index] = e.target.files[0];
    console.log(temp);
    setImages(temp);
    console.log(images);
  };

  const send = () => {
    console.log(images);
    const formData = new FormData();
    formData.append("fName", fName);
    formData.append("lName", lName);
    formData.append("cnic", cnic);
    formData.append("city", city);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("storeName", storeName);
    formData.append("paymentDetails", paymentDetails);
    formData.append("deliveryCharge", deliveryCharge);
    formData.append("image", images[0]);
    formData.append("image", images[1]);
    formData.append("image", images[2]);

    console.log(formData);
    sellerService
      .addDetails(formData)
      .then((data) => {
        console.log(data);
        toast.success("Changes Saved Successfully", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  return (
    <div className="seller">
      <div className="sellerTitleContainer">
        <h1 className="sellerTitle">Add Information</h1>
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
                <div>
                  <Typography>Profile Picture</Typography>
                  {/* <img className="sellerUpdateImg" src={avatarPreview} /> */}
                  <>
                    <br />
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => imageSet(e, 0)}
                    />
                  </>
                </div>
              </div>
              <div className="sellerUpdateUpload">
                <div>
                  <Typography>CNIC FRONT</Typography>
                  {/* <img className="sellerCNICImg" src={cnicFront} /> */}
                  <>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => imageSet(e, 1)}
                    />
                  </>
                </div>
                <div>
                  <Typography>CNIC BACK</Typography>
                  {/* <img className="sellerCNICImg" src={cnicFront} /> */}
                  <>
                    <input
                      type="file"
                      id="cnicFront"
                      onChange={(e) => imageSet(e, 2)}
                    />
                  </>
                </div>
              </div>
              <div>
                <Box mt={2}>
                  <Button variant="contained" onClick={send}>
                    Add
                  </Button>
                </Box>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
