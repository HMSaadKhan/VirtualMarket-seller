import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
export default function Featuredinfo({ name, num }) {
  const history = useHistory();
  const [route, setroute] = React.useState("");

  React.useEffect(() => {
    if (name === "New Orders") {
      setroute("/orders/PLACED");
    }
    if (name === "Pending Orders") {
      setroute("/orders/PACKAGING");
    }
    if (name === "Completed Orders") {
      setroute("/orders/DELIVERED");
    }
    if (name === "Current Balance") {
      setroute("/transactions/");
    }
  }, []);

  const Colors = (num) => {
    if (num > 10) {
      return "Black";
    }
    if (num <= 10) {
      return "Black";
    }
  };
  return (
    <Box>
      <Card
        sx={{ backgroundColor: "#fafafa", cursor: "pointer" }}
        onClick={() => {
          history.push(route);
        }}
      >
        <CardContent>
          <>
            <Typography
              align="left"
              variant="caption"
              color="primary"
              noWrap
              sx={{ fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <Typography
              mt={2}
              noWrap
              align="center"
              sx={{
                color: Colors(num),
                fontWeight: "bold",
                fontSize: { md: "30px", sm: "20px", xs: "15px" },
              }}
            >
              {name === "Current Balance" ? "PKR " : ""}
              {num}
            </Typography>
          </>
        </CardContent>
      </Card>
    </Box>
  );
}
