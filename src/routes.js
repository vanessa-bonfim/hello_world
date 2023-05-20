import Footer from "components/Footer"; // Importação do componente Footer
import Menu from "./components/Menu"; // Importação do componente Menu
import AboutMe from "./pages/AboutMe"; // Importação do componente AboutMe
import Home from "./pages/Home"; // Importação do componente Home
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importação de elementos relacionados a rotas do React Router
import PageDefault from "components/PageDefault"; // Importação do componente PageDefault
import Post from "pages/Post"; // Importação do componente Post
import NotFound from "pages/NotFound"; // Importação do componente NotFound
import ScrollToTop from "components/ScrollToTop"; // Importação do componente ScrollToTop

function AppRoutes() {
  return (
    <BrowserRouter> {/* Componente que envolve as rotas */}
      <ScrollToTop /> {/* Componente que realiza o scroll para o topo ao navegar entre as rotas */}
      <Menu /> {/* Componente de menu de navegação */}

      <Routes> {/* Componente que define as rotas */}
        <Route path="/" element={<PageDefault />}> {/* Rota inicial e rota padrão */}
          <Route index element={<Home />} /> {/* Rota para a página Home */}
          <Route path="aboutme" element={<AboutMe />} /> {/* Rota para a página AboutMe */}
        </Route>

        <Route path="posts/:id/*" element={<Post />} /> {/* Rota para exibir um post específico */}
        <Route path="*" element={<NotFound />} /> {/* Rota para exibir a página NotFound caso nenhuma rota correspondente seja encontrada */}
      </Routes>

      <Footer /> {/* Componente de rodapé */}
    </BrowserRouter>
  );
}

export default AppRoutes;
