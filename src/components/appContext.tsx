import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IAppContext } from "../../types";

export const appContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const toggleSignUp = (): void => {
    setShowSignUp(!showSignUp);
  };

  return (
    <appContext.Provider value={{ showSignUp, toggleSignUp }}>
      {children}
    </appContext.Provider>
  );
};
