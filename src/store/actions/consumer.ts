import { IConsumer } from "../../../types";

export const consumerSignUp = "SING_UP";

export const addConsumer = (payload: IConsumer) => {
  return {
    type: consumerSignUp,
    payload,
  };
};
