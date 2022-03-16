import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Slider from "./Components/Slider/Slider";
import Gallary from "./Components/Gallary/Gallary";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Gallary/>
    </div>
  );
}

export default App;
