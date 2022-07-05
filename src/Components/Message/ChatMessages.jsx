/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
import React from "react";
import {
  Box,
  Menu,
  Typography,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import messageService from "../../Services/MessageServices";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { SocketAPIContext } from "../../Contexts/SocketAPI/SocketAPi";
import { makeStyles } from "@mui/styles";
import MsgLoading from "../LoadingScreen/MsgLoading";
import ImageMsg from "./ImageMsg";
import OfferMsg from "./OfferMsg";
import TextMsg from "./TextMsg";
import "../../Styles/hidescrollBar.css";

const useStyles = makeStyles({
  image: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
  },
  imagemsg: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
  },
  imageprev: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
});
export default function ChatMessages({
  bool,
  setbool,
  chatId,
  chatperson,
  anchor,
  setchatbool,
}) {
  const classes = useStyles();
  const ref = React.useRef();
  const [messages, setmessages] = React.useState([]);
  const [msgText, setmsgText] = React.useState("");
  // const socket = React.useContext(SocketAPIContext);
  const [image, setImage] = React.useState();
  const [loading, setloading] = React.useState(false);
  console.log(bool);

  const [ImagePreview, SetImagePreview] = React.useState(null);
  const ImageSetting = (e) => {
    const image = e.target.files[0];
    setImage(image);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        SetImagePreview(reader.result);
      }
    };

    reader.readAsDataURL(image);
  };

  const getMessages = () => {
    setloading(true);
    setmessages([]);
    messageService
      .getMessage(chatId)
      .then((chats) => {
        setloading(false);
        setmessages(chats.data.reverse());
      })
      .catch((error) => {
        console.log(error.response);
        setloading(false);
        setmessages([]);
      });
  };

  React.useEffect(getMessages, [chatId, bool]);
  React.useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, msgText]);

  // React.useEffect(() => {
  //   socket.on("receivemsg", ({ senderID, receiverID, msg, roomID }) => {
  //     console.log(senderID, receiverID, msg, roomID);
  //     if (chatId === roomID) {
  //       console.log(messages);
  //       setmessages([msg, ...messages]);
  //     }
  //   });
  // }, [socket]);

  const send = () => {
    const msg = {
      sender: "SELLER",
      createdAt: new Date(),
      content: msgText,
      type: "TEXT",
    };
    // socket.emit("sendmsg", {
    //   senderID: chatperson.Buyer._id,
    //   receiverID: chatperson.Seller,
    //   msg: msg,
    //   roomID: chatId,
    // });
    messageService
      .sendMessage(chatId, { content: msgText })
      .then((chats) => {
        setmessages([msg, ...messages]);
        setmsgText("");
        console.log(chats.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const sendImage = async () => {
    const data = new FormData();
    data.append("image", image);
    const msg = {
      sender: "SELLER",
      createdAt: new Date(),
      type: "IMAGE",
    };
    // socket.emit("sendmsg", {
    //   senderID: chatperson.Buyer,
    //   receiverID: chatperson.Seller._id,
    //   msg: msg,
    //   roomID: chatId,
    // });

    await messageService
      .sendImage(chatId, data)
      .then((chats) => {
        setmessages([msg, ...messages]);
        getMessages();
        SetImagePreview(null);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const msgBox = (
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
      anchorEl={anchor}
      open={bool}
      PaperProps={{
        style: {
          height: 600,
          width: "50ch",
        },
      }}
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: 580,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          focus="false"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {chatperson ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  setchatbool(true);
                  setbool(false);
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Box>
                <Avatar
                  alt="seller avatar"
                  src={chatperson.Buyer.avatar}
                  sx={{ width: 36, height: 36, border: 1 }}
                />
              </Box>
              <Box ml={1}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#ba6a62",
                  }}
                >
                  {chatperson.Buyer.fName + " " + chatperson.Buyer.lName}
                </Typography>
              </Box>
            </Box>
          ) : (
            <></>
          )}

          <IconButton
            onClick={() => {
              setbool(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            height: "90%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MsgLoading bool={loading} />
          </Box>
          {messages ? (
            <>
              {messages.map((message) => {
                return (
                  <Box
                    key={message?._id}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    // ref={ref}
                  >
                    {message?.sender === "SELLER" ? (
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "right",
                          padding: "10px",
                        }}
                      >
                        {message.type === "IMAGE" && (
                          <ImageMsg message={message} />
                        )}

                        {message.type === "TEXT" && (
                          <TextMsg message={message} />
                        )}
                      </Box>
                    ) : (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "left",
                            m: 1,
                          }}
                        >
                          {message.type === "IMAGE" && (
                            <ImageMsg message={message} />
                          )}
                          {message.type === "OFFER" && (
                            <OfferMsg
                              message={message}
                              getMessages={getMessages}
                            />
                          )}
                          {message.type === "TEXT" && (
                            <TextMsg message={message} />
                          )}
                        </Box>
                      </>
                    )}
                  </Box>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </Box>

        <Box
          m={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start    ",
          }}
        >
          <IconButton>
            <label htmlFor="file">
              <AddAPhotoIcon />
            </label>
          </IconButton>
          <form>
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => ImageSetting(e)}
            />
          </form>
          {ImagePreview ? (
            <Box
              sx={{
                border: 1,
                width: "100%",
                height: "150px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  SetImagePreview(null);
                }}
              >
                <CloseIcon />
              </IconButton>
              <img className={classes.imageprev} src={ImagePreview} />
            </Box>
          ) : (
            <TextField
              autoFocus
              fullWidth
              multiline
              value={msgText}
              onChange={(e) => {
                setmsgText(e.target.value);
              }}
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  send();
                  // write your functionality here
                }
              }}
            />
          )}
          {ImagePreview ? (
            <IconButton
              onClick={() => {
                sendImage();
              }}
            >
              <SendIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                send();
              }}
            >
              <SendIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Menu>
  );

  return <Box>{msgBox}</Box>;
}
