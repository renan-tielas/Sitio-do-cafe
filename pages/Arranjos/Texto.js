import styles from '../../styles/arranjos.module.css'

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const Texto = ({conteudo}) => {
    return (

<p className={styles.texto_grande}>
{/* <div className={styles.titulo_texto_grande}>
Poema
</div> */}

Restaurante e Galeteria tradicional em Copacabana, desde 1975.
Servimos o galeto mais bem temperado do Rio de Janeiro, assado na brasa na sua frente!
<br/><br/>
Também assamos deliciosas Carnes e Vegetais na nossa churrasqueira, além das guarnições de nossa cozinha.
<br/><br/>
Venha provar, ou peça em casa!

</p>
    //    {/* <Conteudo_texto texto={conteudo.texto} posicao={0} /> */}

    );
  };
  
  export default Texto;