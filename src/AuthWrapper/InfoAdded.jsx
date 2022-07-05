/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router-dom";
const InfoAdded = (props) => {
  React.useEffect(() => {
    sellerService.getStatus().then((data) => {
      if (data.status === "APPROVED") {
        props.history.push("/");
      }
    });
  }, []);
  return <>{props.children}</>;
};

export default withRouter(InfoAdded);
