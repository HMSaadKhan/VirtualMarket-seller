import React from "react";
import sellerService from "../Services/SellerServices";
import { withRouter } from "react-router-dom";
const SideBarHide = (props) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!sellerService.isLoggedIn()) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(SideBarHide);
