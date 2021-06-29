import styles from '../../styles/componentes.module.css'

// import Conteudo_texto from './Conteudo_texto';


const Item = ({conteudo,posicao,intervalo_a,intervalo_b}) => {
    return (

// console.log(conteudo)
<div className={styles.item}>
<a className={styles.item_nome}>
{conteudo[posicao].comida_nome}

</a>
<a className={styles.item_preco}>
{conteudo[posicao].comida_preco}
</a>
<a className={styles.item_descricao}>
{conteudo[posicao].comida_descricao}
</a>

</div>
    
    );
  };
  
  export default Item;

