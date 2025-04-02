import { useEffect, useState } from "react"
 
 export const useDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
       // Detect system preference at state initialization
       return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const toggleDarkMode = () =>{
        setIsDarkMode((prevIsDarkMode=> !prevIsDarkMode))
    }

    useEffect(() => {
        document.body.className =  isDarkMode ? 'dark-mode' : 'light-mode'  
    }, [isDarkMode])

    return { isDarkMode, setIsDarkMode, toggleDarkMode}
 }