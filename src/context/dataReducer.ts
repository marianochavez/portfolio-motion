import {portfolioES, portfolioEN} from "../data";

import {DataState} from "./DataProvider";
import {Languages} from "./DataContext";

type DataActionType =
  | {type: "Data - Switch Language"}
  | {type: "Data - Set Language"; payload: string};

export const DataReducer = (state: DataState, action: DataActionType): DataState => {
  switch (action.type) {
    case "Data - Switch Language":
      return {
        ...state,
        language: state.language === "es" ? "en" : "es",
        portfolio: state.language === "es" ? portfolioEN : portfolioES,
      };

    case "Data - Set Language":
      return {
        ...state,
        language: action.payload as Languages,
        portfolio: action.payload === "es" ? portfolioES : portfolioEN,
      };

    default:
      return state;
  }
};
