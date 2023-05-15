import styles from './Post.module.css'
import './Post.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from 'pages/NotFound';
import PageDefault from 'components/PageDefault';
import PostCard from 'components/PostCard';

export default function Post() {

    const parameter = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameter.id);
    });

    if (!post) {
        return <NotFound />
    }

    const recomendedPost = posts
    .filter((post) => post.id !== Number(parameter.id))
    .sort((a, b) => b.id -a.id)
    .slice(0, 4);
    console.log(recomendedPost);
    return (
        /* Para podermos utilizar um Route para PaginaPadrao e reutilizar seu Outlet */
        <Routes>
            <Route path='*' element={<PageDefault />}>
                <Route index element={
                    <PostModel
                        fotoCapo={`/assets/posts/${post.id}/capa.png`}
                        title={post.title}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.text}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.titleOthersPosts}> Outros posts que você pode gostar:</h2>
                        <ul className={styles.recomendedPosts}>
                            {recomendedPost.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
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