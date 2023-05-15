import './Post.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from 'pages/NotFound';
import PageDefault from 'components/PageDefault';

export default function Post() {

    const parameter = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parameter.id);
    });

    if (!post) {
        return <NotFound />
    }
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