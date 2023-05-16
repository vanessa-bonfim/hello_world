import styles from './PostModel.module.css'; // Importação do arquivo CSS para estilos específicos deste componente

export default function PostModel({ children, photoCap, title }) { // Declaração do componente PostModel como uma função React, recebendo as props children, photoCap e title
    return (
        <article className={styles.postModelContainer}> {/* Elemento article com a classe de estilo 'postModelContainer' */}
            <div
                className={styles.photoCap} // Classe de estilo para a foto de capa
                style={{ backgroundImage: `url(${photoCap})` }} // Estilo inline para definir a imagem de fundo com base na prop photoCap
            ></div>

            <h2 className={styles.title}>{title}</h2> {/* Título do post com a classe de estilo 'title' */}

            <div className={styles.postContentContainer}> {/* Div com a classe de estilo 'postContentContainer' */}
                {children} {/* Renderização do conteúdo do post */}
            </div>
        </article>
    )
}
