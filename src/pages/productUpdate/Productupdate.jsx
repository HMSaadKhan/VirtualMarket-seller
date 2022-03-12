import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  CardGiftcardOutlined,
} from "@material-ui/icons";
import { Publish, Shop2Outlined } from "@mui/icons-material";
import React from "react";
import "./productupdate.css";

export default function productupdate() {
  return (
    <div className="seller">
      <div className="sellerTitleContainer">
        <h1 className="sellerTitle">Edit Product</h1>
        <button className="sellerAddButton">Create</button>
      </div>

      <div className="sellerContainer">
        <div className="sellerDisplay">
          <div className="sellerDisplayTop">
            <img src="/" alt="" className="sellerDisplayImg" />

            <div className="sellerDisplayTopTitle">
              <span className="sellerDisplaySellerName">Haier AC 54000</span>
              <span className="sellerDisplaySellerTitle">Electronics</span>
            </div>
          </div>
          <div className="sellerDisplayBottom">
            <span className="sellerDisplayTitle">Product Details</span>
            <div className="sellerDisplayInfo">
              <PermIdentity className="sellerDisplayIcon" />
              <span className="sellerDisplayInfoTitle">54000 G3</span>
            </div>

            <div className="sellerDisplayInfo">
              <PhoneAndroid className="sellerDisplayIcon" />
              <span className="sellerDisplayInfoTitle">
                Haier Private Limited
              </span>
            </div>

            <span className="sellerDisplayTitle">Contact Details</span>
            <div className="sellerDisplayInfo">
              <CardGiftcardOutlined className="sellerDisplayIcon" />
              <span className="sellerDisplayInfoTitle">35463-9876543-9</span>
            </div>

            <div className="sellerDisplayInfo">
              <Shop2Outlined className="sellerDisplayIcon" />
              <span className="sellerDisplayInfoTitle">Saad Electronics</span>
            </div>

            <div className="sellerDisplayInfo">
              <MailOutline className="sellerDisplayIcon" />
              <span className="sellerDisplayInfoTitle">
                saadkhan155@gmail.com
              </span>
            </div>

            <div className="sellerDisplayInfo">
              <LocationSearching className="sellerDisplayIcon" />
              <span className="sellerDisplayInfoTitle">
                Shop.no.23, Shah Alam Market, Lahore
              </span>
            </div>
          </div>
        </div>
        <div className="sellerUpdate">
          <span className="sellerUpdateTitle">Edit</span>

          <form className="sellerUpdateForm">
            <div className="sellerUpdateLeft">
              <div className="sellerUpdateItem">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="saadkhan155"
                  className="sellerUpdateInput"
                />
              </div>

              <div className="sellerUpdateItem">
                <label>Product ID</label>
                <input
                  type="text"
                  placeholder="+92 34523123"
                  className="sellerUpdateInput"
                />
              </div>

              <div className="sellerUpdateItem">
                <label>Brand Name</label>
                <input
                  type="text"
                  placeholder="35463-9876543-9"
                  className="sellerUpdateInput"
                />
              </div>

              <div className="sellerUpdateItem">
                <label>Shop Name</label>
                <input
                  type="text"
                  placeholder="Saad Electronics"
                  className="sellerUpdateInput"
                />
              </div>

              <div className="sellerUpdateItem">
                <label>Quantity</label>
                <input
                  type="text"
                  placeholder="saadkhan155@gmail.com"
                  className="sellerUpdateInput"
                />
              </div>

              <div className="sellerUpdateItem">
                <label>Shop Address</label>
                <input
                  type="text"
                  placeholder="Shop.no.23, Shah Alam Market, Lahore"
                  className="sellerUpdateInput"
                />
              </div>
            </div>
            <div className="sellerUpdateRight">
              <div className="sellerUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="sellerUpdateImg"
                />

                <label htmlFor="file">
                  <Publish className="sellerUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  style={{ display: "none" }}
                />
              </div>

              <div>
                <button className="sellerUpdateButton">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
