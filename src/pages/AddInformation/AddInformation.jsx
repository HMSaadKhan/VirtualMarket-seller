import React, { useState, useEffect } from "react";
import sellerService from "../../Services/SellerServices";
import { TextField, Button, Box, Paper } from "@mui/material";
import "./AddInformation.css";
import { toast } from "react-toastify";

import { Publish, Shop2standard } from "@mui/icons-material";
export default function AddInformation() {
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

  const send = (event) => {
    const data = new FormData();
    data.append("image", avatar);
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
                <img className="sellerUpdateImg" src={avatar} />
                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <form>
                  {" "}
                  <input
                    type="file"
                    id="file"
                    multiple
                    style={{ display: "none" }}
                    onChange={(e) => setAvatar(e)}
                  />
                </form>
              </div>
              <div className="sellerUpdateUpload">
                <img className="sellerCNICImg" src={avatar} />
                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <form>
                  {" CNIC Front"}
                  <input
                    type="file"
                    id="file"
                    multiple
                    style={{ display: "none" }}
                    onChange={(e) => setAvatar(e)}
                  />
                </form>
                <img className="sellerCNICImg" src={avatar} />
                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <form>
                  {"CNIC Back"}
                  <input
                    type="file"
                    id="file"
                    multiple
                    style={{ display: "none" }}
                    onChange={(e) => setAvatar(e)}
                  />
                </form>
              </div>
              <div>
                {/* <button className="sellerUpdateButton">Update\</button> */}
                <Button
                  className="sellerUpdateButton"
                  variant="contained"
                  onClick={(e) => {
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
                <br />
                <Box mt={2}>
                  <Button variant="contained" onClick={send}>
                    Update Image
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
