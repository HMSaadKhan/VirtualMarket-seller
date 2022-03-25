import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Publish } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
const Image = styled.img`
float: left;
width: 100px;
height: 100px;
margin: 5px;
border: 1px solid #ddd;
}`;
const SingleFileUpload = (props) => {
  const [ImagePreview, SetImagePreview, imgprRef] = useState(null);
  const [image, setImage, imgRef] = useState();
  const ImageSetting = (e) => {
    setImage(e.target.files[0]);
    
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        SetImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(imgRef.current);
  };

  return (
    <Grid m={10}>
      <label htmlFor="file"></label>
      {ImagePreview ? (
        <>
          <Image src={ImagePreview} />
          <CancelIcon onClick={() => SetImagePreview(null)} />
        </>
      ) : (
        <>
          <form>
            <input type="file" id="file" onChange={(e) => ImageSetting(e)} />
          </form>
        </>
      )}
    </Grid>
  );
};

export default SingleFileUpload;
