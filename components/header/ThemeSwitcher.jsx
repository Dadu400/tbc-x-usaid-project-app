"use client"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button className="bg-yellow-400 rounded-md px-2 py-2 w-5"
        onClick={toggleDarkMode}>{darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}</button>
    )
}

export default ThemeSwitcher;