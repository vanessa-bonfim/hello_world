import styles from "./Home.module.css"; // Importação do arquivo CSS para estilos específicos deste componente
import posts from "json/posts.json"; // Importação do arquivo JSON com os dados dos posts
import PostCard from "components/PostCard"; // Importação do componente PostCard

export default function Home() { // Declaração do componente Home como uma função React
    return (
        <main>
            <ul className={styles.posts}> {/* Utilização de uma lista com a classe de estilo 'posts' */}
                {posts.map((post) => ( // Mapeamento dos posts para renderização dos componentes PostCard
                    <li key={post.id}> {/* Definição da chave única para cada item da lista */}
                        <PostCard post={post}/> {/* Renderização do componente PostCard com a prop 'post' */}
                    </li>
                ))}
            </ul>
        </main>
    )
}
