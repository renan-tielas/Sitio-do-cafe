import styles from '../../styles/componentes.module.css'
import Link from 'next/link'
// import Navegacao from './layout/Navegacao';


const Botao_pag = ({rota,texto,funcao,palavra}) => {
    return (
      <button className={styles.botao_pag} onClick={() => funcao(palavra)}>
        {/* <Link href={rota}> */}
          {/* nao esta funcionando a rota */}

       <div className={styles.botao_titulo_sobe}>
       {/* <div className={styles.botao_titulo_sobe}> */}
         {texto}
         {/* </div> */}
         </div>
       
  
      {/* </Link> */}
      </button>
    )
    
    
    return (

        
      <Link to={props.rota} className="botao">
      {props.texto}
      </Link>
      );
  ;
  };
  
  export default Botao_pag;
  
