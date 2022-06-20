/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, createContext } from "react";
import socketClient from "socket.io-client";
export const SocketAPIContext = createContext({});
const socket = socketClient("https://virtualmarket-chat-socket.herokuapp.com/");

const SocketAPI = (props) => {
  return (
    <SocketAPIContext.Provider value={socket}>
      {props.children}
    </SocketAPIContext.Provider>
  );
};
export default SocketAPI;
