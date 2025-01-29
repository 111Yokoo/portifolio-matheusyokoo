import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";
import { useTheme } from './context/ThemeContext';

function App() {
    const { theme, changeTheme, themeColors } = useTheme();
    
    const color = themeColors.tint;
    const backgroundColor = themeColors.background;
    const hover = themeColors.hover;
  return (
    <Router>
      <div className="App" style={{"--background-color": `${backgroundColor}`, "--color": `${color}`, "--color-hover": `${hover}`}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
