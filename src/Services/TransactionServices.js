import GenericService from "./GenericService";

import axios from "axios";

class TransactionServices extends GenericService {
  constructor() {
    super();
  }
  geTransactions = () => axios.get("transactions/getBySeller/");
}
let transactionServices = new TransactionServices();
export default transactionServices;
