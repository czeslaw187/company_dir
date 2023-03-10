import { Client } from "pg";

export default async function fetchLocations(req, res) {
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        let response = await client.query('SELECT id, name FROM location')
        let resp = {message: 'ok', arr: response.rows}
        res.json(resp)
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}