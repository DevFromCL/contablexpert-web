'use client'

import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Lee el tema en localstorage / sistema
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setIsDarkMode(stored === "dark");
    } else {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Aplica clase de modo oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleTheme };
};
