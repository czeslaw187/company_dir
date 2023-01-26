import { Client } from "pg";

export default async function addNewLocation(req, res) {
    const {name} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        await client.query('INSERT INTO location (name) VALUES ($1)',[name])
        res.json({message: 'ok'})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}