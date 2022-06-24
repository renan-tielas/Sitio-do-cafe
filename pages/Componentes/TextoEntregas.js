import styles from '../../styles/componentes.module.css'

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const TextoEntregas = ({ conteudo, n }) => {

  return (

      <article className={styles.texto_entregas_b}>
        {/* <div className={styles.titulo_texto_grande}>
Poema
</div> */}

        {/* {textos[0]} */}

        {/* {textos[1]} */}
        Horários de Entrega:
        <br /><br />
        <ul>
        <li>Domingo à Terça - 12h as 17h</li>
        {/* {horarios[0]} */}
        <br /><br />
        <li>Quarta à Sábado - 12h as 20h</li>
        </ul>
        <br /><br />

        <p style={textAllign="center"}>Peça pelo telefone 2541-2897</p>
        {/* {horarios[2]} */}
     

      </article>

      // {/* <Conteudo_texto texto={conteudo.texto} posicao={0} /> */}

      );
  };

      export default TextoEntregas;