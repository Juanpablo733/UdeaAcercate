// import { request, response } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import conectarBD from '../../lib/dbConnection'
import { PerfilModel } from '../../models/perfilModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await conectarBD();
    if (req.method === "POST") {
        await PerfilModel.create(req.body)
            .then(
                (p) => {
                    console.log("perfil creado: ", p);
                    res.status(200);
                    res.send(p);
                }
            ).catch(
                (e) => {
                    console.log("Error de creación: ", e);
                    res.status(500);
                    res.send(e);
                }
            )
    }
    if (req.method === "GET") {
        await PerfilModel.find()
            .then(
                (p) => {
                    console.log("Perfiles: ", p);
                    res.status(200);
                    res.send(p);
                }
            ).catch(
                (e) => {
                    console.log("Error al encontrar perfiles ", e);
                    res.status(500);
                    res.send(e);
                }
            );
    }
    if (req.method === "PATCH") {
        await PerfilModel.findOneAndUpdate(
            { _id: req.body._id },
            req.body
        ).then(
            (p) => {
                console.log("Perfil actualizado", p);
                res.status(201);
                res.send({});
            }
        ).catch(
            (e) => {
                console.log("Error al actualizar ", e);
                res.status(500);
                res.send(e);
            }
        );
    }
    if (req.method === "DELETE") {
        await PerfilModel.findOneAndDelete(req.body)
            .then(
                (perfilEliminado) => {
                    if (perfilEliminado === null){
                        res.status(404);
                        res.send("Perfil no encontrado");
                    }
                    else {
                        console.log("Perfil eliminado: ", perfilEliminado);
                        res.status(200);
                        res.send(perfilEliminado);
                    }
                }
            ).catch(
                (e) => console.log("Error al eliminar perfil: ", e)
            )
    }
};
