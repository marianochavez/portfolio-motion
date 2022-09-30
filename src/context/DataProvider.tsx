import type {Languages} from "./";

import {useReducer, FC} from "react";

import {portfolioEN, portfolioES, PortfolioType} from "../data";

import {DataContext, DataReducer} from "./";

interface Props {
  children: React.ReactNode;
}

export interface DataState {
  language: Languages;
  portfolio: PortfolioType;
}

const getLanguage = (): Languages => {
  const lang = localStorage.getItem("language");

  if (!lang) {
    localStorage.setItem("language", "es");

    return "es";
  }

  return lang as Languages;
};

const DATA_INITIAL_STATE: DataState = {
  language: getLanguage(),
  portfolio: getLanguage() === "es" ? portfolioES : portfolioEN,
};

export const DataProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(DataReducer, DATA_INITIAL_STATE);

  const toggleLanguage = () => {
    dispatch({type: "Data - Switch Language"});
    localStorage.setItem("language", state.language === "es" ? "en" : "es");
  };

  return (
    <DataContext.Provider
      value={{
        ...state,

        toggleLanguage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
