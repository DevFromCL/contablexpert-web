"use client";

import { useThemeMode } from '@/hooks/useThemeMode';
import React from 'react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default ThemeToggle;