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
          console.log("Get Orders");
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
          console.log("Get Orders");
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
let orderService = new OrderService();
export default orderService;
