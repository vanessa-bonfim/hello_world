import ButtonMain from "components/ButtonMain";
import styles from "./NotFound.module.css";
import error404 from "assets/img/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const nav = useNavigate();

    return (
        <>

            <div className={styles.contentContainer}>

                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragraph}>
                    Tem certeza que era isso que estava a procura?
                </p>
                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página ou volte para a página inicial.
                </p>
                <div
                    className={styles.buttonContainer}
                    onClick={() => nav(-1)}
                >
                    <ButtonMain size="lg">Voltar</ButtonMain>
                </div>
                <img className={styles.imageDog}
                    src={error404}
                    alt="Um cão de óculos e vestido como humanos"
                />
            </div>
            <div className={styles.spaceWhite}></div>

        </>
    )

}