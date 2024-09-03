import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BluehillsHome from "./pages/bluehills";
import BluehillsAbout from "./pages/bluehills/about";
import BluehillsContact from "./pages/bluehills/contact";
import BluehillsGallery from "./pages/bluehills/gallery";
import MenuPage from "./pages/bluehills/menu";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="blue-hills">
        <Route index element={<BluehillsHome />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="about" element={<BluehillsAbout />} />
        <Route path="contact" element={<BluehillsContact />} />
        <Route path="gallery" element={<BluehillsGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
