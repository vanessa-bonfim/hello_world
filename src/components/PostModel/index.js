import styles from './PostModel.module.css';

export default function PostModel({ children, photoCap, title }) {
    return (
        <article className={styles.postModelContainer}>

            <div
                className={styles.photoCap}
                style={{ backgroundImage: `url(${photoCap})` }}
            ></div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.postContentContainer}>
                {children}
            </div>
        </article>
    )
}
