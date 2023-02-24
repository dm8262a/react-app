import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Weather />
      <br />
      <h6>
        <div>
          <small class="coder-details">
            <a
              href="git@github.com:dm8262a/portfolio-project-responsive.git"
              target="blank"
              class="github-lik"
            >
              Open-source code{" "}
            </a>
            by Daniela Mojica
          </small>
        </div>
      </h6>
    </div>
  );
}
