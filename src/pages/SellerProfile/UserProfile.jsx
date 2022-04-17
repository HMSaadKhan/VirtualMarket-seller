import React, { useState } from "react";
import sellerService from "../../Services/SellerServices";
import {
  TextField,
  Button,
  Box,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Card,
  Paper,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import "./userprofile.css";
import { toast } from "react-toastify";
import { DisplayImage } from "../../Components/AddSingleFile/DisplayImage";

export default function UserProfile() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState();
  const [onlinePaymentOption, setonlinePaymentOption] = useState(false);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [avatar, setAvatar] = useState();
  const [image, setImage] = useState();
  const [cities, setcities] = useState([]);

  React.useEffect(() => {
    sellerService
      .getUserDetails()
      .then((data) => {
        console.log(data);
        setfName(data.fName);
        setlName(data.lName);
        setCity(data.city._id);
        setCnic(data.cnicNumber);
        setAddress(data.address);
        setPhone(data.phone);
        setStoreName(data.storeName);
        setDeliveryCharge(data.deliveryCharge);
        setonlinePaymentOption(data.onlinePaymentOption);
        setAvatar(data.avatar.link);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const send = async (event) => {
    console.log(avatar);
    const data = new FormData();
    data.append("image", image);
    console.log(data);
    await sellerService
      .AddAvatar(data)
      .then((data) => {
        console.log(data);
        window.location.reload();
        toast.success("Changes Image   Successfully", {
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
  const getCities = () => {
    sellerService
      .GetCities()
      .then((data) => {
        console.log(data);
        setcities(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getCities, []);

  const selectChange = (e) => {
    setCity(e.target.value);
  };
  const switchChange = (event) => {
    setonlinePaymentOption(event.target.checked);
  };
  return (
    <Box m={2} sx={{ backgroundColor: "orange" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Seller Profile
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <div>
            <Box
              m={1}
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <TextField
                  disabled
                  value={fName}
                  label="First Name"
                  variant="standard"
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                />
              </Box>
              <Box ml={2}>
                <TextField
                  disabled
                  label="Last Name"
                  value={lName}
                  variant="standard"
                  readOnly={true}
                  onChange={(e) => {
                    setlName(e.target.value);
                  }}
                />
              </Box>
            </Box>
            <Box
              m={1}
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <TextField
                  disabled
                  label="CNIC"
                  value={cnic}
                  variant="standard"
                  onChange={(e) => {
                    setCnic(e.target.value);
                  }}
                />
              </Box>
              <Box ml={2}>
                <TextField
                  label="Phone No"
                  variant="standard"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Box>
            </Box>

            <Box m={1}>
              <TextField
                label="Store Name"
                variant="standard"
                value={storeName}
                InputLabelProps={{ shrink: storeName ? true : false }}
                onChange={(e) => {
                  setStoreName(e.target.value);
                }}
              />
            </Box>

            <Box m={1}>
              <TextField
                multiline
                label="Shop Address"
                variant="standard"
                value={address}
                InputLabelProps={{ shrink: address ? true : false }}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Box>

            <Box m={1}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel variant="standard">City</InputLabel>

                <Select
                  variant="standard"
                  value={city}
                  onChange={(e) => {
                    selectChange(e);
                  }}
                >
                  {cities.map((item) => (
                    <MenuItem key={item} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <div></div>

            <div>
              <FormLabel component="legend">Online Payments</FormLabel>
              <Switch
                sx={{ color: "error" }}
                checked={onlinePaymentOption}
                onChange={switchChange}
              />
            </div>

            <div>
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
        </Box>
        <Box>
          <div>
            <div>
              <img className="sellerUpdateImg" src={avatar} />

              <form>
                <>
                  <label htmlFor="file"></label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </>
              </form>
            </div>
            <div>
              {/* <button className="sellerUpdateButton">Update\</button> */}
              <Button
                variant="contained"
                onClick={(e) => {
                  sellerService
                    .editUserDetails({
                      phone,
                      address,
                      city,
                      storeName,
                      deliveryCharge,
                      onlinePaymentOption,
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
        </Box>
      </Box>
    </Box>
  );
}
