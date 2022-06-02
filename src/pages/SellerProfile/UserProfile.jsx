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
  CardContent,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";

import { toast } from "react-toastify";
import { DisplayImage } from "../../Components/AddSingleFile/DisplayImage";
import { styled } from "@mui/material/styles";
import { Container, MarginBox } from "../../Styles/StyledBoxes";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

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
  const [loading, setloading] = useState(false);

  React.useEffect(() => {
    setloading(true);
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
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  }, []);
  const send = async (event) => {
    setloading(true);
    const data = new FormData();
    data.append("image", image);
    await sellerService
      .AddAvatar(data)
      .then((data) => {
        setloading(false);
        window.location.reload();
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((err) => {
        setloading(false);
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

  const StyledButton = styled(Button)({
    color: "#FF0000",
    backgroundColor: "#fff",
    marginLeft: "10px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#FF0002",
      color: "#ffff",
    },
  });

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
        <Container>
          <Card>
            <CardContent>
              <MarginBox>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Seller Profile
                </Typography>
              </MarginBox>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box>
                  <MarginBox>
                    <TextField
                      disabled
                      value={fName}
                      label="First Name"
                      variant="standard"
                      onChange={(e) => {
                        setfName(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      disabled
                      label="CNIC"
                      value={cnic}
                      helperText="e.g 3520259658962"
                      variant="standard"
                      onChange={(e) => {
                        setCnic(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Store Name"
                      variant="standard"
                      value={storeName}
                      InputLabelProps={{ shrink: storeName ? true : false }}
                      onChange={(e) => {
                        setStoreName(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Delivery Charges"
                      variant="standard"
                      helperText=" Same city Delivery Charges"
                      value={deliveryCharge}
                      onChange={(e) => {
                        setDeliveryCharge(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      id="address"
                      multiline
                      label="Store Address"
                      variant="standard"
                      value={address}
                      InputLabelProps={{ shrink: address ? true : false }}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <FormLabel component="legend">Online Payments</FormLabel>
                    <Switch
                      sx={{ color: "red" }}
                      checked={onlinePaymentOption}
                      onChange={switchChange}
                    />
                  </MarginBox>
                </Box>

                <Box>
                  <MarginBox>
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
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Phone No"
                      variant="standard"
                      value={phone}
                      helperText="03xxxxxxxxx"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
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
                  </MarginBox>
                  <MarginBox>
                    <TextField
                      label="Delivery Charges"
                      variant="standard"
                      value={deliveryCharge}
                      helperText="Different city Delivery Charges"
                      onChange={(e) => {
                        setDeliveryCharge(e.target.value);
                      }}
                    />
                  </MarginBox>
                </Box>
                <Box>
                  <MarginBox>
                    <img height="200" weight="200" src={avatar} />

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
                  </MarginBox>
                  <MarginBox>
                    <StyledButton variant="contained" onClick={send}>
                      Update Image
                    </StyledButton>
                  </MarginBox>
                </Box>
              </Box>
              <MarginBox>
                <StyledButton
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
                </StyledButton>
              </MarginBox>
            </CardContent>
          </Card>
        </Container>
      </EmailVerification>
    </IsLoggedin>
  );
}
