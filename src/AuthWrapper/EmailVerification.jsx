import React from "react";
import sellerService from "../Services/SellerServices";
import { VerifyContext } from "../Contexts/Verification/Verify";
import { withRouter } from "react-router-dom";
const Emailverification = (props) => {
  React.useEffect(() => {
    sellerService.getStatus().then((data) => {
      if (!data.emailVerified) {
        props.history.push("/emailverification");
      }
      if (data.emailVerified) {
        if (!data.infoCompleted) {
          props.history.push("/add-information");
        }
      }
      if (data.emailVerified && data.infoCompleted) {
      }
    });
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Emailverification);
