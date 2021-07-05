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

    return (

        // console.log(conteudo)
        (ativo == 'ativo') ?
            // ESTADO ATIVO DO ITEM A SEGUIR

            (<div>
                <div className={styles.item_ativo}>
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
                <Image className={styles.item_ativo_img} width={300}
                    height='260'
                    src={foto}
                    crop />
            </div>

            )
            // NÃO ATIVO ABAIXO
            : (

                categoria ? (
                    <h1 className={styles.item_categoria}>
                        {/* {conteudo[posicao].comida_nome} */}
                        {categoria}
                        {/* <br/> */}
                    </h1>
                )

                    :
                    (descricao ? (
                        preco_grande ?
                            (<div className={styles.item_grande} onClick={() => poeAtivo(indice)}>
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

                            </div>)

                            : (
                                <div className={styles.item} onClick={() => poeAtivo(indice)}>
                                    <a className={styles.item_nome}>
                                        {/* {conteudo[posicao].comida_nome} */}
                                        {nome}
                                        {/* // ativo==ativo?ativo:inativo} */}
                                        {/* {indicex} */}
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
                            )
                    )

                        :


                        (
                            <div className={styles.item_simples}onClick={() => poeAtivo(indice)}>
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

                        )
                    )));





};

export default Item;

