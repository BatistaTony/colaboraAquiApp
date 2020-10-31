import { IConsumer } from "../../../types";
import { CONSUMER_SIGNUP, CONSUMER_SIGNOUT } from "../actions/consumer";

const initialState: IConsumer = {
  dataNascimento: 0,
  county: "",
  password: "",
  province: "",
  userName: "Anderson Keneedy",
};

interface IAction {
  type: string;
  payload: IConsumer | any;
}

export default function Consumer(
  state: IConsumer = initialState,
  action: IAction
) {
  switch (action.type) {
    case CONSUMER_SIGNUP: {
      return action.payload;
    }

    case CONSUMER_SIGNOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
