import styles from '../../styles/componentes.module.css'
import Link from 'next/link'
// import Navegacao from './layout/Navegacao';


const Botao_ref = ({rota,texto,funcao,referencia}) => {
    return (
      <button className={styles.botao_pag} >
        {/* onClick={() => funcao(referencia)} */}
        <Link href={rota}>
          {/* nao esta funcionando a rota */}

       <div className={styles.botao_titulo_sobe}>
       {/* <div className={styles.botao_titulo_sobe}> */}
         {texto}
         {console.log(rota)}
         {/* </div> */}
         </div>
      
  
      </Link>
      </button>
    )
    
    
    return (

        
      <Link to={props.rota} className="botao">
      {props.texto}
      </Link>
      );
  ;
  };
  
  export default Botao_ref;
  
