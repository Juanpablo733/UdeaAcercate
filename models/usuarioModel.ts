import mongoose, { Schema } from "mongoose";
import { PerfilModel, perfil } from "./perfilModel";

interface usuario {
    correo: string,
    nombre: string,
    // perfil: typeof PerfilModel
}

const usuarioSchema = new mongoose.Schema<usuario>({
    correo: {
        type: String,
        unique: true,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    // perfil: {
    //     type: PerfilModel,
    //     required: true,
    // }
});

const UsuarioModel = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

export { UsuarioModel };