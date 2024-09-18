//"Light" === LightMode, "dark" ===darkMode
import { useState, createContext } from "react";


export const ThemeContext = createContext({});

export function ThemeContextProvider({children}){
    const [theme, setTheme]= useState("Light");

    const toggleTheme = ()=>{
        setTheme(theme === "Light" ? "dark" : "Light")
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
