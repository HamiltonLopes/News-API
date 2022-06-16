import connection from '../config/databaseConnection.js';

export default new class NoticiaController{

    async index(req, res){ //get
        let {id_noticia, id_categoria} = req.params;
        let conn = await connection();
        let noticia = (await conn.execute(`SELECT id, titulo, conteudo FROM noticia WHERE id_categoria = ${id_categoria} AND id = ${id_noticia}`))[0][0];
        conn.end();
        return noticia ? res.status(200).json(noticia) : res.status(404).json({error: 'News not found!'});
    }

    async store (req,res){ //post
        const {id_categoria} = req.params;
        const { titulo, conteudo } = req.body;
        let conn = await connection();
        let isCategoryExists = (await conn.execute(`SELECT id FROM categoria WHERE id = ${id_categoria}`))[0];
        if(isCategoryExists)
            return res.status(404).json({error: "Category not found."});
        let isAlreadyExists = (await conn.execute(`SELECT id, titulo FROM noticia WHERE titulo = '${titulo}' AND id_categoria = ${id_categoria}`))[0][0];
        if(isAlreadyExists)
            return res.status(401).json({error: "News is already exists."});
        await conn.execute(`INSERT INTO noticia (titulo,conteudo,id_categoria) VALUES ('${titulo}','${conteudo}',${id_categoria});`);
        let newNoticia = (await conn.execute(`SELECT * FROM noticia WHERE titulo = '${titulo}' AND id_categoria = ${id_categoria}`))[0][0];
        conn.end();
        return res.status(201).json(newNoticia);
    }
}
