import styles from '../../styles/arranjos.module.css'

// import Conteudo_texto from './Conteudo_texto';
import Item from './Item'

const PaginaCardapio = ({conteudo}) => {
    return (


<div className={styles.pagina}>
<div className={styles.titulo_cardapio}>
Guarnições
</div>
{/* <Conteudo_Cardapio PaginaCardapio={conteudo.PaginaCardapio} posicao={0} />  */}
<Item posicao={} conteudo={conteudo}/>

</div>
    
    );
  };
  
  export default PaginaCardapio;

