import styles from '../../styles/arranjos.module.css'
import React from 'react';
import { useState } from 'react';
// import Conteudo_texto from './Conteudo_texto';
import Item from '../Componentes/Item'


// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>));

// {conteudo, pagina,posicao_a,posicao_b, titulo}
const PaginaCardapio = (({key,conteudo, posicao_a,posicao_b, titulo,estaAtivo, poeAtivo},ref) => {
    let comidas_nome=[]
    let comidas_descricao=[]
    let comidas_preco=[]
    let comidas_foto=[]
    let comidas_preco_grande=[]
    let numeros=[]
    let categorias=[]

for (let i = posicao_a; i < posicao_b+1; i++) {
    numeros[i]=[i]
comidas_nome[i]=conteudo[i].comida_nome
comidas_descricao[i]=conteudo[i].comida_descricao
comidas_preco[i]=conteudo[i].comida_preco
comidas_preco_grande[i]=conteudo[i].comida_preco_grande
comidas_foto[i]=conteudo[i].comida_foto
categorias[i]=conteudo[i].categoria
}




    return (

<div ref={ref} className={styles.pagina}>

<div className={styles.conteudo_cardapio}>

<div className={styles.titulo_cardapio}>
{titulo}
</div>

     {
        numeros.map((numero,index)=>{
            return <Item key={index}
            nome={comidas_nome[numero]}
            descricao={comidas_descricao[numero]}
            indice={index}
            estaAtivo={estaAtivo}
            poeAtivo={poeAtivo}
            preco={comidas_preco[numero]}
            preco_grande={comidas_preco_grande[numero]}
            foto={comidas_foto[numero]}
            categoria={categorias[numero]} />
        })}

</div>

</div>
     );
  });
  

  const forwardedPag=React.forwardRef(PaginaCardapio)
  export default  (forwardedPag);

