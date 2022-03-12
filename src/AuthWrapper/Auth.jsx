import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router";
const Auth = (props) => {
  React.useEffect(() => {
    if (!sellerService.isLoggedIn()) {
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Auth);
