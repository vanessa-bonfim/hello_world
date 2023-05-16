import styles from './Footer.module.css'; // Importação do arquivo CSS para estilos específicos deste componente
import { ReactComponent as Trademark } from "assets/img/marca_registrada.svg"; // Importação do componente SVG 'Trademark' como um módulo

export default function Footer() { // Declaração do componente Footer como uma função React
    return (
        <footer className={styles.footer}> {/* Elemento de rodapé com a classe de estilo 'footer' */}
            <Trademark/> {/* Renderização do componente SVG 'Trademark' */}
            Desenvolvido por Vanessa Bonfim {/* Texto do rodapé */}
        </footer>
    )
}
