import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { theme, darkTheme } from './';
import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

export const AppTheme = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  

  const toggleTheme = () => {
    const iconTheme = document.getElementById("icon_theme");
    if(isDarkMode){
      iconTheme.classList.remove('fa-moon')
      iconTheme.classList.add('fa-sun')
    } else {
    iconTheme.classList.add('fa-moon')
    iconTheme.classList.remove('fa-sun')
  }
    setIsDarkMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme }}>
    <ThemeProvider theme={ isDarkMode ? darkTheme : theme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      { children }
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext);
