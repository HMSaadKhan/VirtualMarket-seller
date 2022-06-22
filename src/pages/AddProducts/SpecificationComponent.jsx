import React, { useState } from "react";
import { Box, Button, InputAdornment } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { TextField } from "@mui/material";
import { MarginBox } from "../../Styles/StyledBoxes";
import SpecificationObject from "./SpecificationObject";

export default function SpecificationComponent() {
  const [specificationList, setspecificationList] = useState([]);
  const [specifications, setspecifications] = useState([]);

  const deleteSpecification = (index) => {
    console.log(index);
    specifications.slice(index, 1);
    specificationList.slice(index, 1);

    console.log(specifications);
    console.log(specificationList);
  };
  console.log(specifications);
  console.log(specificationList);

  React.useEffect(() => {}, []);

  const onAddBtnClick = (event) => {
    setspecificationList([
      ...specificationList,
      <SpecificationObject
        key={specificationList.length}
        index={specificationList.length}
        setspecifications={setspecifications}
        specifications={specifications}
        specificationList={specificationList}
        deleteSpecification={deleteSpecification}
      />,
    ]);
  };

  return (
    <div>
      {" "}
      <MarginBox>
        <Button
          variant={"contained"}
          startIcon={<AddCircleOutlineIcon fontSize="medium" />}
          onClick={onAddBtnClick}
        >
          Add
        </Button>
      </MarginBox>
      {specificationList}
      {/* <Box sx={{ display: "flex", width: "100%" }}>
        <MarginBox>
          <TextField
            value={specname}
            onChange={(e) => setspecname(e.target.value)}
            //   InputProps={{
            //     startAdornment: (
            //       <InputAdornment position="start">Name</InputAdornment>
            //     ),
            //   }}
          />
        </MarginBox>
        <MarginBox>
          <TextField
            value={specvalue}
            onChange={(e) => setspecvalue(e.target.value)}
            //   InputProps={{
            //     startAdornment: (
            //       <InputAdornment position="start">Value</InputAdornment>
            //     ),
            //   }}
          />
        </MarginBox>
      </Box> */}
    </div>
  );
}
