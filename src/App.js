import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Slider from "./Components/Slider/Slider";
import Gallary from "./Components/Gallary/Gallary";
import Blog from "./Components/Blog/Blog";
import Wings from "./Components/Wings/Wings";
import Footer from "./Components/Footer/Footer";
import Teachers from "./Components/Teachers/Teachers";
import ClubMembers from "./Components/ClubMembers/ClubMembers";
import ClubMember from "./Components/ClubMembers/ClubMember";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Gallary/>
      <Blog/>
      <Wings/>
      <Teachers/>
      <ClubMember/>
      <Footer/>
    </div>
  );
}

export default App;
