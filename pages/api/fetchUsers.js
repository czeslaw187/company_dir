import { Client } from "pg";

export default async function fetchUsers(req, res) {
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let response = await client.query('SELECT users.id as userid, users.name as user, users.email, department.name as department, location.name as location FROM users LEFT JOIN department ON users.departmentid=department.id LEFT JOIN location ON users.locationid=location.id')
        res.json({message: 'ok', data: response.rows})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}