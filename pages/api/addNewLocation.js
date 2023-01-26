import { Client } from "pg";

export default async function addNewLocation(req, res) {
    const {name} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let id = await client.query('INSERT INTO location (id, name) VALUES (DEFAULT, $1) RETURNING id',[name])
        res.json({message: 'ok', id: id.rows})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}