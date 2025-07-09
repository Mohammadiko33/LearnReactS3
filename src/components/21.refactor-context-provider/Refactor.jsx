import { createContext, useState } from "react";

export const NameContext = createContext();

const NameProvider = ({ children }) => {
  const [userName, setUserName] = useState("Mohammad iKO");

  return (
    <NameContext.Provider value={userName}>{children}</NameContext.Provider>
  );
};

export default NameProvider;