import React, { useEffect } from "react";
import SingleFileUpload from "./SingleFileUpload";
import useState from "react-usestateref";
export default function CheckSignleFile() {
  const [images, setImages, imagesRef] = useState([]);

  let temp = images;
  const imageArray = (e, index) => {
    console.log(index);
    console.log(e);
    temp[index] = e;
    console.log(temp);
    setImages(temp);
    console.log(imagesRef.current);
  };

  return (
    <div>
      <SingleFileUpload index={0} imageArray={imageArray} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SingleFileUpload index={1} imageArray={imageArray} />
    </div>
  );
}
