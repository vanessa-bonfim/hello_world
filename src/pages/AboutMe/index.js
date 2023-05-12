import styles from "./AboutMe.module.css";
import PostModel from "components/PostModel";
import photoCap from "assets/img/sobre_mim_capa.png";
import photoAboutMe from "assets/img/sobre_mim_foto.png"

export default function AboutMe() {
    return (
        <PostModel
            photoCap={photoCap}
            title="Sobre Mim"
        >
            <h3 className={styles.subtitle}>
                Olá, eu sou o Vanessa!
            </h3>
            <img
                src={photoAboutMe}
                alt="Foto da Vanessa Bonfim de óculos escuros."
                className={styles.photoAboutMe}
            />

            <p className={styles.paragraph}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz em te ver por aqui!
            </p>
            <p className={styles.paragraph}>
                Minha história com programação começou através da plataforma online B7Web, onde eu conheci toda a base do HTML e CSS. E também foi por meio dessa plataforma que tive o meu primeiro contacto com JavaScript e seus conceitos básicos. Eu estava realmente a gostar muito e achar que tinha jeito para aquilo. Mas na época precisei dar uma pausa, pois começei a trabalhar em um local que exigia muito das minhas horas e com o tempo me fizeram um proposta para subir de cargo e eu aceitei.
            </p>
            <p className={styles.paragraph}>
                Retornei alguns anos depois, com a mesma plataforma e, em paralelo, com a plataforma FreeCodeCamp. Decidi me inscrever em um bootcamp online, de Portugal, para ser uma Desenvolvedora Full Stack Junior, onde havia um professor em sala a explicar e tirar dúvidas. Ali eu aprimorei o que eu já sabia e aprendi mais ainda. Lógica de programação, PHP, Java, SQL, Bootstrap, GIT... O projeto final foi um WebSite em PHP para um escritor que foi bem desafiador.
            </p>
            <p className={styles.paragraph}>
                Decidi estudar aquilo que senti que estava a ser um ponto fraco, Front-end, e assim surgiu a Alura na minha vida. Com projetos extraordinários, me subindo mais alguns degraus nessa caminhada profissional. HTML, CSS, JavaScript, Lógica de programação, GIT, React...
            </p>
            <p className={styles.paragraph}>
                Atualmente estou a ser voluntária em um projeto pessoal de um Senior e ex-professor, junto com um colega de curso. E esta estar a ser aqui a minha primeira esperiência profissonal como programadora Full Stack.
            </p>
            <p className={styles.paragraph}>
                Sigo a estudar e a tentar manter aquilo que aprendi e aprendo o mais fresco possível e a tentar me realocar profissiolmente no mercado de TI. Já lá se foram 1 ano...
            </p>


        </PostModel>
    )
}