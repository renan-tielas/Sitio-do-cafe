import styles from '../../styles/layout.module.css'
import Image from 'next/dist/client/image'


const IMGFundo = () => {
    return (
      <Image className={styles.img_fundo}
      src='/fachada.jpg'
      alt="descrição"
      // width='auto'
      width='auto'
      // maxWidth={300}
      height={140}
      objectPosition='10% 70%'
      />
        
      
    );
  };
  
  export default IMGFundo;
  

  // const IMGFundo = () => {
  //   return (
  //     <div className="cabecalho">
  //       <div className="logo"></div>
  //       <div className="imagens-logo">
  //         {/* <span className="img-logo"></span>
  //         <span className="img-logo2"></span> */}
  //         <span className="img-logo3"></span>
  //         <span className="img-logo3"></span>
  //         <span className="img-logo3"></span>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default Cabecalho;