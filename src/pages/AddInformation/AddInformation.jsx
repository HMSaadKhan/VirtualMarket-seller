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
  Switch,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { MarginBox } from "../../Styles/StyledBoxes";
import { SingleFileUpload } from "../../Components/AddSingleFile/SingleFileUpload";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

export default function AddInformation(props) {
  const [progress, setprogress] = useState();
  const config = {
    onUploadProgress: (progressEvent) => {
      setprogress((progressEvent.loaded / progressEvent.total) * 100);
    },
  };

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState("");
  const [onlinePaymentOption, setonlinePaymentOption] = useState(false);
  const [sameCityDeliveryCharge, setDeliveryCharge] = useState();
  const [diffCityDeliveryCharge, setDifDeliveryCharge] = useState();
  const [images, setImages] = useState([]);
  const [cities, setcities] = useState([]);
  const [NTN, setNTN] = useState();
  const [accountNumber, setaccountNumber] = useState("");
  const [accountTitle, setaccountTitle] = useState("");
  const [bankTitle, setbankTitle] = useState("");

  const [loading, setloading] = useState(false);

  let temp = images;
  const imageArray = (e, index) => {
    temp[index] = e;
    setImages(temp);
  };

  const send = () => {
    setloading(true);
    console.log(images);
    const formData = new FormData();
    formData.append("fName", fName);
    formData.append("lName", lName);
    formData.append("cnic", cnic);
    formData.append("city", city);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("storeName", storeName);
    formData.append("onlinePaymentOption", onlinePaymentOption);
    formData.append("sameCityDeliveryCharge", sameCityDeliveryCharge);
    formData.append("diffCityDeliveryCharge", diffCityDeliveryCharge);
    formData.append("ntn", NTN);
    formData.append("accountNumber", accountNumber);
    formData.append("accountTitle", accountTitle);
    formData.append("bankTitle", bankTitle);

    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]);
    }

    console.log(formData);
    sellerService
      .addDetails(formData, config)
      .then((data) => {
        setloading(false);
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        props.history.push("/");
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
        <LoadingScreen bool={loading} progress={progress} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
              <Card sx={{}}>
                <CardContent>
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    Personal Information
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
                                label="Last Name"
                                value={lName}
                                variant="standard"
                                onChange={(e) => {
                                  setlName(e.target.value);
                                }}
                              />
                            </MarginBox>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <MarginBox>
                              <TextField
                                type="number"
                                label="CNIC"
                                value={cnic}
                                variant="standard"
                                helperText="e.g. 3520265935693"
                                onChange={(e) => {
                                  setCnic(e.target.value);
                                }}
                              />
                            </MarginBox>
                            <MarginBox>
                              <TextField
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
                        </Box>
                        <Box
                          mr={5}
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                          }}
                        >
                          <MarginBox sx={{ width: "150px" }}>
                            <Typography>Profile Picture</Typography>
                            <SingleFileUpload
                              index={0}
                              imageArray={imageArray}
                            />
                          </MarginBox>
                          <MarginBox sx={{ width: "150px" }}>
                            <Typography>CNIC Front</Typography>
                            <SingleFileUpload
                              index={1}
                              imageArray={imageArray}
                            />
                          </MarginBox>
                          <MarginBox sx={{ width: "150px" }}>
                            <Typography>CNIC Back</Typography>
                            <SingleFileUpload
                              index={2}
                              imageArray={imageArray}
                            />
                          </MarginBox>
                        </Box>
                      </Box>
                      <Typography
                        variant="h4"
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
                                onChange={(e) => {
                                  setStoreName(e.target.value);
                                }}
                              />
                            </MarginBox>
                            <MarginBox>
                              <FormControl
                                sx={{ width: "200px", maxWidth: "200px" }}
                              >
                                <InputLabel variant="standard">City</InputLabel>

                                <Select
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
                          <Box sx={{ display: "flex" }}>
                            <MarginBox>
                              <TextField
                                type="number"
                                label="Delivery charges"
                                helperText=" Same city Delivery Charges"
                                variant="standard"
                                value={sameCityDeliveryCharge}
                                onChange={(e) => {
                                  setDeliveryCharge(e.target.value);
                                }}
                              />
                            </MarginBox>
                            <MarginBox>
                              <TextField
                                type="number"
                                label="Delivery charges"
                                helperText="Different city Delivery Charges"
                                variant="standard"
                                value={diffCityDeliveryCharge}
                                onChange={(e) => {
                                  setDifDeliveryCharge(e.target.value);
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
                              fullWidth
                              label="NTN"
                              variant="standard"
                              value={NTN}
                              onChange={(e) => {
                                setNTN(e.target.value);
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              marginLeft: "10px",
                              marginRight: "10px",
                            }}
                          >
                            <TextField
                              fullWidth
                              label="Shop Address"
                              variant="standard"
                              value={address}
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                            />
                          </Box>
                          <Box>
                            <MarginBox>
                              <FormLabel component="legend">
                                Online Payments
                              </FormLabel>
                              <Switch
                                checked={onlinePaymentOption}
                                onChange={switchChange}
                              />
                            </MarginBox>
                            {onlinePaymentOption ? (
                              <>
                                {" "}
                                <Box>
                                  <Typography
                                    variant="h4"
                                    color="primary"
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    Account Information
                                  </Typography>
                                  <MarginBox>
                                    <TextField
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
                              </>
                            ) : (
                              <></>
                            )}
                          </Box>
                        </Box>
                        <Box
                          mr={5}
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                          }}
                        >
                          <MarginBox sx={{ width: "150px" }}>
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
                          </MarginBox>
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
                    <Button variant="contained" onClick={() => send()}>
                      Add Information
                    </Button>
                  </MarginBox>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
