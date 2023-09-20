import { NextApiRequest, NextApiResponse } from 'next';
import conectarBD from '../../lib/dbConnection'
import { UsuarioModel } from '@/models/usuarioModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await conectarBD();
    if (req.method === "POST") {
        await UsuarioModel.create(req.body)
            .then(
                (nuevoUsuario) => {
                    console.log("Usuario creado: ", nuevoUsuario);
                    res.status(200);
                    res.send(nuevoUsuario);
                }
            ).catch(
                (e) => console.log("Error de creación: ", e)
            )
    }
    if (req.method === "GET") {
        await UsuarioModel.find()
            .then(
                (usuarios) => {
                    console.log("Usuarios: ", usuarios);
                    res.status(200);
                    res.send(usuarios);
                }
            ).catch(
                (e) => console.log("Error al encontrar usuarios: ", e)
            )
    }
    if (req.method === "DELETE") {
        await UsuarioModel.findOneAndDelete(req.body)
            .then(
                (usuarioEliminado) => {
                    if (usuarioEliminado === null){
                        res.status(404);
                        res.send("Usuario no encontrado");
                    }
                    else {
                        console.log("Usuario eliminado: ", usuarioEliminado);
                        res.status(200);
                        res.send(usuarioEliminado);
                    }
                }
            ).catch(
                (e) => console.log("Error al eliminar usuario: ", e)
            )
    }
}