import styles from './Footer.module.css';
import { ReactComponent as Trademark } from "assets/img/marca_registrada.svg";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Trademark/>
            Desenvolvido por Vanessa Bonfim
        </footer>
    )
}