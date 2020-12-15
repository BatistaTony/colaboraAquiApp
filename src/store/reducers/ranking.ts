import { IRankingState } from "../../../types";
import { SET_RANKING } from "../actions/ranking";

const initialState: Array<IRankingState | any> = [];

interface IAction {
  type: string;
  payload?: Array<IRankingState>;
}

export default function rankingState(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_RANKING: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
