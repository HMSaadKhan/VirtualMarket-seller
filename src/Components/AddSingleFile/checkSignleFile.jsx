import React, { useEffect } from "react";
import SingleFileUpload from "./SinglFileUpload";
import useState from "react-usestateref";
export default function CheckSignleFile() {
  const [images, setImages, imagesRef] = useState([]);

  const imageArray = (e) => {
    setImages([...images, e]);
    console.log(imagesRef.current);
  };

  return (
    <div>
      <SingleFileUpload imageArray={imageArray} />
    </div>
  );
}
