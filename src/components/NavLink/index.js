import { NavLink } from "react-router-dom"; // Importação do componente NavLink do pacote 'react-router-dom'
import styles from "./NavLink.module.css"; // Importação do arquivo CSS para estilos específicos deste componente

export default function MenuLink({ children, to }) { // Declaração do componente MenuLink como uma função React, recebendo as props children e to
    return (
        <NavLink
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkHighlight : ""}`} // Classe de estilo dinâmica baseada no estado isActive do NavLink, aplicando a classe 'link' e 'linkHighlight' quando ativo
            to={to} // Destino do link
            end // Indica que o link é ativo somente quando corresponder à rota exata
        >
            {children} {/* // Conteúdo interno do link passado como prop children */}
        </NavLink>
    );
}

