import styles from "./Banner.module.css"; // Importação do arquivo CSS para estilos específicos deste componente
import circleColorfull from 'assets/img/circulo_colorido.png' // Importação da imagem 'circulo_colorido.png' como um módulo
import myPhoto from 'assets/img/minha_foto.png' // Importação da imagem 'minha_foto.png' como um módulo

export default function Banner() { // Declaração do componente Banner como uma função React
    return (
        <div className={styles.banner}> {/* Div principal com a classe de estilo 'banner' */}
            <div className={styles.apresentation}> {/* Div com a classe de estilo 'apresentation' */}
                <h1 className={styles.title}>{/* Titulo com a classe de estilo 'title' */}
                    Olá, Mundo! {/* Título do banner */}
                </h1>
                <p className={styles.paragraph}> {/* Paragrafo com a classe de estilo 'paragraph' */}
                    Boas vindas ao meu espaço pessoal! Eu sou Vanessa Bonfim, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :) {/* Parágrafo de apresentação */}
                </p>
            </div>
            <div className={styles.images}> {/* Div com a classe de estilo 'images' */}
                <img 
                className={styles.circleColorfull} // Imagem com a classe de estilo 'circleColorfull'
                src={circleColorfull} // Caminho da imagem 'circulo_colorido.png'
                aria-hidden={true} // Propriedade para informar que a imagem é oculta para tecnologias assistivas
                alt='' // Texto alternativo vazio para acessibilidade
                />
                <img 
                className={styles.myPhoto} // Imagem com a classe de estilo 'myPhoto'
                src={myPhoto} // Caminho da imagem 'minha_foto.png'
                alt='Foto de Vanessa Bonfim com a mão no queixo.' // Texto alternativo descrevendo a foto para acessibilidade
                />
            </div>
        </div>
    )
}
