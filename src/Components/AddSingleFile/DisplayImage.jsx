import React, { useEffect } from "react";
import useState from "react-usestateref";
import { Publish } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { SingleFileUpload } from "./SingleFileUpload";
const Image = styled.img`
float: left;
width: 100px;
height: 100px;
margin: 5px;
border: 1px solid #ddd;
}`;
const DeleteIcon = styled(CancelIcon)`
  margin-bottom: 25px;
  cursor: pointer;
  left: 50%;
  bottom: 50%;
`;
const DisplayImage = (props) => {
  const { link, uploadImage, index, deleteImage } = props;
  const imageArray = (e, index) => {
    console.log(index);
    console.log(e);
    uploadImage(e);
  };
  return (
    <>
      {link[index] ? (
        <>
          {" "}
          <Image src={link[index].link} alt="image" />
          <DeleteIcon onClick={() => deleteImage(link[index].cloudinaryID)} />
        </>
      ) : (
        <>
          <SingleFileUpload index={index} imageArray={imageArray} />
        </>
      )}
    </>
  );
};

export { DisplayImage };
