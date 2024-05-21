"use client"

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = window.localStorage.getItem("theme");
        if (theme === 'dark' || ((theme === undefined || theme === null) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            window.localStorage.setItem("theme", "dark")
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            window.localStorage.setItem("theme", "light")
            setDarkMode(false); 
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        window.localStorage.setItem("theme", newDarkMode ? "dark" : "light");
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button className="bg-yellow-400 rounded-md pr-2 w-10"
        onClick={toggleDarkMode}>{darkMode ? <FontAwesomeIcon icon={faSun} className="h-5"/> : <FontAwesomeIcon icon={faMoon} className="h-5"/>}</button>
    );
}

export default ThemeSwitcher;
