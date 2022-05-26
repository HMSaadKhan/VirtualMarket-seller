import GenericService from "./GenericService";

import axios from "axios";

class TransactionServices extends GenericService {
  constructor() {
    super();
  }
  getCash = () => axios.get("transactions/getBySeller/");
  withdrawRequest = (data) =>
    axios.post("transactions/requestWithdrawal", data);
}
let transactionServices = new TransactionServices();
export default transactionServices;
