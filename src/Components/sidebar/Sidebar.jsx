import React from "react";
import "./sidebar.css";
import { useHistory } from "react-router-dom";
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
import { Logout } from "@mui/icons-material";

export default function Sidebar() {
  const history = useHistory();
  return (
    <>
      {sellerService.isLoggedIn() ? (
        <>
          {" "}
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarmenu">
                <h3 className="sidebarTitle">Dashboard</h3>

                <ul className="sidebarList">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />

                    <a
                      href="#"
                      onClick={() => {
                        history.push("/");
                      }}
                    >
                      Home
                    </a>
                  </li>

                  {/* <li className='sidebarListItem'>
                    <Timeline className='sidebarIcon'/>
                    Analytics
                </li>

                <li className='sidebarListItem'>
                    <TrendingUp className='sidebarIcon'/>
                    Sales
                </li> */}
                </ul>
              </div>

              <div className="sidebarmenu">
                <h3 className="sidebarTitle">Menu</h3>

                <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <Person className="sidebarIcon" />

                    <a
                      href="#"
                      onClick={() => {
                        history.push("/orders");
                      }}
                    >
                      Orders
                    </a>
                  </li>

                  <li className="sidebarListItem">
                    <ShoppingBasketOutlined className="sidebarIcon" />
                    <a
                      href="#"
                      onClick={() => {
                        history.push("/product");
                      }}
                    >
                      Products
                    </a>
                  </li>

                  <li className="sidebarListItem">
                    <MonetizationOnOutlined className="sidebarIcon" />

                    <a
                      href="#"
                      onClick={() => {
                        history.push("/sellerprofile");
                      }}
                    >
                      Seller Profile
                    </a>
                  </li>

                  <li className="sidebarListItem">
                    <AssessmentOutlined className="sidebarIcon" />

                    <a
                      href="#"
                      onClick={() => {
                        history.push("/productupdate  ");
                      }}
                    >
                      Edit Product
                    </a>
                  </li>
                  <li className="sidebarListItem">
                    <Logout className="sidebarIcon" />

                    <a
                      href="#"
                      onClick={() => {
                        history.push("/Login");
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebarmenu">
                <h3 className="sidebarTitle">Notifications</h3>

                <ul className="sidebarList">
                  {/* <li className='sidebarListItem'>
                    <MailOutlined className='sidebarIcon'/>
                    Mails
                </li> */}

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
                    <Timeline className="sidebarIcon" />
                    User Profile
                  </li>

                  <li className="sidebarListItem">
                    <ReportOutlined className="sidebarIcon" />
                    Reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
