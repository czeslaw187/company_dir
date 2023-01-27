import { Client } from "pg";

export default async function fetchUsers(req, res) {
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let response = await client.query('SELECT id, name, email, departmentid, locationid FROM users')
        res.json({message: 'ok', data: response.rows})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}