import styles from '../../styles/arranjos.module.css'
import TextoCartao from '../Componentes/TextoCartao';
import Cartao from '../Componentes/Cartao';
import Divisoria from '../Componentes/Divisoria'

const Carrossel = ({conteudo,funcao}) => {
    return (
      <div className={styles.carrossel}>


        <div className={styles.caixatexto}>
     
       <Cartao texto='CARDÁPIO' funcao={funcao} foto='/pratos.jpg' palavra='cardapio'  posicao={0} conteudo={conteudo}/>
       
       <TextoCartao conteudo='Comida feita na brasa desde 1975 ' />
       
       </div>


       {/* <Divisoria/> */}
       <div className={styles.caixatexto}>
       <Cartao texto='ENTREGA' funcao={funcao} foto='/batatafrita.jpg' palavra='entregas' posicao={1} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       {/* <Cartao texto='Realidades' posicao={2} conteudo={conteudo}/> */}
       
      <TextoCartao conteudo='Entregamos sua comida de bicicleta, em embalagens de papel, prontas para serem usadas no microondas'/>
      </div>
      </div>
    );
  };
  
  export default Carrossel;
  
