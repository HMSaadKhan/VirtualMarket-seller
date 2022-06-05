/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, createContext } from "react";
import sellerService from "../../Services/SellerServices";
export const VerifyContext = createContext({});

const Verify = (props) => {
  const [emailVerified, setEmailVerified] = useState(true);
  const [status, setstatus] = useState("");
  const [blocked, setblocked] = useState(false);

  useEffect(() => {
    sellerService.getStatus().then((data) => {
      console.log(data);
      setblocked(data.blocked);
      setEmailVerified(data.emailVerified);
      setstatus(data.status);
    });
  }, []);

  return (
    <>
      <VerifyContext.Provider value={{ emailVerified, setstatus, blocked }}>
        {props.children}
      </VerifyContext.Provider>
    </>
  );
};
export default Verify;
