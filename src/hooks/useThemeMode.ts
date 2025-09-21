'use client'

import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

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
