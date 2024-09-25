import { Route, Routes } from "react-router-dom";
import { NavBarSection } from "./components/Navbar";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Food from "./pages/Food";
import Foundation from "./pages/Foundation";
import Index from "./pages/Index";
import Media from "./pages/Media";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import Tech from "./pages/Tech";
import { Dashboard } from "./pages/admin/Dashboard";
import Inbox from "./pages/admin/Inbox";
import Login from "./pages/admin/Login";
import PhysicalBookings from "./pages/admin/PhysicalBookings";
import VirtualBookings from "./pages/admin/VirtualBooking";

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
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard />} path="/admin">
          <Route element={<Inbox />} index />
          <Route element={<PhysicalBookings />} path="physical_bookings" />
          <Route element={<VirtualBookings />} path="virtual_bookings" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
