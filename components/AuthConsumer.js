import React, { useContext } from "react";
import { LoginContext } from "../contexts/userContext";

const AuthConsumer = ({ children }) => {
  const user = useContext(LoginContext);
  return (
    <LoginContext.Consumer>
      {(context) => {
        children(context.user);
      }}
    </LoginContext.Consumer>
  );
};

export default AuthConsumer;
