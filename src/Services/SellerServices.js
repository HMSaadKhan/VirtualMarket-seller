/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";
import jwtDecode from "jwt-decode";

class SellerServices extends GenericService {
  constructor() {
    super();
  }
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("sellers/login", { email, password })
        .then((token) => {
          console.log("login post");
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });
  register = (data) => axios.post("sellers/signup", data);
  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      const Jwt = jwtDecode(jwt);
      return Jwt._id;
    } catch (ex) {
      return null;
    }
  };
  getToken = () => {
    return localStorage.getItem("token");
  };

  getUserName = () =>
    new Promise((resolve, reject) => {
      axios
        .get("sellers/getName")
        .then((data) => {
          console.log("get Name");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  forgotPassword = (email) =>
    new Promise((resolve, reject) => {
      this.post("sellers/forgotPassword", { email })
        .then((data) => {
          console.log("forgotPassword Post");
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  resetPassword = (_id, data) =>
    new Promise((resolve, reject) => {
      axios
        .patch("sellers/resetPassword/" + _id, data)
        .then((token) => {
          console.log("reset password");
          resolve(token);
        })
        .catch((error) => {
          reject(error);
        });
    });

  getUserDetails = () =>
    new Promise((resolve, reject) => {
      this.get("sellers/getDetails")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  editUserDetails = (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      axios
        .patch("sellers/editDetails", data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  changePassword = (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      axios
        .patch("sellers/changePassword", data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  verificationOTP = () => axios.post("sellers/getVerificationCode");

  VerifyOtp = (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      this.post("sellers/verify", data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  getStatus = () =>
    new Promise((resolve, reject) => {
      this.get("sellers/getStatus")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  AddAvatar = (image) =>
    new Promise((resolve, reject) => {
      this.post("sellers/editAvatar", image)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  AddProduct = (data) =>
    new Promise((resolve, reject) => {
      this.post("products/add", data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  addDetails = (files, config) =>
    new Promise((resolve, reject) => {
      axios
        .patch("sellers/addDetails", files, config)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  GetCities = () =>
    new Promise((resolve, reject) => {
      this.get("cities/getAll")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  GetBalance = () => axios.get("sellers/getBalance/");
}
let sellerServices = new SellerServices();
export default sellerServices;
