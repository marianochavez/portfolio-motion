import {createContext} from "react";

import {PortfolioType} from "../data";

export type Languages = "en" | "es";

interface ContextProps {
  language: Languages;
  portfolio: PortfolioType;
  toggleLanguage: () => void;
}

export const DataContext = createContext({} as ContextProps);
