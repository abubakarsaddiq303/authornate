import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import "./App.css";
import Main from "./Main";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div>
        <h1>AUTHORATE</h1>

        <button
          className={isDark ? "btnDark" : "btnLight"}
          type="button"
          onClick={toggleTheme}
        >
          {isDark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
        </button>
      </div>

      <br />

      <div>
        <Main />
      </div>
    </div>
  );
};

export default App;
