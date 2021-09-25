// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {GoogleSpreadsheet} from 'google-spreadsheet'
// import credentials from '../../credentials/quick-galetos-edba7aae2f99'
require('dotenv').config();


export default async function (req, res) {
  const doc = new GoogleSpreadsheet('1oDcnxJsRb7qv_dGnaTBbQwuHxBNOoiUxS430GrL2lss');
  
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });


  await doc.loadInfo(); // carrega as infos da planilha
  console.log(doc.title);



  const aba_1 = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await aba_1.getRows(); // can pass in { limit, offset }
 
  const conteudo = rows.map(({nome,imagem,categoria,comida_nome,comida_descricao,comida_preco,comida_preco_grande,comida_foto})=>{
    return{
      nome,imagem,categoria,comida_nome,comida_descricao,comida_preco,comida_preco_grande,comida_foto
    }
  })





  // console.log(conteudo)
  res.send({
    title:doc.title,
    conteudo:conteudo
    // rows:[]


  })
}
