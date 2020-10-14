import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IAppContext {
  showSignUp: boolean;
  toggleSignUp: Dispatch<SetStateAction<boolean>>;
}

export const appContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <appContext.Provider value={[showSignUp, toggleSignUp]}>
      {children}
    </appContext.Provider>
  );
};
