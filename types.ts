import { Dispatch, SetStateAction } from "react";

export interface IConsumer {
  userName: string;
  province: string;
  county: string;
  ageRange: string;
  password: string;
}

export interface IAppContext {
  showSignUp: boolean;
  toggleSignUp: () => void;
}
