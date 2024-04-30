import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
