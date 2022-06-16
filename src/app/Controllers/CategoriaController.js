import connection from '../config/databaseConnection.js';

export default new class CategoriaController{

    async index(req, res){ //get
        let conn = await connection();
        let categorias = (await conn.execute(`SELECT id, name FROM categoria`))[0];
        conn.end();
        return res.status(200).json(categorias);
    }

    async store (req,res){ //post
        const { name } = req.body;
        let conn = await connection();
        let isAlreadyExists = (await conn.execute(`SELECT id, name FROM categoria WHERE name = '${name}'`))[0][0];
        if(isAlreadyExists)
            return res.status(401).json({error: "Category is already exists."});
        await conn.execute(`INSERT INTO categoria (name) VALUES ('${name}');`);
        let newCategoria = (await conn.execute(`SELECT id, name FROM categoria WHERE name = '${name}'`))[0][0];
        conn.end();
        return res.status(201).json(newCategoria);
    }
}
