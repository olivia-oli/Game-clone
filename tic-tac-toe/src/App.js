import { useContext } from "react"
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { LightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";
import MusicPlayer  from "./components/MusicPlayer/MusicPlayer";



function App() {
  const {theme } = useContext(ThemeContext)
 
  
  const mode = (theme === "Light" ? LightTheme : darkTheme)
  
  return (
     <ThemeProvider theme={mode}>
      <MusicPlayer />
      <GlobalStyle/>
      <Router/>
     </ThemeProvider>
  );
}

export default App;
