import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router-dom";
const IsLoggedin = (props) => {
  React.useEffect(() => {
    if (!sellerService.isLoggedIn()) {
      props.history.push("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(IsLoggedin);
