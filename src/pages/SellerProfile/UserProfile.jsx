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
  FormControlLabel,
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
  const [accountNumber, setaccountNumber] = useState("");
  const [accountTitle, setaccountTitle] = useState("");
  const [bankTitle, setbankTitle] = useState("");
  const [password, setpassword] = useState("");
  const [updateCheck, setupdateCheck] = useState(false);

  const [advancePaymentOption, setadvancePaymentOption] = useState(false);
  const [advancePaymentAmount, setadvancePaymentAmount] = useState();
  const [advancePaymentCriteria, setadvancePaymentCriteria] = useState();

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
        setadvancePaymentAmount(data.advancePaymentAmount);
        setadvancePaymentCriteria(data.advancePaymentCriteria);
        setadvancePaymentOption(data.advancePayment);
        setbankTitle(data.accountDetails.bankTitle);
        setaccountNumber(data.accountDetails.accountNumber);
        setaccountTitle(data.accountDetails.accountTitle);
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
    if (!event.target.checked) {
      setadvancePaymentOption(event.target.checked);
    }
  };
  const advancePaymentswitchChange = (event) => {
    setadvancePaymentOption(event.target.checked);
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
                                <FormControlLabel
                                  label={
                                    <Typography
                                      color="primary"
                                      sx={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                      }}
                                    >
                                      Online Payments
                                    </Typography>
                                  }
                                  control={
                                    <Switch
                                      checked={onlinePaymentOption}
                                      onChange={switchChange}
                                    />
                                  }
                                />
                              </MarginBox>
                              <Box>
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  Account Information
                                </Typography>
                                <MarginBox>
                                  <TextField
                                    disabled={!onlinePaymentOption}
                                    fullWidth
                                    label="Bank Title"
                                    variant="standard"
                                    value={bankTitle}
                                    onChange={(e) => {
                                      setbankTitle(e.target.value);
                                    }}
                                  />
                                </MarginBox>
                                <MarginBox>
                                  <TextField
                                    disabled={!onlinePaymentOption}
                                    fullWidth
                                    label="Account Title"
                                    variant="standard"
                                    value={accountTitle}
                                    onChange={(e) => {
                                      setaccountTitle(e.target.value);
                                    }}
                                  />
                                </MarginBox>
                                <MarginBox>
                                  <TextField
                                    disabled={!onlinePaymentOption}
                                    fullWidth
                                    label="Account Number"
                                    variant="standard"
                                    value={accountNumber}
                                    onChange={(e) => {
                                      setaccountNumber(e.target.value);
                                    }}
                                  />
                                </MarginBox>
                              </Box>
                              <Box sx={{}}>
                                <MarginBox>
                                  <FormControlLabel
                                    label={
                                      <Typography
                                        color="primary"
                                        sx={{
                                          fontWeight: "bold",
                                          fontSize: "20px",
                                        }}
                                      >
                                        Advance Payments
                                      </Typography>
                                    }
                                    control={
                                      <Switch
                                        disabled={!onlinePaymentOption}
                                        checked={advancePaymentOption}
                                        onChange={advancePaymentswitchChange}
                                      />
                                    }
                                  />
                                </MarginBox>
                                {!onlinePaymentOption && (
                                  <Typography color="red" ml={1}>
                                    Advance payments can only be enabled with
                                    online payments
                                  </Typography>
                                )}
                                <>
                                  <Typography
                                    variant="h4"
                                    color="primary"
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    Advance Payment Information
                                  </Typography>
                                  <Box>
                                    <MarginBox>
                                      <Inputs
                                        sx={{}}
                                        disabled={
                                          !(
                                            onlinePaymentOption &&
                                            advancePaymentOption
                                          )
                                        }
                                        label="Minimum Amount"
                                        variant="standard"
                                        value={advancePaymentCriteria}
                                        helperText="Amount is the minimum invoice for advance
                                payment.Should be Minimum PKR 1."
                                        onChange={(e) => {
                                          setadvancePaymentCriteria(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </MarginBox>
                                    <MarginBox>
                                      <Inputs
                                        disabled={
                                          !(
                                            onlinePaymentOption &&
                                            advancePaymentOption
                                          )
                                        }
                                        label="Advance Payment"
                                        placeholder="50"
                                        fullWidth
                                        variant="standard"
                                        value={advancePaymentAmount}
                                        helperText="Should be Minimum 1%."
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              %
                                            </InputAdornment>
                                          ),
                                        }}
                                        onChange={(e) => {
                                          setadvancePaymentAmount(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </MarginBox>
                                  </Box>
                                </>
                              </Box>
                              <MarginBox>
                                <Button
                                  variant="contained"
                                  onClick={(e) => {
                                    setupdateCheck(true);
                                  }}
                                >
                                  Update Information
                                </Button>
                              </MarginBox>
                              {updateCheck && (
                                <Box>
                                  <MarginBox>
                                    <TextField
                                      fullWidth
                                      type="password"
                                      label="Enter Your Password"
                                      variant="standard"
                                      value={password}
                                      onChange={(e) => {
                                        setpassword(e.target.value);
                                      }}
                                    />
                                  </MarginBox>
                                  <MarginBox>
                                    <Button
                                      variant="contained"
                                      onClick={(e) => {
                                        sellerService
                                          .editUserDetails({
                                            accountNumber,
                                            accountTitle,
                                            bankTitle,
                                            phone,
                                            storeName,
                                            password,
                                            sameCityDeliveryCharge,
                                            diffCityDeliveryCharge,
                                            onlinePaymentOption,
                                            advancePaymentAmount,
                                            advancePaymentCriteria,
                                            advancePayment:
                                              advancePaymentOption,
                                          })
                                          .then((data) => {
                                            getSellerInfo();
                                            setupdateCheck(false);
                                            toast.success(data.data, {
                                              position:
                                                toast.POSITION.BOTTOM_LEFT,
                                            });
                                          })
                                          .catch((err) => {
                                            toast.error(err.response.data, {
                                              position:
                                                toast.POSITION.BOTTOM_LEFT,
                                            });
                                          });
                                      }}
                                    >
                                      confirm
                                    </Button>
                                  </MarginBox>
                                </Box>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
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
