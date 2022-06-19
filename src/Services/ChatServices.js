/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";

class ChatServices extends GenericService {
  constructor() {
    super();
  }
  getChats = () => axios.get("chats/getSellerchats/");
}
let chatServices = new ChatServices();
export default chatServices;
