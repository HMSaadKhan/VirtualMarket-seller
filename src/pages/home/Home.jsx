import React from "react";
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import Charts from "../../Components/charts/Charts";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;

const Divider = styled.div`
  display: flex;
  margin: 20px;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Featuredinfo />
        <Charts />
        <Divider>
          <WidgetSm />
          <WidgetLg />
        </Divider>
      </Container>
    </>
  );
}
