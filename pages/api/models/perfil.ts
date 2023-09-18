import { Schema, model } from "mongoose";

interface perfil {
    foto: String,
    facultad: String,
    carrera: String,
    tipoUsuario: String,
    sede: String,
    descripcion: String,
    hobbies: String,
    enlaces: String
}

const perfilSchema = new Schema<perfil>({
    foto: {
        required: false
    },
    facultad: {
        required: false
    },
    carrera: {
        required: false
    },
    tipoUsuario: {
        required: false,
        enum:["Estudiante", "Docente", "Egresado", "Administrativo"]
    },
    sede: {
        required: false
    },
    descripcion: {
        required: false,
    },
    hobbies: {
        required: false,
    },
    enlaces: {
        required: false,
    }
});

const perfilModel = model("Perfil", perfilSchema);

export { perfilModel };