import styles from './Post.module.css'; // Importação do arquivo CSS para estilos específicos deste componente
import './Post.css'; // Importação de um arquivo CSS local
import { Route, Routes, useParams } from "react-router-dom"; // Importação dos componentes Route, Routes e useParams do pacote 'react-router-dom'
import posts from "json/posts.json"; // Importação de um arquivo JSON contendo os posts
import PostModel from "components/PostModel"; // Importação do componente PostModel
import { ReactMarkdown } from "react-markdown/lib/react-markdown"; // Importação do componente ReactMarkdown
import NotFound from 'pages/NotFound'; // Importação do componente NotFound
import PageDefault from 'components/PageDefault'; // Importação do componente PageDefault
import PostCard from 'components/PostCard'; // Importação do componente PostCard

export default function Post() { // Declaração do componente Post como uma função React

    const parameter = useParams(); // Obtenção dos parâmetros da URL

    const post = posts.find((post) => {
        return post.id === Number(parameter.id); // Encontrar o post com o ID correspondente ao parâmetro da URL
    });

    if (!post) {
        return <NotFound />; // Se o post não for encontrado, renderizar o componente NotFound
    }

    const recomendedPost = posts
        .filter((post) => post.id !== Number(parameter.id))
        .sort((a, b) => b.id -a.id)
        .slice(0, 4); // Filtrar e ordenar os posts recomendados para exibir

    console.log(recomendedPost);
    return (
        /* Para podermos utilizar um Route para PaginaPadrao e reutilizar seu Outlet */
        <Routes> {/* Elemento para definir as rotas */}
            <Route path='*' element={<PageDefault />}> {/* Rota curinga para renderizar o componente PageDefault e reutilizar seu Outlet */}
                <Route index element={ /* Rota index para renderizar o componente PostModel */
                    <PostModel
                        fotoCap={`/assets/posts/${post.id}/capa.png`} // Caminho da foto de capa do post
                        title={post.title} // Título do post
                    >
                        <div className="post-markdown-container"> {/* Div para exibir o conteúdo do post */}
                            <ReactMarkdown> {/* Componente ReactMarkdown para renderizar o texto do post em Markdown */}
                                {post.text} {/* Texto do post */}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.titleOthersPosts}> Outros posts que você pode gostar:</h2> {/* Título para os posts recomendados */}
                        <ul className={styles.recomendedPosts}> {/* Lista para os posts recomendados */}
                            {recomendedPost.map((post) => ( /* Mapear os posts recomendados para exibição */
                                <li key={post.id}> {/* Item da lista com a chave única */}
                                    <PostCard post={post} /> {/* Componente PostCard para exibir cada post recomendado */}
                                </li>
                            ))}
                        </ul>
                    </PostModel>
                } />
            </Route>
        </Routes>
        
        /* Podemos envolver diretamente o PostModelo por PaginaPadrao.
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
        </PaginaPadrao>
 */
    )
}
