import mongoose, { Schema } from "mongoose";
import { UsuarioModel } from "./usuarioModel";

interface perfil {
    usuario: Schema.Types.ObjectId,
    foto: string,
    facultad: string,
    carrera: string,
    tipoUsuario: string,
    sede: string,
    descripcion: string,
    hobbies: string,
    enlaces: string
}

const perfilSchema = new Schema<perfil>({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: UsuarioModel,
        required: true,
    },
    foto: {
        type: String,
        required: false,
    },
    facultad: {
        type: String,
        required: false,
    },
    carrera: {
        type: String,
        required: false,
    },
    tipoUsuario: {
        type: String,
        required: true,
        enum: ["Estudiante", "Docente", "Egresado", "Administrativo"]
    },
    sede: {
        type: String,
        required: false,
    },
    descripcion: {
        type: String,
        required: false,
    },
    hobbies: {
        type: String,
        required: false,
    },
    enlaces: {
        type: String,
        required: false,
    }
});

const PerfilModel = mongoose.models.Perfil || mongoose.model("Perfil", perfilSchema);

export type { perfil };
export { PerfilModel };