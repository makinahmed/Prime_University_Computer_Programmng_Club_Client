import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOME from "./Pages/HOME/HOME";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/Blog/BlogDetails";
import Gallery from "./Pages/Gallery/Gallery";
import ClubMember from "./Components/ClubMembers/ClubMember";
import Teachers from "./Components/Teachers/Teachers";
import Contact from "./Components/Contact/Contact";


function App() {
  document.title = "Prime University Computer Programming Club";
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/home" element={<HOME />} />
        <Route path="/gallary" element={<Gallery />} />
        <Route path="/team" element={<ClubMember />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
