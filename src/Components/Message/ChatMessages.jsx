/* eslint-disable no-use-before-define */
import React from "react";
import {
  Box,
  Menu,
  Card,
  Typography,
  Button,
  TextField,
  CardContent,
  IconButton,
  Avatar,
} from "@mui/material";
import moment from "moment";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import offerService from "../../Services/OfferService";
import { useHistory } from "react-router-dom";
import { MidPager } from "../../Styles/MidPager";
import messageService from "../../Services/MessageServices";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "60px",
    height: "60px",
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
  const history = useHistory();
  const classes = useStyles();
  const ref = React.useRef();
  const [messages, setmessages] = React.useState([]);
  const [msgText, setmsgText] = React.useState("");

  const FlexBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    margin: "5px",
    flexWrap: "wrap",
  });

  React.useEffect(() => {
    setmessages([]);
    messageService
      .getMessage(chatId)
      .then((chats) => {
        console.log(chats);
        setmessages(chats.data.reverse());
      })
      .catch((error) => {
        console.log(error.response);
        setmessages([]);
      });
  }, [chatId, bool]);
  React.useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, msgText]);

  const send = () => {
    messageService
      .sendMessage(chatId, { content: msgText })
      .then((chats) => {
        setmessages([
          {
            sender: "SELLER",
            createdAt: new Date(),
            content: msgText,
            type: "TEXT",
          },
          ...messages,
        ]);
        setmsgText("");
        console.log(chats.data);
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
                  src={chatperson.avatar}
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
                  {chatperson.fName + " " + chatperson.lName}
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
          {messages ? (
            <>
              {messages.map((message) => {
                return (
                  <Box
                    key={message._id}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                    // ref={ref}
                  >
                    {message.sender === "BUYER" ? (
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "right",
                          padding: "10px",
                        }}
                      >
                        {message.type === "OFFER" ? (
                          <>
                            <Card
                              sx={{
                                backgroundColor: "#fafafa",
                                width: "80%",
                              }}
                            >
                              <CardContent>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "left",
                                    alignItems: "center",
                                  }}
                                >
                                  {" "}
                                  <Box>
                                    <img
                                      className={classes.image}
                                      src={message.Offer.Product.images[0].link}
                                      alt=""
                                    />
                                  </Box>
                                  <Box>
                                    <Box sx={{ width: "100%" }}>
                                      <Typography
                                        sx={{
                                          color: "#ba6a62",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {message.Offer.Product.name}
                                      </Typography>
                                    </Box>
                                    <Box sx={{ width: "100%" }}>
                                      <FlexBox>
                                        <Typography
                                          sx={{
                                            color: "#ba6a62",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          Brand:
                                        </Typography>
                                        <Typography>
                                          {message.Offer.Product.brand}
                                        </Typography>
                                      </FlexBox>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box justifyContent="left">
                                  <FlexBox>
                                    <Typography
                                      sx={{
                                        color: "#ba6a62",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Offered Price:&nbsp;
                                    </Typography>
                                    <Typography>
                                      {message.Offer.price + " PKR"}
                                    </Typography>
                                  </FlexBox>{" "}
                                  <FlexBox>
                                    <Typography
                                      sx={{
                                        color: "#ba6a62",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Quantity:&nbsp;
                                    </Typography>
                                    <Typography>
                                      {message.Offer.quantity + " pieces"}
                                    </Typography>
                                  </FlexBox>
                                  <FlexBox>
                                    <Typography
                                      sx={{
                                        color: "#ba6a62",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Offer Status:&nbsp;
                                    </Typography>
                                    <Typography>
                                      {message.Offer.status}
                                    </Typography>
                                  </FlexBox>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                  <Button
                                    sx={{
                                      margin: "5px",
                                    }}
                                    color="success"
                                    variant="contained"
                                    fullWidth
                                    startIcon={<DoneIcon />}
                                    onClick={() => {
                                      offerService
                                        .offerReply(message.Offer._id, {
                                          status: "ACCEPT",
                                        })
                                        .catch((error) => {
                                          console.log(error.response);
                                        });
                                    }}
                                  ></Button>
                                  <Button
                                    sx={{
                                      backgroundColor: "red",
                                      margin: "5px",
                                    }}
                                    variant="contained"
                                    fullWidth
                                    startIcon={<CloseIcon />}
                                    onClick={() => {
                                      offerService
                                        .offerReply(message.Offer._id, {
                                          status: "REFUSE",
                                        })
                                        .catch((error) => {
                                          console.log(error.response);
                                        });
                                    }}
                                  ></Button>
                                </Box>
                              </CardContent>
                              <Typography
                                pr={1}
                                pb={1}
                                align="right"
                                sx={{ fontSize: "10px" }}
                              >
                                {moment(message.Offer.createdAt).format("LT")}
                              </Typography>
                            </Card>
                          </>
                        ) : (
                          <>
                            {" "}
                            <Box>
                              <Card
                                sx={{
                                  backgroundColor: "#ba6a63",
                                  // margin: "10px",
                                  minWidth: "100px",
                                  maxWidth: "300px",
                                  padding: "5px",
                                }}
                              >
                                <Typography align="left">
                                  {message.content}
                                </Typography>

                                <Typography
                                  align="right"
                                  sx={{ fontSize: "10px", color: "white" }}
                                >
                                  {moment(message.createdAt).format("LT")}
                                </Typography>
                              </Card>
                            </Box>
                          </>
                        )}
                      </Box>
                    ) : (
                      <>
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "left",
                          }}
                        >
                          <Card
                            sx={{
                              backgroundColor: "#fafafa",
                              margin: "5px",
                              minWidth: "100px",
                              maxWidth: "300px",
                              padding: "5px",
                            }}
                          >
                            <Typography align="left">
                              {message.content}
                            </Typography>

                            <Typography align="right" sx={{ fontSize: "10px" }}>
                              {moment(message.createdAt).format("LT")}
                            </Typography>
                          </Card>
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
            alignItems: "end",
          }}
        >
          <TextField
            autoFocus
            fullWidth
            multiline
            value={msgText}
            onChange={(e) => {
              setmsgText(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                send();
                // write your functionality here
              }
            }}
          />

          <IconButton
            onClick={() => {
              send();
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Menu>
  );

  return <Box>{msgBox}</Box>;
}
