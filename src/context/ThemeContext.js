import React, { createContext, useContext, useState, useEffect } from 'react';

// Substitua com o arquivo Colors do seu projeto
import { Colors } from '../constants/Colors';

const ThemeContext = createContext(undefined);

// Hook para acessar o contexto de tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Provedor de Tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [themeColors, setThemeColors] = useState(Colors.light);

  useEffect(() => {
    const loadTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme('light');
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    if (theme) {
      setThemeColors(Colors[theme]);
    }
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!theme) {
    return null; // Ou um spinner/carregamento
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
