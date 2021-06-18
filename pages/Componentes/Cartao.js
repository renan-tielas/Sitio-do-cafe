import styles from '../../styles/componentes.module.css'
import Image from 'next/image'
// import Navegacao from './layout/Navegacao';
import DadosAPI from '../DadosAPI';



export async function getStaticProps() {
  const dadosDaAPI = await fetch('http://localhost:3000/api/hello')
  .then
}

const nextConfig = {
  images: {
    domains: ['https://scontent-gig2-1.xx.fbcdn.net/']
  }
}
const Cartao = ({texto,posicao,conteudo}) => {
    return (
      <div className={styles.cartao_3}>
       {texto}
       <br/>
       <br/>

       <Image className={styles.cartao_3_img}
        src={conteudo[posicao].imagem}
        alt="descrição"
        // width='auto'
        width={300}
        crop
        // maxWidth={300}
        height={300}  
       />

       <div className={styles.conteudo_cartao_3}>
         
      
    
       {conteudo[posicao].nome}


     </div>
      </div>
    );
  };
  
  export default Cartao;
  

  // Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  // Duis consectetur imperdiet tellus, sit amet iaculis tortor sagittis sed. 
  // Praesent tristique id lacus id pretium. Vestibulum et justo mauris. 
  
  // Donec dapibus vestibulum mollis. Quisque sit amet viverra mi. 
  // In vulputate rhoncus dui sit amet sodales. Sed feugiat, magna sit amet scelerisque bibendum, 
  // nisi eros faucibus justo, et faucibus ipsum ligula a mi. 
  // Phasellus nunc sem, suscipit vel odio eget, suscipit venenatis elit. 
  // Quisque sed consequat tortor. Sed tempus euismod sapien quis tincidunt. 
  // Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 

