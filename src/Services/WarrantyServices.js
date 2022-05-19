import GenericService from "./GenericService";

import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000/api/";
//axios.defaults.baseURL = "http://192.168.100.144:3000/api/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

class WarrantyServices extends GenericService {
  constructor() {
    super();
  }
  getWarranty = () => axios.get("warranties/getBySeller/");
  giveResponse = (id, data) => axios.patch("warranties/respond/" + id, data);
}
let warrantyServices = new WarrantyServices();
export default warrantyServices;
