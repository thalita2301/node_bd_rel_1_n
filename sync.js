const{Fabricante, Produto} = require('./model/associacao')
const conn = require('./db/conn')


async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('Tabelas criadas e banco de dados sincronizado')
    }catch(err){
        console.error('Erro de sincronização com o banco de dados')
    }finally{
        conn.close()
        console.log('Conexão com o banco de dados Fechada')
    }
}

syncDataBase()