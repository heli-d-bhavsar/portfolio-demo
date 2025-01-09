import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  themeMode: 'dark',
  setThemeMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('dark');

  useEffect(() => {
    document
      .querySelector('html')
      .classList.remove('light', 'dark', 'blue', 'green', 'brown', 'pink');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const value = {
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default function Theme() {
  return useContext(ThemeContext);
}
