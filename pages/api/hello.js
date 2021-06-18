// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../credentials/google-sheets-api.json'



export default async function (req, res) {
  const doc = new GoogleSpreadsheet('1jLYW7plus1HhLwMlq3O130SuC9VD5jEzL5yWa98fmso');
  
  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });


  await doc.loadInfo(); // carrega as infos da planilha
  console.log(doc.title);



  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows(); // can pass in { limit, offset }
 
  const conteudo = rows.map(({nome, imagem})=>{
    return{
      nome,imagem
    }
  })





  // console.log(conteudo)
  res.send({
    title:doc.title,
    conteudo:conteudo
    // rows:[]


  })
}
