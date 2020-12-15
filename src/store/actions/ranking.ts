import { IRankingState } from "../../../types";

export const SET_RANKING = "SET_RANKING";

export const addRanking = (payload: Array<IRankingState>) => {
  return {
    type: SET_RANKING,
    payload,
  };
};
