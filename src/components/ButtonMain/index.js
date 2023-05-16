import styles from "./ButtonMain.module.css"; // Importação do arquivo CSS para estilos específicos deste componente

export default function ButtonMain ({children, size}) { // Declaração do componente ButtonMain como uma função React, recebendo as props children e size
    return (
        /* // Classe de estilo 'buttonMain' aplicada ao botão */
        /* // Classe de estilo dinâmica baseada na prop size, permitindo estilos diferentes com base no tamanho */
        <button className={`
        ${styles.buttonMain} 
        ${styles[size]}
        `}>
            {children} {/* // Conteúdo interno do botão passado como prop children */}
        </button>
    )
}
