import styles from './Menu.module.css'
import NavLink from '../NavLink';

export default function Menu() {    

    return (
        <header>
            <nav className={styles.navigation}>
                <NavLink to='/'>
                    Inicio
                </NavLink>                
                <NavLink to='/aboutme'>
                    Sobre Mim
                </NavLink>
            </nav>
        </header>
    )
}