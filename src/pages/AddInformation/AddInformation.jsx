import React, { useState, useEffect } from "react";
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
import { styled } from "@mui/material/styles";
import { SingleFileUpload } from "../../Components/AddSingleFile/SingleFileUpload";
import EmailVerification from "../../AuthWrapper/EmailVerification";
import IsLoggedin from "../../AuthWrapper/IsLoggedin";

export default function AddInformation(props) {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [cnic, setCnic] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [storeName, setStoreName] = useState("");
  const [onlinePaymentOption, setonlinePaymentOption] = useState("false");
  const [deliveryCharge, setDeliveryCharge] = useState();
  const [images, setImages] = useState(["1", "2", "3"]);
  const [cities, setcities] = useState([]);
  const [loading, setloading] = useState(false);

  // const getVerificationdata = () => {
  //   setloading(true);
  //   sellerService.getStatus().then((data) => {
  //     setloading(false);
  //     if (data.infoCompleted) {
  //       props.history.push("/");
  //     }
  //   });
  // };
  // useEffect(getVerificationdata, []);

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
    formData.append("deliveryCharge", deliveryCharge);
    formData.append("image", images[0]);
    formData.append("image", images[1]);
    formData.append("image", images[2]);

    console.log(formData);
    sellerService
      .addDetails(formData)
      .then((data) => {
        console.log(data);
        setloading(false);
        toast.success(data.data, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        props.history.push("/");
      })
      .catch((err) => {
        setloading(false);
        console.log(err.response);
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
        <Box
          sx={{
            flex: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5%",
          }}
        >
          <LoadingScreen bool={loading} />
          <Card sx={{ minWidth: 900, maxWidth: 900 }}>
            <CardContent>
              <h1>Add Information</h1>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{ width: "25%" }}>
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
                      label="CNIC"
                      value={cnic}
                      variant="standard"
                      onChange={(e) => {
                        setCnic(e.target.value);
                      }}
                    />
                  </MarginBox>
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
                    <TextField
                      label="Shop Address"
                      variant="standard"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <FormLabel component="legend">Online Payments</FormLabel>
                    <Switch
                      sx={{ color: "error" }}
                      checked={onlinePaymentOption}
                      onChange={switchChange}
                    />
                  </MarginBox>
                </Box>
                <Box sx={{ width: "25%" }}>
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
                  <MarginBox>
                    <TextField
                      label="Phone No"
                      variant="standard"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox>
                    <FormControl sx={{ width: "100%" }}>
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
                      onChange={(e) => {
                        setDeliveryCharge(e.target.value);
                      }}
                    />
                  </MarginBox>
                  <MarginBox></MarginBox>
                  <MarginBox></MarginBox>
                </Box>
                <Box sx={{ width: "50%" }}>
                  <Box
                    m={5}
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                      maxWidth: "80%",
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
                </Box>
              </Box>

              <MarginBox>
                <Button variant="contained" onClick={() => send()}>
                  Add Information
                </Button>
              </MarginBox>
            </CardContent>
          </Card>
        </Box>
      </EmailVerification>
    </IsLoggedin>
  );
}
