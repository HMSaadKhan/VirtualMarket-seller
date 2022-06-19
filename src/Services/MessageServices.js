/* eslint-disable no-useless-constructor */
import GenericService from "./GenericService";

import axios from "axios";

class MessageServices extends GenericService {
  constructor() {
    super();
  }
  sendMessage = (id, data) => axios.post("messages/replyText/" + id, data);
  getMessage = (id) => axios.get("messages/getsellermessages/" + id);
}
let messageServices = new MessageServices();
export default messageServices;
