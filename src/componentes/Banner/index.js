import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas pessoal! Eu sou Ivanildo Oliveira, iniciante na area de Front-End. Aqui compartilho alguns dos meus projeto e um pouco sobre mim, espero que vocês gostem.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="bola circulo colorido"
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src="https://github.com/ivanoliveiira.png"
                    alt="Foto do criador da pagina"
                />
            </div>
        </div >
    )
}