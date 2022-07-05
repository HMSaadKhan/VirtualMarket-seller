/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import {
  Box,
  Menu,
  Divider,
  Avatar,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";
//import { ChatAnchorContext } from "../../Contexts/ChatAnchor/ChatAnchor";
//import { useHistory } from "react-router-dom";
import ChatMessages from "./ChatMessages";
import chatService from "../../Services/ChatServices";
// import jwtDecode from "jwt-decode";
// import sellerServices from "../../Services/SellerServices";
// import { SocketAPIContext } from "../../Contexts/SocketAPI/SocketAPi";
import ChatLoading from "../LoadingScreen/ChatLoading";

export default function ChatBox({ bool, setbool, anchor }) {
  const [chats, setchats] = React.useState([]);
  const [chatid, setchatid] = React.useState();
  const [chatperson, setchatperson] = useState();
  const [error, seterror] = useState();
  // const socket = React.useContext(SocketAPIContext);
  const [loading, setloading] = useState(false);

  const [msgbool, setmsgbool] = React.useState(false);
  React.useEffect(() => {
    setloading(true);
    setchats([]);
    chatService
      .getChats()
      .then((chats) => {
        setchats(chats.data);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        seterror(error.response.data);
      });
  }, [bool]);
  // React.useEffect(() => {
  //   if (sellerServices.isLoggedIn()) {
  //     const seller = jwtDecode(sellerServices.getToken());
  //     socket.emit("connectUser", seller._id);
  //   }
  // }, [socket]);
  const bg = (data) => {
    if (data) {
      return "white";
    } else {
      return "red";
    }
  };
  const chatList = (
    <Menu
      elevation={5}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      id="basic-menu"
      keepMounted
      anchorEl={anchor}
      open={bool}
      PaperProps={{
        style: {
          height: 600,
          width: "50ch",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              ml={2}
              color="primary"
              sx={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Chats
            </Typography>
          </Box>
          <IconButton
            onClick={() => {
              setbool(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <ChatLoading bool={loading} />
      </Box>
      <Box>
        {chats.length > 0 ? (
          <>
            {chats.map((chat) => {
              return (
                <MenuItem
                  key={chat._id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    backgroundColor: bg(chat.sellerRead),
                  }}
                  onClick={() => {
                    setmsgbool(true);

                    setchatid(chat._id);
                    setbool(false);
                    setchatperson(chat);
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = bg(chat.sellerRead))
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = bg(chat.sellerRead))
                  }
                >
                  {/* <Card>
                    <CardContent> */}

                  <Box sx={{ width: "110px" }}>
                    <Avatar
                      alt="seller avatar"
                      src={chat.Buyer.avatar}
                      sx={{ width: 56, height: 56, border: 1 }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      justifyContent: "left",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      <Typography>
                        {chat.Buyer.fName} &nbsp; {chat.Buyer.lName}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="left">{chat.lastMessage}</Typography>
                    </Box>
                  </Box>
                  <Box pr={5} sx={{ width: "100px" }}>
                    <Typography sx={{ fontSize: "12px" }}>
                      {/* {moment(chat.lastUpdated).format("LLL")} */}
                      {moment(chat.lastUpdated).calendar()}
                    </Typography>
                  </Box>

                  {/* </CardContent>
                  </Card> */}
                  <Divider />
                </MenuItem>
              );
            })}
          </>
        ) : (
          <Typography
            align="center"
            color="primary"
            sx={{ fontWeight: "bold", marginTop: "100px" }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </Menu>
  );
  return (
    <Box>
      <ChatMessages
        bool={msgbool}
        setbool={setmsgbool}
        chatId={chatid}
        anchor={anchor}
        chatperson={chatperson}
        setchatbool={setbool}
      />
      {chatList}
    </Box>
  );
}
