/* eslint-disable jsx-a11y/alt-text */
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
  InputAdornment,
} from "@mui/material";
import Switch from "@mui/material/Switch";

import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { MarginBox } from "../../Styles/StyledBoxes";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Inputs } from "../../Styles/StyledInputs";

export default function UserProfile() {
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState();
  const [onlinePaymentOption, setonlinePaymentOption] = useState(false);
  const [avatar, setAvatar] = useState();
  const [image, setImage] = useState();
  const [cities, setcities] = useState([]);
  const [loading, setloading] = useState(false);
  const [sameCityDeliveryCharge, setDeliveryCharge] = useState();
  const [diffCityDeliveryCharge, setDifDeliveryCharge] = useState();
  const [sellerInfo, setSellerInfo] = useState("");

  const getSellerInfo = () => {
    setloading(true);
    sellerService
      .getUserDetails()
      .then((data) => {
        console.log(data);
        setSellerInfo(data);
        setCity(data.city._id);
        setAddress(data.address);
        setPhone(data.phone);
        setStoreName(data.storeName);
        setDeliveryCharge(data.sameCityDeliveryCharge);
        setDifDeliveryCharge(data.diffCityDeliveryCharge);

        setonlinePaymentOption(data.onlinePaymentOption);
        setAvatar(data.avatar.link);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        console.log(err);
      });
  };
  React.useEffect(getSellerInfo, []);
  const send = async (event) => {
    setloading(true);
    const data = new FormData();
    data.append("image", image);
    await sellerService
      .AddAvatar(data)
      .then((data) => {
        setloading(false);
        getSellerInfo();
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

  return (
    <IsLoggedin>
      <EmailVerification>
        <LoadingScreen bool={loading} />
        {sellerInfo ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "70%" }}>
                <Box mt={9} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
                  <Card sx={{}}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        Personal Information
                      </Typography>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        <Box sx={{ width: "100%" }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "start",
                              justifyContent: "space-between",

                              height: "200px",
                            }}
                          >
                            <Box>
                              <Box sx={{ display: "flex" }}>
                                <MarginBox>
                                  <TextField
                                    disabled
                                    value={sellerInfo.fName}
                                    label="First Name"
                                    variant="standard"
                                    // onChange={(e) => {
                                    //   setfName(e.target.value);
                                    // }}
                                  />
                                </MarginBox>
                                <MarginBox>
                                  <TextField
                                    disabled
                                    label="Last Name"
                                    value={sellerInfo.lName}
                                    variant="standard"
                                    // onChange={(e) => {
                                    //   setlName(e.target.value);
                                    // }}
                                  />
                                </MarginBox>
                              </Box>
                              <Box sx={{ display: "flex" }}>
                                <MarginBox>
                                  <Inputs
                                    disabled
                                    type="number"
                                    label="CNIC"
                                    value={sellerInfo.cnicNumber}
                                    variant="standard"
                                    helperText="e.g. 3520265935693"
                                    InputLabelProps={{
                                      shrink: sellerInfo.cnicNumber.value
                                        ? false
                                        : true,
                                    }}
                                  />
                                </MarginBox>
                                <MarginBox>
                                  <Inputs
                                    type="number"
                                    label="Phone No"
                                    variant="standard"
                                    helperText="03XXXXXXXXX "
                                    value={phone}
                                    onChange={(e) => {
                                      setPhone(e.target.value);
                                    }}
                                  />
                                </MarginBox>
                              </Box>
                              <MarginBox sx={{ marginTop: "0px" }}>
                                <TextField
                                  disabled
                                  label="Email"
                                  variant="standard"
                                  value={sellerInfo.email}
                                  InputLabelProps={{
                                    shrink: sellerInfo.email.value
                                      ? false
                                      : true,
                                  }}
                                />
                              </MarginBox>
                            </Box>
                            <Box>
                              <MarginBox>
                                <img height="150" weight="150" src={avatar} />

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
                              <Box ml={5}>
                                <Button variant="contained" onClick={send}>
                                  Update Image
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                          <Typography
                            variant="h5"
                            color="primary"
                            sx={{ fontWeight: "bold" }}
                          >
                            Business Information
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "start",
                              justifyContent: "space-between",
                              height: "270px",
                            }}
                          >
                            <Box>
                              <Box sx={{ display: "flex" }}>
                                <MarginBox>
                                  {" "}
                                  <TextField
                                    label="Store Name"
                                    variant="standard"
                                    value={storeName}
                                    // InputLabelProps={{
                                    //   shrink: storeName.value ? false : true,
                                    // }}
                                    onChange={(e) => {
                                      setStoreName(e.target.value);
                                    }}
                                  />
                                </MarginBox>
                                <MarginBox>
                                  <FormControl sx={{ width: "25ch" }}>
                                    <InputLabel variant="standard">
                                      City
                                    </InputLabel>

                                    <Select
                                      disabled
                                      fullWidth
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
                              </Box>
                              <Box sx={{ display: "flex", width: "55ch" }}>
                                <MarginBox>
                                  <Inputs
                                    type="number"
                                    label="Same City Delivery Charges"
                                    // helperText=" "
                                    variant="standard"
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          PKR
                                        </InputAdornment>
                                      ),
                                    }}
                                    // InputLabelProps={{
                                    //   shrink: sameCityDeliveryCharge.value
                                    //     ? false
                                    //     : true,
                                    // }}
                                    value={sameCityDeliveryCharge}
                                    onChange={(e) => {
                                      setDeliveryCharge(e.target.value);
                                    }}
                                  />
                                </MarginBox>
                                <MarginBox>
                                  <Inputs
                                    type="number"
                                    label="Different City Delivery Charges"
                                    // helperText=""
                                    variant="standard"
                                    // InputLabelProps={{
                                    //   shrink: diffCityDeliveryCharge.value
                                    //     ? false
                                    //     : true,
                                    // }}
                                    value={diffCityDeliveryCharge}
                                    onChange={(e) => {
                                      setDifDeliveryCharge(e.target.value);
                                    }}
                                    InputProps={{
                                      startAdornment: (
                                        <InputAdornment position="start">
                                          PKR
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                </MarginBox>
                              </Box>

                              <Box
                                sx={{
                                  marginLeft: "10px",
                                  marginRight: "10px",
                                }}
                              >
                                <TextField
                                  disabled
                                  fullWidth
                                  multiline
                                  label="Shop Address"
                                  variant="standard"
                                  value={address}
                                  onChange={(e) => {
                                    setAddress(e.target.value);
                                  }}
                                />
                              </Box>
                              <MarginBox>
                                <FormLabel component="legend">
                                  Online Payments
                                </FormLabel>
                                <Switch
                                  checked={onlinePaymentOption}
                                  onChange={switchChange}
                                />
                              </MarginBox>
                            </Box>
                            <Box
                              mr={5}
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                              }}
                            >
                              {/* <MarginBox sx={{ width: "150px" }}>
                            <Typography>Utility Bill 1</Typography>
                            <SingleFileUpload
                              index={3}
                              imageArray={imageArray}
                            />
                          </MarginBox>
                          <MarginBox sx={{ width: "150px" }}>
                            <Typography>Utility Bill 2</Typography>
                            <SingleFileUpload
                              index={4}
                              imageArray={imageArray}
                            />
                          </MarginBox>
                          <MarginBox sx={{ width: "150px" }}>
                            <Typography>Account Statement</Typography>
                            <SingleFileUpload
                              index={5}
                              imageArray={imageArray}
                            />
                          </MarginBox> */}
                            </Box>
                          </Box>
                        </Box>

                        {/* <Box
                      sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        m={5}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                        }}
                      >
                        <MarginBox>
                          <Typography>Profile Picture</Typography>
                          <SingleFileUpload index={0} imageArray={imageArray} />
                        </MarginBox>
                        <MarginBox>
                          <Typography>CNIC Front</Typography>
                          <SingleFileUpload index={1} imageArray={imageArray} />
                        </MarginBox>
                        <MarginBox>
                          <Typography>CNIC Back</Typography>
                          <SingleFileUpload index={2} imageArray={imageArray} />
                        </MarginBox>
                      </Box>
                    </Box> */}
                      </Box>

                      <MarginBox>
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            sellerService
                              .editUserDetails({
                                phone,

                                storeName,
                                sameCityDeliveryCharge,
                                diffCityDeliveryCharge,
                                onlinePaymentOption,
                              })
                              .then((data) => {
                                console.log(data);
                                getSellerInfo();
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
                          Add Information
                        </Button>
                      </MarginBox>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <></>
        )}
      </EmailVerification>
    </IsLoggedin>
  );
}
