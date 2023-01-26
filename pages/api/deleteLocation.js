import { Client } from "pg";

export default async function delteLocation(req, res) {
    const {id} = req.body
    const client = new Client(process.env.NEXT_PUBLIC_COCKROACHDB)
    await client.connect()
    try {
        await client.query('DELETE FROM location WHERE id=$1',[id])
        res.json({message: 'ok'})
    } catch (error) {
        return res.json({message: error.message})
    } finally {
        client.end()
    }
}