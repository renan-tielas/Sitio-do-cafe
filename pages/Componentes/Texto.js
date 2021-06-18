import styles from '../../styles/componentes.module.css'

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const Texto = ({conteudo}) => {
    return (

<p className={styles.texto_grande}>
<div className={styles.titulo_texto_grande}>
Poema
</div>

As plantas recebem água e nutrientes do solo, fornecendo em troca matéria orgânica morta e excreções radiculares que alimentam a vida do solo. Esta, por sua vez, na decomposição produz agregantes como ácidos poliurônicos que permitem a formação de poros no solo por onde entra ar e água. Mas estes ácidos poliurônicos também são o alimento principal de fixadores de nitrogênio livres, enriquecendo o solo com nitrogênio. Como a matéria orgânica é o alimento da maior parte da vida do solo, sua diversificação é importante. Em monoculturas se beneficiam somente poucas espécies
</p>
    //    {/* <Conteudo_texto texto={conteudo.texto} posicao={0} /> */}

    );
  };
  
  export default Texto;