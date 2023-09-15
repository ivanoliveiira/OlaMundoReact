import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Ivanildo!
            </h3>

            <img
                src={fotoSobreMim}
                alt="foto minha antiga"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi,tudo bem? Eu sou aluno de programação voltado para Front-end na Alura
                e estou feliz por ter você aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou durante a pandemia, por sempre ter interesse na área de tecnologia acabei conhecendo algumas pessoas que trabalham com programação
                essas pessoas me incentivaram a começar o curso e me apoiaram nessa transição de carreira e nova fase da minha vida
            </p>
        </PostModelo>
    )
}
