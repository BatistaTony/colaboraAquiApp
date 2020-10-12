import { IConsumer } from "./../../types";

const initialState: IConsumer = {
  ageRange: "",
  county: "",
  password: "",
  province: "",
  userName: "",
};

interface IAction {
  type: string;
}

export default function Consumer(
  state: IConsumer = initialState,
  action: IAction
) {
  switch (action.type) {
    case "": {
      break;
    }

    default: {
      return state;
    }
  }
}
