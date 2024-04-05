"use client";
import { createContext, useState } from "react";
import { getFromStorage } from "@/utils/GetFromLocalStorage";

// Define the shape of your theme context
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create the initial context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  // Retrieve theme from local storage or default to "light"
  const initialTheme = getFromStorage("theme", "light");

  // Define state for theme
  const [theme, setTheme] = useState<string>(initialTheme);

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to local storage
  };

  // Provide theme context value
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  // Return the provider with the value and children
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
