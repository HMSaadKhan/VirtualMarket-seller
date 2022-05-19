import React from "react";
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import Charts from "../../Components/charts/Charts";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import styled from "styled-components";
import LoginAuth from "../../AuthWrapper/LoginAuth";
import { Box } from "@mui/material";
const Container = styled.div`
  flex: 4;
`;

const Divider = styled.div`
  display: flex;
  margin: 20px;
`;

export default function Home() {
  return (
    <LoginAuth>
      <Container>
        <Box sx={{ display: "flex", marginLeft: "20px" }}>
          <Box>
            <Featuredinfo name={"New Orders"} num={"10"} />
          </Box>

          <Box>
            <Featuredinfo name={"Pending Orders"} num={"10"} />
          </Box>
          <Box>
            <Featuredinfo name={"Completed Orders"} num={"10"} />
          </Box>
          <Featuredinfo name={"Current Balance"} num={"10"} />
        </Box>
        <Divider></Divider>
      </Container>
    </LoginAuth>
  );
}
