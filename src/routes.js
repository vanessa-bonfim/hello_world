import Footer from "components/Footer";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDefault from "components/PageDefault";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route path="/" element={<PageDefault />}> {/* Rotas aninhadas */}

          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />

        </Route>

        <Route path="*" element={<div><h1>Página não encontrada</h1></div>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;
