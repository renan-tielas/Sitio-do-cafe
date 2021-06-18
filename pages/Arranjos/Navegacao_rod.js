import styles from '../../styles/arranjos.module.css'

import Botao_rod from '../Componentes/Botao_rod';
// import Button from '@material-ui/core/Button';

const Navegacao_rod = () => {
    return (
      <div className={styles.navegacao_rod}>
       <Botao_rod texto='Facebook'/>
       <Botao_rod texto='Instagram'/>
       <Botao_rod texto='Ifood'/>
       <Botao_rod texto='Uber Eats'/>
       <Botao_rod texto='Rappi'/>
       <Botao_rod texto='James'/>
       {/* <Botao_rod texto='Contatos'/> */}
      </div>
    );
  };
  
  export default Navegacao_rod;
  
