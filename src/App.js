import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME from "./Pages/HOME/HOME";
import Blog from "./Components/Blog/Blog";
import Gallary from "./Components/Gallary/Gallary";
import BlogDetails from "./Components/Blog/BlogDetails";
import Fest from "./Components/Gallary/Fest";
import Session from "./Components/Gallary/Session";
import Contest22 from "./Components/Gallary/Contest22";


function App() {
  document.title = "Prime University Computer Programming Club";
  return (
    <BrowserRouter>
     
      <Header />
      <Routes>
        <Route path="/" element={<HOME />}>
          <Route path="/fest" element={<Fest />} />
          <Route path="/session" element={<Session />} />
          <Route path="/contest22" element={<Contest22 />} />
        </Route>
        <Route path="/home" element={<HOME />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
