import type {Languages} from "./";

import {useReducer, FC} from "react";

import {portfolioEN, portfolioES, portfolioType} from "../data";

import {DataContext, DataReducer} from "./";

interface Props {
  children: React.ReactNode;
}

export interface DataState {
  language: Languages;
  portfolio: portfolioType;
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

  const changeLanguage = () => {
    dispatch({type: "Data - Switch Language"});
    localStorage.setItem("language", state.language === "es" ? "en" : "es");
  };

  return (
    <DataContext.Provider
      value={{
        ...state,

        changeLanguage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
