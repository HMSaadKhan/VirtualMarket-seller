/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";

class OfferService extends GenericService {
  constructor() {
    super();
  }
  offerReply = (id, data) => axios.patch("offers/reactoffer/" + id, data);
}
let offerService = new OfferService();
export default offerService;
