import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BluehillsAbout from "./pages/about";
import BluehillsContact from "./pages/contact";
import BluehillsGallery from "./pages/gallery";
import MenuPage from "./pages/menu";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="blue-hills">
        <Route path="menu" element={<MenuPage />} />
        <Route path="about" element={<BluehillsAbout />} />
        <Route path="contact" element={<BluehillsContact />} />
        <Route path="gallery" element={<BluehillsGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
