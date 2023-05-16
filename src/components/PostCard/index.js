import { Link } from "react-router-dom"; // Importação do componente Link do pacote 'react-router-dom'
import styles from "./Post.module.css"; // Importação do arquivo CSS para estilos específicos deste componente
import ButtonMain from "components/ButtonMain"; // Importação do componente ButtonMain

export default function PostCard({ post }) { // Declaração do componente PostCard como uma função React, recebendo a prop post
    return (
        <Link to={`/posts/${post.id}`}> {/* Componente Link para criar um link para o post com base no ID */}
            <div className={styles.post}> {/* Div com a classe de estilo 'post' */}
                <img
                    className={styles.cap} // Classe de estilo para a imagem de capa
                    src={`/assets/posts/${post.id}/capa.png`} // Caminho da imagem de capa do post
                    alt="Imagem de capa do post." // Texto alternativo da imagem
                />
                <h2 className={styles.title}>{post.title}</h2> {/* Título do post */}
                <ButtonMain>Ler</ButtonMain> {/* Componente ButtonMain para o botão 'Ler' */}
            </div>
        </Link>
    )
}
