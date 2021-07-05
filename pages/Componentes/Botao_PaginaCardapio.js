import styles from '../../styles/componentes.module.css'
import Link from 'next/link'
// import Navegacao from './layout/Navegacao';


const Botao_PaginaCardapio = ({texto,funcao}) => {
    return (
      <button onClick={funcao}
      className={styles.botao_pagCardapio} >
        {/* onClick={() => funcao(palavra)} */}
        {/* <a href={rota}> */}
          {/* nao esta funcionando a rota */}

       <div className={styles.botao_titulo_sobe}>
       {/* <div className={styles.botao_titulo_sobe}> */}
         {texto}
         {/* </div> */}
         </div>
       
  
      {/* </a> */}
      </button>
    )
    
    
    return (

        
      <Link to={props.rota} className="botao">
      {props.texto}
      </Link>
      );
  ;
  };
  
  export default Botao_PaginaCardapio;
  
