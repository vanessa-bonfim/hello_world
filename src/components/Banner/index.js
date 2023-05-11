import styles from "./Banner.module.css";
import circleColorfull from 'assets/img/circulo_colorido.png'
import myPhoto from 'assets/img/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentation}>
                <h1 className={styles.title}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragraph}>
                    Boas vindas ao meu espaço pessoal! Eu sou Vanessa Bonfim, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.images}>
                <img 
                className={styles.circleColorfull}
                src={circleColorfull}
                aria-hidden={true}
                alt=''
                />
                <img 
                className={styles.myPhoto}
                src={myPhoto}
                alt='Foto de Vanessa Bonfim com a mão no queixo.'
                />
            </div>
        </div>
    )
}