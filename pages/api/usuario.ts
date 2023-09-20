import { NextApiRequest, NextApiResponse } from 'next';
import conectarBD from '../../lib/dbConnection'
import { UsuarioModel } from '@/models/usuario';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await conectarBD();
    if (req.method === "POST") {
        await UsuarioModel.create(req.body)
        .then(
            (p) => {
                console.log("usuario creado: ", p);
                res.status(200);
                res.send(p);
                }
        ).catch(
            (e) => console.log("Error de creación: ", e)
        )
    }
}