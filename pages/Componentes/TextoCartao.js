import styles from '../../styles/componentes.module.css'

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const Texto = ({conteudo}) => {
    
    return (

        <article className={styles.texto}>
            {conteudo}
            </article>
    )
      }



        
  export default Texto;