import { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="px-2 py-2 rounded-lg bg-gray-700 hover:bg-gray-300 cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <MdOutlineLightMode className="text-white" />
      ) : (
        <MdOutlineDarkMode className="text-black" />
      )}
    </div>
  );
};

export default DarkModeToggle;
