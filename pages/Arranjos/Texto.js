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
Servimos o galeto mais bem temperado do Rio de Janeiro, assado na brasa!
<br/><br/>
Preparamos também carnes e vegetais na nossa churrasqueira. Servimos as deliciosas guarnições de nossa cozinha, e um pudim artesanal que você nunca comeu igual!
<br/><br/>

Venha provar, ou peça em casa!
<br/><br/><br/><br/>
Pedidos: 2541-2897
<br/><br/>
Quick Galetos - Rua Duvivier, 28a, Copacabana - Rio de Janeiro
</p>
    //    {/* <Conteudo_texto texto={conteudo.texto} posicao={0} /> */}

    );
  };
  
  export default Texto;