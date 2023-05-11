import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
    

    return (
        <header>
            <nav className={styles.navigation}>
                <MenuLink to='/'>
                    Inicio
                </MenuLink>                
                <MenuLink to='/aboutme'>
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}