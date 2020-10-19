import { IConsumer } from "../../../types";
import { consumerSignUp } from "../actions/consumer";

const initialState: IConsumer = {
  ageRange: "",
  county: "",
  password: "",
  province: "",
  userName: "",
};

interface IAction {
  type: string;
  payload: IConsumer;
}

export default function Consumer(
  state: IConsumer = initialState,
  action: IAction
) {
  switch (action.type) {
    case consumerSignUp: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
