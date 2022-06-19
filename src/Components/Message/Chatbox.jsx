/* eslint-disable no-use-before-define */
import React, { useContext, useState } from "react";
import {
  Box,
  Menu,
  Card,
  CardContent,
  Divider,
  Avatar,
  Typography,
  IconButton,
  MenuItem,
} from "@mui/material";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
//import { ChatAnchorContext } from "../../Contexts/ChatAnchor/ChatAnchor";
//import { useHistory } from "react-router-dom";
import ChatMessages from "./ChatMessages";
import ChatIcon from "@mui/icons-material/Chat";
import chatService from "../../Services/ChatServices";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { MidPager } from "../../Styles/MidPager";
export default function ChatBox({ bool, setbool, anchor }) {
  const [chats, setchats] = React.useState([]);
  const [chatid, setchatid] = React.useState();
  const [chatperson, setchatperson] = useState();
  // const [anchor, setanchor] = React.useState();
  console.log("chat box run");
  //const anchorContext = useContext(ChatAnchorContext);
  //console.log(anchorContext);
  const ref = React.useRef();

  const [msgbool, setmsgbool] = React.useState(false);
  React.useEffect(() => {
    setchats([]);
    chatService
      .getChats()
      .then((chats) => {
        console.log(chats);
        setchats(chats.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [bool]);

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
                  }}
                  onClick={() => {
                    setmsgbool(true);
                    setchatid(chat._id);
                    setbool(false);
                    setchatperson(chat.Buyer);
                  }}
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
                        {chat.Buyer.fName + chat.Buyer.lName}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography align="left">{chat.lastMessage}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: "100px" }}>
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
          <>
            <MidPager sx={{ marginLeft: "0px" }} name={"No Chats"} />
          </>
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
