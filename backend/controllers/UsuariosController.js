const express = require('express')
const sql = require('../config/connection')

class UsuariosController {

    async findAll(req, res) {
        const users = await sql` select * from usuario`

        return res.json(
            {
                users: users
            }
        )
    }

    async findById(req, res) {
        const { id } = req.params;
        const user = await sql` select * from usuario where id = ${id} order by id`

        return res.json(
            {
                user: user,
            }
        )
    }

    async create(req, res) {                

        console.log(req.body)
        const { username, password, email } = req.body
        const user = await sql`insert into usuario (username, password, email) values (${username}, ${password}, ${email}) returning id, username, password, email`

        return res.json(
            {
                user: user,
            }
        )
    }

    async update(req, res) {
        const { id, username, password, email } = req.body
        const user = await sql`update usuario set username = ${username}, password = ${password}, email = ${email} where id = ${id} returning id, username, password, email`

        return res.json(
            {
                user: user,
            }
        )
    }

    async delete(req, res) {
        const { id } = req.params;
        const user = await sql`delete from usuario where id = ${id}`

        return res.json(
            {
                id: id,
            }
        )
    }

}

module.exports = UsuariosController