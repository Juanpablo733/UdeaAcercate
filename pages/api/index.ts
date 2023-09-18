import conectarBD from './db'
import { perfilModel } from './models/perfil';

const main = async () => {
    await conectarBD();
    await perfilModel.create({
        carrera:"Ing sistemas",
        descripcion:"Estudiante crack",
        enlaces:"",
        facultad:"Ingeniería",
        sede:"Ciudad Universitaria",
        tipoUsuario:"Estudiante"
    }).then(
        (p) => console.log("perfil creado: ", p)
    ).catch(
        (e) => console.log("Error de creación: ", e)
    )
    
    // await perfilModel.find().then(
    //     (p) => console.log("Perfiles: ", p)
    // ).catch(
    //     (e) => console.log("Error al encontrar perfiles ", e)
    // )
};

main();