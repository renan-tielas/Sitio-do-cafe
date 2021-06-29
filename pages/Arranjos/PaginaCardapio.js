import styles from '../../styles/arranjos.module.css'

// import Conteudo_texto from './Conteudo_texto';
import Item from '../Componentes/Item'

const PaginaCardapio = ({conteudo, titulo}) => {
    return (


<div className={styles.pagina}>
<div className={styles.titulo_cardapio}>
{titulo}



</div>
{/* <Conteudo_Cardapio PaginaCardapio={conteudo.PaginaCardapio} posicao={0} />  */}
<Item posicao={0} conteudo={conteudo}/>
<Item posicao={1} conteudo={conteudo}/>
<Item posicao={2} conteudo={conteudo}/>
<Item posicao={3} conteudo={conteudo}/>
<Item posicao={4} conteudo={conteudo}/>
<Item posicao={5} conteudo={conteudo}/>
<Item posicao={6} conteudo={conteudo}/>
<Item posicao={7} conteudo={conteudo}/>
<Item posicao={8} conteudo={conteudo}/>
<Item posicao={9} conteudo={conteudo}/>
<Item posicao={10} conteudo={conteudo}/>

</div>
    
    );
  };
  
  export default PaginaCardapio;

