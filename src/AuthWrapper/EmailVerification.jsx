/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router-dom";
const Emailverification = (props) => {
  React.useEffect(() => {
    sellerService.getStatus().then((data) => {
      console.log(data);
      if (data.blocked) {
        props.history.push("/blocked");
      } else {
        if (!data.emailVerified) {
          props.history.push("/emailverification");
        }

        if (data.emailVerified) {
          if (data.status === "NEW" || data.status === "REJECTED") {
            props.history.push("/add-information");
          }
          if (data.status === "REQUESTED") {
            props.history.push("/APPROVALWAIT");
          }
        }
        if (data.emailVerified && data.status === "APPROVED") {
        }
      }
    });
  }, []);
  return <>{props.children}</>;
};

export default withRouter(Emailverification);
