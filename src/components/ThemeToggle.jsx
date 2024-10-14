import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'light' : 'dark');
  };

  return (
    <button className="text-yellow-800 hover:text-red-600" onClick={toggleTheme}>
      {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
    </button>
  );
};

export default ThemeToggle;