import React, { useState, useEffect } from "react";

import { Publish } from "@material-ui/icons";
const SingleFileUpload = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  return (
    <>
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
          onChange={(e) => setImage(e)}
        />
      </form>
    </>
  );
};

export default SingleFileUpload;
