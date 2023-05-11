import { NavLink } from "react-router-dom";
import styles from "./NavLink.module.css";

export default function MenuLink({ children, to }) {
    return (
        <NavLink
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkHighlight : ""}`}
            to={to}
            end
        >
            {children}
        </NavLink>
    );
}
