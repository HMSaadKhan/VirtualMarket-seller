import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  CardGiftcardstandard,
} from "@material-ui/icons";
import { Publish, Shop2standard } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";
import "./userprofile.css";

export default function UserProfile() {
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
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                  />
                </Box>
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="CNIC"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Store Name"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Shop Address"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="City"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Phone No"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Payment Details"
                  variant="standard"
                />
              </div>

              <div className="sellerUpdateItem">
                <TextField
                  id="standard-basic"
                  label="Delivery Charges"
                  variant="standard"
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
                <Button className="sellerUpdateButton" variant="contained">
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
