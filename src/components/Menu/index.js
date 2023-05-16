import styles from './Menu.module.css'; // Importação do arquivo CSS para estilos específicos deste componente
import NavLink from '../NavLink'; // Importação do componente NavLink

export default function Menu() {
    return (
        <header>
            <nav className={styles.navigation}> {/* Elemento de navegação com a classe de estilo 'navigation' */}
                <NavLink to='/'> {/* Componente NavLink com o link para a rota '/' */}
                    Inicio {/* Texto para exibição no link */}
                </NavLink>
                <NavLink to='/aboutme'> {/* Componente NavLink com o link para a rota '/aboutme' */}
                    Sobre Mim {/* Texto para exibição no link */}
                </NavLink>
            </nav>
        </header>
    )
}
