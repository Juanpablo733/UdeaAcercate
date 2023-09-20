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
            (e) => console.log("Error de creación: ", e)
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
                (e) => console.log("Error al encontrar perfiles ", e)
            );
    }
    // await PerfilModel.findOneAndUpdate(
    //     { facultad: "Ingeniería" },
    //     {
    //         enlaces: "si"
    //     }
    // );
};

// main();