import React, { useState } from "react";
import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { MarginBox } from "../../Styles/StyledBoxes";

export default function SpecificationObject({
  specifications,
  setspecifications,
  index,
  specificationList,
  deleteSpecification,
}) {
  const [specname, setspecname] = useState("");
  const [specvalue, setspecvalue] = useState("");

  React.useEffect(() => {
    setspecifications([
      ...specifications,
      { name: specname, value: specvalue },
    ]);
  }, [specname, specvalue]);
  return (
    <div>
      <Box sx={{ display: "flex", width: "100%" }}>
        <MarginBox>
          <TextField
            value={specname}
            onChange={(e) => setspecname(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Name</InputAdornment>
              ),
            }}
          />
        </MarginBox>
        <MarginBox>
          <TextField
            value={specvalue}
            onChange={(e) => setspecvalue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Value</InputAdornment>
              ),
            }}
          />
        </MarginBox>
        <MarginBox>
          <IconButton
            onClick={() => {
              deleteSpecification(index);
            }}
          >
            <CloseIcon />
          </IconButton>
        </MarginBox>
      </Box>
    </div>
  );
}
