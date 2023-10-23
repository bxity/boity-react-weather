import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
      <footer>
        This project was coded by Boitumelo Vilakazi and is{" "}
        <a href="https://github.com/bxity/boity-react-weather" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
