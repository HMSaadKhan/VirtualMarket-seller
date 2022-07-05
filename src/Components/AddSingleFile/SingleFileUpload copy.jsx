import React, { useEffect } from "react";
import useState from "react-usestateref";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { IconButton } from "@mui/material";
const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 1px solid #ddd;
`;

const SingleFileUpload = (props) => {
  const { index, imageArray, images } = props;
  console.log(`Index ${index}`);
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
    console.log(index);
    imageArray(image, index);
  };

  return (
    <>
      {ImagePreview ? (
        <>
          <Box sx={{ display: "flex" }}>
            <Image src={ImagePreview} />
            <CancelIcon onClick={() => SetImagePreview(null)} />
          </Box>
        </>
      ) : (
        <>
          <IconButton>
            <label htmlFor="file">
              <AddPhotoAlternateIcon fontSize="large" />
            </label>
          </IconButton>
          <form>
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => ImageSetting(e)}
            />
            {console.log(images)}
          </form>
        </>
      )}
    </>
  );
};

export { SingleFileUpload };
