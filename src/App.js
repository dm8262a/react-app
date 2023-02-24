import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Weather />
      <br />
      <h4>
        <div>
          <small class="coder-details">
            <a
              href="https://github.com/dm8262a/react-app"
              target="blank"
              class="github-lik"
            >
              Open-source code{" "}
            </a>
            by Daniela Mojica
          </small>
        </div>
      </h4>
    </div>
  );
}
