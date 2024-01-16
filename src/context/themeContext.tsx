import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type ThemeContextType = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
};
export const ThemeContext = createContext({
  isDarkTheme: false,
  setIsDarkTheme: (value: boolean) => {},
});

export const useThemeContext = () => useContext(ThemeContext);
