import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router-dom";
const Emailverification = (props) => {
  React.useEffect(() => {
    if (!sellerService.isLoggedIn()) {
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Emailverification);
