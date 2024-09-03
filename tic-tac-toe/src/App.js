import { useContext } from "react"
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { LightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const {theme } = useContext(ThemeContext)
  console.log(useContext(ThemeContext))
  
  const mode = (theme === "Light" ? LightTheme : darkTheme)
  
  return (
     <ThemeProvider theme={mode}>
      <GlobalStyle/>
      <Router/>
     </ThemeProvider>
  );
}

export default App;
