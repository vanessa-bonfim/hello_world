import ButtonMain from "components/ButtonMain"; // Importação do componente ButtonMain
import styles from "./NotFound.module.css"; // Importação do arquivo CSS para estilos específicos deste componente
import error404 from "assets/img/erro_404.png"; // Importação da imagem de erro 404
import { useNavigate } from "react-router-dom"; // Importação do hook useNavigate para navegação

export default function NotFound() { // Declaração do componente NotFound como uma função React

    const nav = useNavigate(); // Utilização do hook useNavigate para obter a função de navegação

    return (
        <>
            <div className={styles.contentContainer}> {/* Container principal do conteúdo */}
                <span className={styles.text404}>404</span> {/* Exibição do texto "404" com a classe de estilo 'text404' */}
                <h1 className={styles.title}> {/* Título da página de erro */}
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragraph}> {/* Parágrafo de texto informativo */}
                    Tem certeza que era isso que estava procurando?
                </p>
                <p className={styles.paragraph}> {/* Parágrafo de texto informativo */}
                    Aguarde uns instantes e recarregue a página ou volte para a página inicial.
                </p>
                <div
                    className={styles.buttonContainer} /* Container para o botão de voltar */
                    onClick={() => nav(-1)} /* Função de navegação para voltar uma página */
                >
                    <ButtonMain size="lg">Voltar</ButtonMain> {/* Botão para voltar */}
                </div>
                <img className={styles.imageDog} /* Imagem do cachorro */
                    src={error404} /* Caminho da imagem de erro 404 */
                    alt="Um cão de óculos e vestido como humanos" /* Texto alternativo para acessibilidade */
                />
            </div>
            <div className={styles.spaceWhite}></div> {/* Espaço vazio com a classe de estilo 'spaceWhite' */}
        </>
    )

}
