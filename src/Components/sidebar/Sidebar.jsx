import React from "react";
import "./sidebar.css";
import { useHistory, Link } from "react-router-dom";
import SideBarHide from "../../AuthWrapper/SideBarHide";
import sellerService from "../../Services/SellerServices";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  ShoppingBasketOutlined,
  MonetizationOnOutlined,
  AssessmentOutlined,
  ForumOutlined,
  MailOutlined,
  WorkOutlineOutlined,
  ReportOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
const StyledDiv = styled.div`
  a:visited {
    color: black;
  }
`;

export default function Sidebar() {
  const history = useHistory();
  return (
    <>
      {sellerService.isLoggedIn() ? (
        <div>
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarmenu">
                <h3 className="sidebarTitle">Dashboard</h3>

                <ul className="sidebarList">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                    <StyledDiv>
                      <Link to="/">Home</Link>
                    </StyledDiv>
                  </li>
                </ul>
              </div>

              <div className="sidebarmenu">
                <h3 className="sidebarTitle">Menu</h3>

                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <MonetizationOnOutlined className="sidebarIcon" />
                    <StyledDiv>
                      <Link to="/orders/PLACED">Orders</Link>
                    </StyledDiv>
                  </li>
                  <li className="sidebarListItem">
                    <MonetizationOnOutlined className="sidebarIcon" />
                    <StyledDiv>
                      <Link to="/warranty">Warranty</Link>
                    </StyledDiv>
                  </li>

                  <li className="sidebarListItem">
                    <ShoppingBasketOutlined className="sidebarIcon" />
                    <StyledDiv>
                      <Link to="/products">Products</Link>
                    </StyledDiv>
                  </li>
                </ul>
              </div>

              <div className="sidebarmenu">
                <h3 className="sidebarTitle">Notifications</h3>

                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <ForumOutlined className="sidebarIcon" />
                    Messages
                  </li>
                </ul>
              </div>

              <div className="sidebarmenu">
                <h3 className="sidebarTitle">About</h3>

                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <Person className="sidebarIcon" />
                    <StyledDiv>
                      <Link to="/sellerprofile">Seller Profile</Link>
                    </StyledDiv>
                  </li>
                  <button
                    className="logoutButton"
                    onClick={() => {
                      sellerService.logout();
                      history.push("/Login");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
