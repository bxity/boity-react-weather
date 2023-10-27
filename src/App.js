
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris"/>
      <footer>
        This project was coded by Boitumelo Vilakazi and is{" "}
        <a href="https://github.com/bxity/boity-react-weather" target="_blank" rel="noreferrer">
          open-sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
