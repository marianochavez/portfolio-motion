import {createContext} from "react";

import {portfolioType} from "../data";

export type Languages = "en" | "es";

interface ContextProps {
  language: Languages;
  portfolio: portfolioType;
  changeLanguage: () => void;
}

export const DataContext = createContext({} as ContextProps);
