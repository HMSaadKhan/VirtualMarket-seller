import GenericService from "./GenericService";

import axios from "axios";

class WarrantyServices extends GenericService {
  constructor() {
    super();
  }
  getWarranty = () => axios.get("warranties/getBySeller/");
  giveResponse = (id, data) => axios.patch("warranties/respond/" + id, data);
}
let warrantyServices = new WarrantyServices();
export default warrantyServices;
