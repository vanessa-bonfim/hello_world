import styles from "./AboutMe.module.css"; // Importação do arquivo CSS para estilos específicos deste componente
import PostModel from "components/PostModel"; // Importação do componente PostModel
import photoCap from "assets/img/sobre_mim_capa.png"; // Importação da imagem de capa
import photoAboutMe from "assets/img/sobre_mim_foto.png"; // Importação da foto de Vanessa Bonfim

export default function AboutMe() { // Declaração do componente AboutMe como uma função React
    return (
        <PostModel
            photoCap={photoCap} // Prop para a imagem de capa
            title="Sobre Mim" // Prop para o título
        >
            <h3 className={styles.subtitle}>
                Olá, eu sou o Vanessa!
            </h3>

            <img
                src={photoAboutMe} // Caminho da foto de Vanessa Bonfim
                alt="Foto da Vanessa Bonfim de óculos escuros."
                className={styles.photoAboutMe} // Classe de estilo para a foto
            />

            <p className={styles.paragraph}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz em te ver por aqui!
            </p>

            {/* Parágrafos de texto com classes de estilo específicas */}
            <p className={styles.paragraph}>
                Minha história com programação começou através da plataforma online B7Web...
            </p>

            <p className={styles.paragraph}>
                Retornei alguns anos depois, com a mesma plataforma e, em paralelo, com a plataforma FreeCodeCamp...
            </p>

            <p className={styles.paragraph}>
                Decidi estudar aquilo que senti que estava a ser um ponto fraco, Front-end, e assim surgiu a Alura na minha vida...
            </p>

            <p className={styles.paragraph}>
                Atualmente estou a ser voluntária em um projeto pessoal de um Senior e ex-professor...
            </p>

            <p className={styles.paragraph}>
                Sigo a estudar e a tentar manter aquilo que aprendi e aprendo o mais fresco possível e a tentar me realocar profissiolmente no mercado de TI...
            </p>

        </PostModel>
    )
}
