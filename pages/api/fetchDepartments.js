import { Client } from "pg";

export default async function fetchDepartments(req, res) {
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let resp = await client.query('SELECT department.id as depid, department.name as title, department.locationid, location.name as location FROM department LEFT JOIN location ON department.locationid=location.id')
        let deps = {message: 'ok', data: resp.rows}
        res.json(deps)
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}