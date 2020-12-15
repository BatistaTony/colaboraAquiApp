import { combineReducers } from "redux";
import Consumer from "./consumer";
import RankingState from "./ranking";

const AllReducers = combineReducers({ Consumer, RankingState });

export default AllReducers;
