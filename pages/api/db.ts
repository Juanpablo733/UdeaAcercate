import { connect } from 'mongoose';

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const conectarBD = async () => {
    const connectionString = `mongodb+srv://${dbUser}:${dbPass}@udeacercate.l7udwpb.mongodb.net/?retryWrites=true&w=majority`;
    return await connect(connectionString)
        .then(
            () => console.log("Conexión exitosa a BD")
        ).catch(
            (e) => console.log("Error de conexión a la BD", e));
}

export default conectarBD;