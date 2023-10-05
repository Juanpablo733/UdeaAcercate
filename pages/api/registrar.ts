import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import auth0 from '@/lib/auth0Connecion';

const auth0Domain = process.env.AUTH0_ISSUER;   
const auth0Url = `${auth0Domain}/api/v2/users`;
const regex: RegExp = /^[a-zA-Z0-9._%+-]+@udea\.edu\.co$/;


export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    if (!regex.test(req.body.email)) {
        console.log('Correo no válido:', req.body.email);
        res.status(422);
        res.send("El correo debe ser institucional, terminado en \"@udea.edu.co\"");
        return;
    }

    var token: string = await auth0();

    var userData = {
        email: req.body.email,
        password: req.body.password,
        connection: 'Username-Password-Authentication',
        verify_email: true
    };

    var options = {
        method: 'POST',
        url: auth0Url,
        headers: { authorization: `Bearer ${token}` },
        data: userData,
    };

    axios.request(options)
        .then(response => {
            var data = response.data;
            res.status(response.status);
            res.send(data);
        })
        .catch(error => {
            console.error('Error:', error.response);
            var status = error.response.status;
            res.status(status);
            if(status === 409)
                res.send("El usuario ya existe.");
        });
}