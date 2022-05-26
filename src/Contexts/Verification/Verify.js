import React, { useState, useEffect, createContext } from "react";
import sellerService from "../../Services/SellerServices";
export const VerifyContext = createContext({});

const Verify = (props) => {
  const [emailVerified, setEmailVerified] = useState();
  const [infoCompleted, setinfoCompleted] = useState();

  useEffect(() => {
    sellerService.getStatus().then((data) => {
      console.log(data);

      setEmailVerified(data.emailVerified);
      setinfoCompleted(data.infoCompleted);
    });
  }, []);

  return (
    <>
      // eslint-disable-next-line react/jsx-pascal-case
      <VerifyContext.Provider value={{ emailVerified, infoCompleted }}>
        {props.children}
      </VerifyContext.Provider>
    </>
  );
};
export default Verify;
