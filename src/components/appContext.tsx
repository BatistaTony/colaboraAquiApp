import { createContext, useState } from "react";

export const appContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <appContext.Provider value={[showSignUp, toggleSignUp]}>
      {children}
    </appContext.Provider>
  );
};
