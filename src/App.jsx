import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Home from "./Home";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartItems, setCartItems }}>
          <Home />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
