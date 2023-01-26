import { Client } from "pg";

export default async function fetchDepartments(req, res) {
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let resp = await client.query('SELECT id, name FROM department')
        let deps = {message: 'ok', data: resp.rows}
        res.json(deps)
    } catch (error) {
        
    }
}