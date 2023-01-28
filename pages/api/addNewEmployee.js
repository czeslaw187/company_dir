import { Client } from "pg";

export default async function addEmployee(req, res) {
    const {name, email, departmentid, locationid} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let id = await client.query('INSERT INTO users (id, name, email, departmentid, locationid) VALUES (DEFAULT, $1, $2, $3, $4) RETURNING id',[name, email, departmentid, locationid])
        res.json({message: 'ok', id: id})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}