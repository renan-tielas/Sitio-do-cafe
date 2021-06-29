import styles from '../../styles/arranjos.module.css'

// import Conteudo_texto from './Conteudo_texto';
import Item from '../Componentes/Item'

const PaginaCardapio = ({conteudo, pagina,,posicao_a,posicao_b titulo}) => {

    const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

    for (let index = posicao_a; index < posicao_b; index++) {
        const range = range[index];
        
    }
    
    return (


<div className={styles.pagina}>
<div className={styles.conteudo_cardapio}>
<div className={styles.titulo_cardapio}>
{titulo}


</div>
{/* <Conteudo_Cardapio PaginaCardapio={conteudo.PaginaCardapio} posicao={0} />  */}
{/* {PegaC(conteudo)} */}

{/* {conteudo.comida_nome.map((conteudo,posicao)=>{
         {if (conteudo[posicao].comida_nome) {
            return <Item posicao={posicao} conteudo={conteudo}/>
        } } }) }  */}
     {/* {range.map((conteudo,range)=>(
         for (let index = 0; index < array.length; index++) {
             <Item posicao={0} conteudo={conteudo}/> 
             
         }
     
      */}
     {/* ))} */}
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
</div>
    
    );
  };
  
  export default PaginaCardapio;

