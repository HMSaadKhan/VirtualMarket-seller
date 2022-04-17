import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import OrderList from "./pages/OrderList/OrderList";
import SellerProduct from "./pages/sellerProducts/SellerProduct";
import UserProfile from "./pages/SellerProfile/UserProfile";
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
import EmailVerification from "./pages/SignUpPage/EmailVerification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddInformation from "./pages/AddInformation/AddInformation";
import checkSingleFile from "./Components/AddSingleFile/checkSignleFile";
import ProductInformation from "./pages/productUpdate/ProductInformation";
import OrderMenu from "./pages/OrderList/OrderMenu";
function App() {
  return (
    <Router>
      <ToastContainer />
      <Topbar />

      <div className="container">
        <Sidebar /> 
        <Switch>
          <Route path="/orders/:status" component={OrderList} />
          <Route path="/products" component={SellerProduct} />
          <Route path="/sellerprofile" component={UserProfile} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/editDetails/:id" component={ProductUpdate} />
          <Route
            path="/product-information/:id"
            component={ProductInformation}
          />
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
          <Route path="/check" exact component={checkSingleFile} />
          <Route path="/add-information" exact component={AddInformation} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
