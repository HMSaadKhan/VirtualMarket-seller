import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useHistory } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";

const orderStatus = [
  "PLACED",
  "PACKAGING",
  "SHIPPING",
  "DELIVERED",
  "CANCELLED",
];
export default function OrderMenu() {
  const history = useHistory();

  return (
    <Box mt={10} ml={2} mr={2} sx={{ marginLeft: "215px" }}>
      <PageHeader heading={"ORDERS"} />
      <Card sx={{ backgroundColor: "#eeeeee", marginTop: "10px" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {orderStatus.map((status, index) => {
            return (
              <Button
                key={index}
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => {
                  history.push("/orders/" + status);
                }}
              >
                {status}
              </Button>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
}
