//"Light" === LightMode, "dark" ===darkMode
import { useState, createContext } from "react";


export const ThemeContext = createContext({});

export function ThemeContextProvider({childern}){
    const [theme, setTheme]= useState("dark");

    const toggleTheme = ()=>{
        
        setTheme(theme === "Light" ? "dark" : "Light")
    }
       

    console.log(theme);
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {childern}
        </ThemeContext.Provider>
    )
}
