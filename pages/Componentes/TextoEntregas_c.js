import styles from '../../styles/componentes.module.css'

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const TextoEntregas_c = ({conteudo}) => {
    
    return (

<article className={styles.texto_entregas_b}>
    
{/* <div className={styles.titulo_texto_grande}>
Poema
</div> */}

{/* {textos[0]} */}

{/* {textos[1]} */}
Taxas de Entrega:
<br/><br/><br/>
Copacabana - 0, 6 ou 8<br/>
Botafogo - 8 ou 10<br/>
Ipanema - 10<br/>
Urca - 8 ou 10<br/>
Leme - 4 ou 6<br/>

{/* {horarios[0]} */}
<br/><br/>

{/* {horarios[2]} */}
<br/>

<br/>

</article>
    //    {/* <Conteudo_texto texto={conteudo.texto} posicao={0} /> */}

    );
  };
  
  export default TextoEntregas_c;