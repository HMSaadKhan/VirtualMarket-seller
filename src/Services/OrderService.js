/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";

class OrderService extends GenericService {
  constructor() {
    super();
  }

  GetOrders = (status) =>
    new Promise((resolve, reject) => {
      this.get("orders/getSellerOrders/" + status)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  GetOrderDetails = (id) =>
    new Promise((resolve, reject) => {
      this.get("orders/getorderdetails/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  changeOrderStatus = (_id) =>
    new Promise((resolve, reject) => {
      axios
        .patch("orders/changeStatus/" + _id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  concludeOrder = (_id, data) =>
    new Promise((resolve, reject) => {
      axios
        .patch("orders/concludeOrder/" + _id, data)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  OrdersCount = () =>
    new Promise((resolve, reject) => {
      axios
        .get("orders/getOrdersCount/")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  orderChart = () => axios.get("orders/getmonthlyorders");
}

let orderService = new OrderService();
export default orderService;
