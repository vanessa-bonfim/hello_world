import styles from "./ButtonMain.module.css";

export default function ButtonMain ({children, size}) {
    return (
        <button className={`
        ${styles.buttonMain}
        ${styles[size]}
        `}>
            {children}
        </button>
    )
}