import { Client } from "pg";

export default async function addNewDepartment(req, res) {
    const {name, locationid} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let resp = await client.query('INSERT INTO department (id, name, locationid) VALUES (DEFAULT, $1, $2) RETURNING department.id',[name, locationid])
        res.json({message: 'ok', arr: resp.rows})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}