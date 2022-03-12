import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router-dom";
const LoginAuth = (props) => {
  React.useEffect(() => {
    if (sellerService.isLoggedIn()) {
      //props.history.push("/");
      <></>
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(LoginAuth);
