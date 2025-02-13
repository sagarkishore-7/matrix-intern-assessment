import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Implement theme persistence
export const toggleTheme = () => {
  {{IMPLEMENT_THEME_TOGGLE}}
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// TODO: Implement this hook to fetch stored theme
export const useTheme = () => {
  {{IMPLEMENT_USE_THEME}}
};