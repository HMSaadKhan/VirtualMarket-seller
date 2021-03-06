/* eslint-disable no-useless-constructor */
import axios from "axios";
axios.defaults.baseURL = "https://virtual-market-backend.herokuapp.com/api/";
//axios.defaults.baseURL = "http://localhost:3000/api/";
//axios.defaults.baseURL = "http://10.135.50.11:3000/api/";
//axios.defaults.baseURL = "http://192.168.100.144:3000/api/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
class GenericService {
  constructor() {}
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  patch = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .patch(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
export default GenericService;
