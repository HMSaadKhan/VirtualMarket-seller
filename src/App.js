import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import Orders from "./pages/OrderList/Orders";
import SellerProduct from "./pages/sellerProducts/SellerProduct";
import UserProfile from "./pages/SellerProfile/UserProfile";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AddProduct from "./pages/AddProducts/AddProduct";
import ProductUpdate from "./pages/productUpdate/Productupdate";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import ForgotPassword from "./pages/SignUpPage/ForgotPassword";
import NewPassword from "./pages/SignUpPage/NewPassword";
import EmailVerification from "./pages/SignUpPage/EmailVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddInformation from "./pages/AddInformation/AddInformation";
import checkSingleFile from "./Components/AddSingleFile/checkSignleFile";
import ProductInformation from "./pages/productUpdate/ProductInformation";
import NotFound from "./pages/NotFound/NotFound";
import Warranty from "./pages/Warranty/Warranty";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/myStyleSheet";
import Verify from "./Contexts/Verification/Verify";
import SellerAmount from "./pages/Transactions/SellerAmount";
import OrdersDetails from "./pages/OrderList/OrdersDetails";
import AprovalWait from "./pages/AdminMessages/AprovalWait";
import SellerBlocked from "./pages/AdminMessages/SellerBlocked";
import SocketAPI from "./Contexts/SocketAPI/SocketAPi";
import WarrantyDetails from "./pages/Warranty/WarrantyDetails";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <SocketAPI>
        <Verify>
          <Router>
            <ToastContainer />

            <Topbar />
            <Sidebar />

            <Switch>
              <Route path="/orders/:status" component={Orders} />
              <Route
                path={["/:some/orderdetails/:id", "/orderdetails/:id"]}
                component={OrdersDetails}
              />
              <Route
                path={["/warrantydetails/:id"]}
                component={WarrantyDetails}
              />
              <Route path="/warranty/:status" component={Warranty} />
              <Route path="/products/:page?" component={SellerProduct} />
              <Route path="/sellerprofile" component={UserProfile} />
              <Route path="/addproduct" component={AddProduct} />
              <Route path="/editDetails/:id" component={ProductUpdate} />
              <Route
                path="/product-information/:id"
                component={ProductInformation}
              />
              <Route path="/Login" exact component={Login} />
              <Route path="/transactions" exact component={SellerAmount} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/forgotpassword" component={ForgotPassword} />
              <Route path="/resetPassword/:id" exact component={NewPassword} />
              <Route path="/emailverification" component={EmailVerification} />
              <Route path="/check" exact component={checkSingleFile} />
              <Route path="/add-information" exact component={AddInformation} />
              <Route path="/approvalWait" exact component={AprovalWait} />
              <Route path="/blocked" exact component={SellerBlocked} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" exact component={Home} />
              <Redirect to="/not-found" />
            </Switch>
          </Router>
        </Verify>
      </SocketAPI>
    </ThemeProvider>
  );
}

export default App;
