import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";

const warrantyStatus = ["REQUESTED", "RESPONDED", "IN-WARRANTY", "EXPIRED"];
export default function WarrantyMenu() {
  const history = useHistory();
  return (
    <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "220px" }}>
      <PageHeader heading={"WARRANTIES"} />

      <Card
        sx={{ width: "100%", backgroundColor: "#eeeeee", marginTop: "10px" }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {warrantyStatus.map((warranty, index) => {
            return (
              <Box key={index} sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    history.push(`/warranty/${warranty}`);
                  }}
                >
                  {warranty}
                </Button>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
}
