import { IConsumer } from "./../../types";

const initialState: IConsumer = {
  name: "tony",
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
