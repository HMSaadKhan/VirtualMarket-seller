import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import productService from "../../Services/ProductServices";

import "./UploadImage.css";
import Axios from "axios";

function UploadImage() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [age, setAge] = React.useState([]);
  const [category, setCategory] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const getCategories = () => {
    productService
      .GetCategories()
      .then((data) => {
        setAge(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getCategories, []);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
    console.log(age);
  };

  const send = (event) => {
    const data = new FormData();
    data.append("name", name);
    data.append("image", image);
    console.log(image);

    console.log(data);

    Axios.post("sellers/AddAvatar", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(event) => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept=".jpg"
              onChange={(event) => {
                const image = event.target.files[0];
                console.log(image);
                setImage(image);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">
          Categories
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Categories"
          onChange={setCategory}
        >
          {age.map((c) => (
            <MenuItem key={c.name} value={c}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default UploadImage;
