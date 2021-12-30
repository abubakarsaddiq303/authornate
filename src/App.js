import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import "./App.css";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div>
        <h1>AUTHORATE</h1>
      </div>

      <button
        className={isDark ? "btnDark" : "btnLight"}
        type="button"
        onClick={toggleTheme}
      >
        {isDark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
      </button>
      <br />

      {/* <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button> */}

      {/* <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id
        neque quis ligula rhoncus ultricies. Suspendisse pretium eros sit amet
        lectus efficitur, non porta leo pellentesque. Etiam sit amet dictum est.
        Cras at aliquet turpis. Aliquam vestibulum enim sit amet aliquet
        blandit. Donec quam odio, accumsan et magna fermentum, tempor volutpat
        sapien. Pellentesque rutrum, mi eu bibendum bibendum, magna augue
        pulvinar enim, et ultrices arcu metus sed purus. Fusce in tincidunt
        nunc. Vivamus purus dui, efficitur fringilla fermentum nec, tristique
        sed dolor.
      </p>
      <p>
        {" "}
        Quisque sit amet scelerisque velit. Pellentesque auctor lectus viverra
        ullamcorper mattis. Phasellus eros ex, suscipit at nunc et, cursus
        tincidunt arcu. Pellentesque semper id sem vel fringilla. Pellentesque
        erat nulla, imperdiet a posuere vitae, sagittis sit amet quam.
        Vestibulum fermentum nisl nec tincidunt gravida. Praesent sed
        sollicitudin lectus, quis aliquam mi. Vivamus ex magna, dapibus et lorem
        a, blandit semper orci. Vestibulum eu ante nunc.
      </p> */}
      <br />
    </div>
  );
};

export default App;
