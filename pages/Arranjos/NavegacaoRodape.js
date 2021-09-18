import styles from '../../styles/arranjos.module.css'

import Botao_rod from '../Componentes/Botao_rod';
// import Button from '@material-ui/core/Button';

const NavegacaoRodape = () => {
    return (
      
      <div className={styles.navegacao_rod}>
       <Botao_rod endereco='https://wa.me/+552125412897'  texto='Whatsapp'  target="_blank"/>
       <Botao_rod endereco='https://www.facebook.com/quickgaletos'  texto='Facebook'  target="_blank"/>
       <Botao_rod endereco='https://www.instagram.com/quickgaletos' texto='Instagram' />
       <Botao_rod endereco='https://www.ifood.com.br/delivery/rio-de-janeiro-rj/quick-galetos-copacabana/31294ca3-30e7-4bfa-8ed0-2119af712e86' texto='Entregas por terceiros' />
       <Botao_rod endereco='https://www.tripadvisor.com.br/Restaurant_Review-g303506-d2254263-Reviews-Quick_Galetos-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html' texto='Trip Advisor' />
       
       {/* <Botao_rod texto='Contatos'/> */}
      </div>
    );
  };
  
  export default NavegacaoRodape;
  
