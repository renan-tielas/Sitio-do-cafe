import { useState } from 'react';
import styles from '../../styles/componentes.module.css'
import Image from 'next/dist/client/image';
// import Conteudo_texto from './Conteudo_texto';


const Item = ({ conteudo, posicao, nome, preco, preco_grande, descricao, foto, categoria, indice, estaAtivo, poeAtivo }) => {


    //  const [indicex,setIndicex] = useState(null)




    // const mostraIndicex = (indice)=>{
    //     setIndicex(indice)
    // }

    const ativo = (indice === estaAtivo) ? 'ativo' : '';
    console.log(conteudo)
    return (

      
        (ativo == 'ativo') ?
            // ESTADO ATIVO DO ITEM A SEGUIR
            (

                (


                    (preco_grande ? (
                        descricao ?
                            // Preço grande com descrição - ativo

                            (<div className={styles.item_container}>

                                <div className={styles.item_grande_descricao_ativo} onClick={() => poeAtivo(indice)}>
                                    <a className={styles.item_nome}>
                                        {/* {conteudo[posicao].comida_nome} */}
                                        {nome}

                                    </a>
                                    <a className={styles.item_preco_peq}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        {preco}
                                    </a>
                                    <a className={styles.item_preco_grande}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        {preco_grande}
                                    </a>
                                    <a className={styles.item_descricao}>
                                        {/* {conteudo[posicao].comida_descricao} */}
                                        {descricao}
                                        {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                    </a>
                                    <a className={styles.item_preco_grande}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        Médio
                                    </a>
                                    <a className={styles.item_preco_grande}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        Grande
                                    </a>
                                </div>
                                {foto ?
                                    <Image className={styles.item_ativo_img} width={300}
                                        height='260'
                                        width='300'
                                        src={foto}
                                        crop />
                                    :
                                    <div> Ainda não colocamos a foto deste item :(
                                    </div>
                                }

                            </div>

                            )
                            // Preço grande sem descrição - ativo
                            : (

                                <div className={styles.item_container}>
                                    <div className={styles.item_grande_ativo} onClick={() => poeAtivo(indice)}>
                                        <a className={styles.item_nome}>
                                            {/* {conteudo[posicao].comida_nome} */}
                                            {nome}
                                        </a>
                                        <a className={styles.item_preco_peq}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco}
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco_grande}
                                        </a>
                                        <a className={styles.item_descricao}>
                                            {/* {conteudo[posicao].comida_descricao} */}
                                            {/* {descricao} */}
                                            {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            Médio
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            Grande
                                        </a>


                                    </div>
                                    {foto ?
                                        <Image className={styles.item_ativo_img} width={300}
                                            height='260'
                                            width='300'
                                            src={foto}
                                            crop /> :
                                        <div> Ainda não colocamos a foto deste item :(
                                        </div>
                                    }
                                </div>


                            )
                    )

                        :


                        (descricao ?
                            // Sem preço grande com descrção - ativo
                            (<div className={styles.item_container}>
                                <div className={styles.item_simples_descricao_ativo} onClick={() => poeAtivo(indice)}>
                                    <a className={styles.item_nome}>
                                        {/* {conteudo[posicao].comida_nome} */}
                                        {nome}
                                    </a>
                                    <a className={styles.item_preco}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        {preco}
                                    </a>
                                    <a className={styles.item_descricao}>
                                        {/* {conteudo[posicao].comida_descricao} */}
                                        {descricao}
                                        {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                    </a>
                                </div>
                                {foto ?
                                    <Image className={styles.item_ativo_img} width={300}
                                        height='260'
                                        width='300'
                                        src={foto}
                                        marginRight='200'
                                    /> :
                                    <div> <br /><br />Ainda não colocamos a foto deste item :(
                                    </div>
                                }

                            </div>)
                            :
                            // Sem preço grande sem descrção - ativo
                            (<div className={styles.item_container}>
                                <div className={styles.item_simples_ativo} onClick={() => poeAtivo(indice)}>
                                    <a className={styles.item_nome}>
                                        {/* {conteudo[posicao].comida_nome} */}
                                        {nome}
                                    </a>
                                    <a className={styles.item_preco}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        {preco}
                                    </a>
                                    <a className={styles.item_descricao}>
                                        {/* {conteudo[posicao].comida_descricao} */}
                                        {/* {descricao} */}
                                        {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                    </a>

                                </div>
                                {foto ?
                                    <Image className={styles.item_ativo_img} width={300}
                                        height='260'
                                        width='300'
                                        src={foto}
                                    /> :
                                    <div> Ainda não colocamos a foto deste item :(
                                    </div>
                                }

                            </div>
                            ))
                    )
                )
            )


            // NÃO ATIVO ABAIXO____
            : (

                categoria ? (

                    <h1 className={styles.item_categoria}>
                        {/* {conteudo[posicao].comida_nome} */}
                        {categoria}
                        
                        {/* <br/> */}
                    </h1>
                )

                    :
                    (preco_grande ? (
                        descricao ?
                            // Preço grande com descrição
                            (
                                <div className={styles.item_sombra}>
                                    <div className={styles.item_grande} onClick={() => poeAtivo(indice)}>
                                        <a className={styles.item_nome}>
                                            {/* {conteudo[posicao].comida_nome} */}
                                            {nome}
                                        </a>
                                        <a className={styles.item_preco_peq}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco}
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco_grande}
                                        </a>
                                        <a className={styles.item_descricao}>
                                            {/* {conteudo[posicao].comida_descricao} */}
                                            {descricao}
                                            {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            Médio
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            Grande
                                        </a>

                                    </div></div>)
                            // Preço grande sem descrição
                            : (

                                <div className={styles.item_sombra}>
                                    <div className={styles.item_grande} onClick={() => poeAtivo(indice)}>
                                        <a className={styles.item_nome}>
                                            {/* {conteudo[posicao].comida_nome} */}
                                            {nome}
                                        </a>
                                        <a className={styles.item_preco_peq}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco}
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco_grande}
                                        </a>
                                        <a className={styles.item_descricao}>
                                            {/* {conteudo[posicao].comida_descricao} */}
                                            {/* {descricao} */}
                                            {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            Médio
                                        </a>
                                        <a className={styles.item_preco_grande}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            Grande
                                        </a>

                                    </div>
                                </div>

                            )
                    )
                        // Sem preço grande
                        :
                        descricao ?
                            // Sem preço grande com descrição
                            (
                                <div className={styles.item_sombra}>
                                    <div className={styles.item_simples_descricao} onClick={() => poeAtivo(indice)}>
                                        <a className={styles.item_nome}>
                                            {/* {conteudo[posicao].comida_nome} */}
                                            {nome}
                                        </a>
                                        <a className={styles.item_preco}>
                                            {/* {conteudo[posicao].comida_preco} */}
                                            {preco}
                                        </a>
                                        <a className={styles.item_descricao}>
                                            {/* {conteudo[posicao].comida_descricao} */}
                                            {descricao}
                                            {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                        </a>

                                    </div>
                                </div>)
                            :
                            // Sem preço grande sem descrção 
                            (<div className={styles.item_sombra}>
                                <div className={styles.item_simples} onClick={() => poeAtivo(indice)}>
                                    <a className={styles.item_nome}>
                                        {/* {conteudo[posicao].comida_nome} */}
                                        {nome}
                                    </a>
                                    <a className={styles.item_preco}>
                                        {/* {conteudo[posicao].comida_preco} */}
                                        {preco}
                                    </a>
                                    <a className={styles.item_descricao}>
                                        {/* {conteudo[posicao].comida_descricao} */}
                                        {/* {descricao} */}
                                        {/* se nao houver desCRICAO MUDAR ESTILO PRA FICAR MENOR */}
                                    </a>
                                    <div></div>

                                </div></div>


                            ))
            )
    );





};

export default Item;

