import React, { useState } from "react";

import "./UploadImage.css";
import Axios from "axios";

function UploadImage() {
  const [name, setName] = useState();
  const [avatar, setFile] = useState();
  const send = (event) => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", avatar);
    console.log(avatar);

    console.log(data);

    Axios.post("sellers/AddAvatar", avatar)
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
                const file = event.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default UploadImage;
