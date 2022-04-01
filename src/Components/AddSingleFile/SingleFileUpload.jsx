import React, { useEffect } from "react";
import useState from "react-usestateref";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const Image = styled.img`
float: left;
width: 100px;
height: 100px;
margin: 5px;
border: 1px solid #ddd;
}`;
const SingleFileUpload = (props) => {
  const { index, imageArray } = props;
  const [ImagePreview, SetImagePreview, imgprRef] = useState(null);
  const ImageSetting = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        SetImagePreview(reader.result);
      }
    };
    console.log(image);
    reader.readAsDataURL(image);
    imageArray(image, index);
  };

  return (
    <>
      {ImagePreview ? (
        <>
          <Image src={ImagePreview} />
          <CancelIcon onClick={() => SetImagePreview(null)} />
        </>
      ) : (
        <>
          <label htmlFor="file">
            <UploadFileIcon fontSize="large" />
          </label>
          <form>
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => ImageSetting(e)}
            />
          </form>
        </>
      )}
    </>
  );
};

export { SingleFileUpload };
