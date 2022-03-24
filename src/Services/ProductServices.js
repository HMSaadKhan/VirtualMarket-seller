import GenericService from "./GenericService";

import axios from "axios";
import jwtDecode from "jwt-decode";
// axios.defaults.baseURL = "http://localhost:3000/api/";
//axios.defaults.baseURL = "http://192.168.100.144:3000/api/";
// axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

class ProductService extends GenericService {
  constructor() {
    super();
  }

  AddProduct = (data) =>
    new Promise((resolve, reject) => {
      axios
        .post("products/add", data)
        .then((data) => {
          console.log("Product Post");
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  GetCategories = () =>
    new Promise((resolve, reject) => {
      this.get("categories/getAll")
        .then((data) => {
          console.log("Product Post");
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  upload = (image) =>
    new Promise((resolve, reject) => {
      this.post("buyers/upload", image)
        .then((data) => {
          console.log("Avatar Post");
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  GetAllBySeller = () =>
    new Promise((resolve, reject) => {
      this.get("products/getAllBySeller")
        .then((data) => {
          console.log("Get Product Post");
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  getSellerProduct = (_id) =>
    new Promise((resolve, reject) => {
      axios
        .get("products/getDetailsForSeller/" + _id)
        .then((data) => {
          console.log("edit Product Post");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  deleteProduct = (_id) =>
    new Promise((resolve, reject) => {
      axios
        .delete("products/del/" + _id)
        .then((data) => {
          console.log("delete Product Post");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
let productService = new ProductService();
export default productService;
