import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BluehillsHome from "./pages/bluehills";
import BluehillsAbout from "./pages/bluehills/about";
import BluehillsContact from "./pages/bluehills/contact";
import MenuPage from "./pages/bluehills/menu";
import SowetoHome from "./pages/soweto";
import SowetoAbout from "./pages/soweto/about";
import SowetoContact from "./pages/soweto/contact";
import SowetoMenu from "./pages/soweto/menu";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="blue-hills">
        <Route index element={<BluehillsHome />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="about" element={<BluehillsAbout />} />
        <Route path="contact" element={<BluehillsContact />} />
      </Route>
      <Route path="soweto" >
        <Route index element={<SowetoHome />}/>
        <Route path="menu" element={<SowetoMenu />} />
        <Route path="about" element={<SowetoAbout />} />
        <Route path="contact" element={<SowetoContact />} />
      </Route>
    </Routes>
  );
}

export default App;
