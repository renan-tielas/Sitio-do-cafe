import styles from '../../styles/componentes.module.css'

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const TextoEntregas = ({conteudo}) => {
    
    return (

<article className={styles.texto_entregas}>
{/* <div className={styles.titulo_texto_grande}>
Poema
</div> */}

{textos[0]}
<br/><br/>
{textos[1]}
<br/><br/>
Domingo à Terça {horarios[0]}
<br/><br/>
Quarta à Sábado - {horarios[2]}
<br/>

<br/>

</article>
    //    {/* <Conteudo_texto texto={conteudo.texto} posicao={0} /> */}

    );
  };
  
  export default TextoEntregas;