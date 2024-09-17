import { Route, Routes } from "react-router-dom";
import { NavBarSection } from "./components/Navbar";
import About from "./pages/About";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Food from "./pages/Food";
import Foundation from "./pages/Foundation";
import Tech from "./pages/Tech";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import Career from "./pages/Career";
import Media from "./pages/Media";

function App() {
  return (
    <>
      <NavBarSection />
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Food />} path="/food" />
        <Route element={<Foundation />} path="/foundation" />
        <Route element={<Tech />} path="/tech" />
        <Route element={<Resources />} path="/resources" />
        <Route element={<Team />} path="/team" />
        <Route element={<Career />} path="/career" />
        <Route element={<Media />} path="/media" />
      </Routes>
    </>
  );
}

export default App;
