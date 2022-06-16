import connection from '../config/databaseConnection.js';

export default new class ListarNoticiasController{

    async index(req, res){ //get
        let {id_categoria} = req.params;
        let conn = await connection();
        let categorias = (await conn.execute(`SELECT id, titulo FROM noticia WHERE id_categoria = ${id_categoria}`))[0];
        conn.end();
        return res.status(200).json(categorias);
    }
}