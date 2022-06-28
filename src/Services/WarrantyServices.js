/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";

class WarrantyServices extends GenericService {
  constructor() {
    super();
  }
  getWarranty = (status) => axios.get("warranties/getBySeller/" + status);
  GetWarrantyDetails = (id) => axios.get("warranties/getDetails/" + id);
  giveResponse = (id, data) => axios.patch("warranties/respond/" + id, data);
}
let warrantyServices = new WarrantyServices();
export default warrantyServices;
