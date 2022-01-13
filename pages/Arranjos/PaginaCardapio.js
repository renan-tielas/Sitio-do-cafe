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
const PaginaCardapio = (({key,conteudo, posicao_a, posicao_b, titulo,estaAtivo, poeAtivo},ref) => {
    let comidas_nome=[]
    let comidas_descricao=[]
    let comidas_preco=[]
    let comidas_foto=[]
    let comidas_preco_grande=[]
    let numeros=[]
    let categorias=[]

for (let i = posicao_a; i < posicao_b; i++) {
    numeros[i]=[i]
    categorias[i]=conteudo[0][i]
comidas_nome[i]=conteudo[1][i]
comidas_descricao[i]=conteudo[2][i]
comidas_preco[i]=conteudo[3][i]
comidas_preco_grande[i]=conteudo[4][i]
comidas_foto[i]=conteudo[5][i]

}


console.log(conteudo)

    return (

<div ref={ref} className={styles.pagina}>

<div className={styles.conteudo_cardapio}>

<div className={styles.titulo_cardapio}>
{titulo}
</div>

     {
        numeros.map((numero,index)=>{
            return <div>
            <Item key={index}
            nome={comidas_nome[numero]}
            descricao={comidas_descricao[numero]}
            indice={index}
            estaAtivo={estaAtivo}
            poeAtivo={poeAtivo}
            preco={comidas_preco[numero]}
            preco_grande={comidas_preco_grande[numero]}
            foto={comidas_foto[numero]}      
            categoria={categorias[numero]} />

</div>
        })}

</div>

</div>
     );
  });
  

  const forwardedPag=React.forwardRef(PaginaCardapio)
  export default  (forwardedPag);

