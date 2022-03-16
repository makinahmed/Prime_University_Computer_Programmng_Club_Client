import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Slider from "./Components/Slider/Slider";
import Gallary from "./Components/Gallary/Gallary";
import Blog from "./Components/Blog/Blog";
import Wings from "./Components/Wings/Wings";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Gallary/>
      <Blog/>
      <Wings/>
      <Footer/>
    </div>
  );
}

export default App;
