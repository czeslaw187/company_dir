import { Client } from "pg";

export default async function addNewDepartment(req, res) {
    const {name, locationid} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let resp = await client.query('INSERT INTO department (id, name, locationid) VALUES (DEFAULT, $1, $2) RETURNING department.id',[name, locationid])
        let location = await client.query('SELECT name FROM location WHERE id=$1',[locationid])
        resp.rows[0].location = location.rows.name
        res.json({message: 'ok', id: resp.rows})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}