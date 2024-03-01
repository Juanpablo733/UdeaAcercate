import type { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from 'next-auth-client'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    var email = req.body.email
    var password = req.body.password
    const response = await signIn({
        email,
        password,
    });
    console.log("user: ", )
    if (response.status !== 200) {
        // El usuario ha iniciado sesión correctamente
        res.status(200).json({ name: 'Inicio de sesión' })
        // ...
    } else {
        // El usuario no ha iniciado sesión correctamente
        // ...
        res.status(400).json({ name: 'No se ha iniciado sesión' })
    }
}