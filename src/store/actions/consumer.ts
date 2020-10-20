import { IConsumer } from "../../../types";

export const CONSUMER_SIGNUP = "CONSUMER_SIGNUP";
export const CONSUMER_SIGNOUT = "CONSUMER_SIGNOUT";

export const registerConsumer = (payload: IConsumer) => {
  return {
    type: CONSUMER_SIGNUP,
    payload,
  };
};

export const signOutConsumer = () => {
  return {
    type: CONSUMER_SIGNOUT,
  };
};
