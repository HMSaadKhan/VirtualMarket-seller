import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import SellerList from "./pages/sellerList/SellerList";
import SellerProduct from "./pages/sellerProducts/SellerProduct";
import UserProfile from "./pages/editProfile/UserProfile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import AddProduct from "./pages/AddProducts/AddProduct";
import ProductUpdate from "./pages/productUpdate/Productupdate";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import ForgotPassword from "./pages/SignUpPage/ForgotPassword";
import NewPassword from "./pages/SignUpPage/NewPassword";
import ChangePassword from "./pages/SignUpPage/ChangePassword";
import UploadImage from "./pages/ImageUpload/UploadImage";
import EmailVerification from "./pages/SignUpPage/EmailVerification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Topbar />

      <div className="container">
        <Sidebar />

        <Switch>
          <Route path="/orders" component={SellerList} />
          <Route path="/products" component={SellerProduct} />
          <Route path="/sellerprofile" component={UserProfile} />
          <Route path="/productupdate" component={AddProduct} />
          <Route path="/updateProduct" component={ProductUpdate} />
          <Route path="/Login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetPassword/:id" exact component={NewPassword} />
          <Route
            path="/emailverification"
            exact
            component={EmailVerification}
          />
          <Route path="/changepassword/" exact component={ChangePassword} />
          <Route path="/imageUpload" exact component={UploadImage} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
