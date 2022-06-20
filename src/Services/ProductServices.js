/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";

class ProductService extends GenericService {
  constructor() {
    super();
  }

  AddProduct = (data, config) =>
    new Promise((resolve, reject) => {
      axios
        .post("products/add", data, config)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  editDetails = (_id, data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      axios
        .patch("products/editDetails/" + _id, data)
        .then((data) => {
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
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  GetAllBySeller = (page) =>
    new Promise((resolve, reject) => {
      this.get("products/getAllBySeller/" + page)
        .then((data) => {
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
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  deleteProductImage = (_id, data) =>
    new Promise((resolve, reject) => {
      axios
        .patch("products/deleteImage/" + _id, data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  UpdateProductImage = (_id, data) =>
    new Promise((resolve, reject) => {
      axios
        .patch("products/addImage/" + _id, data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
let productService = new ProductService();
export default productService;
