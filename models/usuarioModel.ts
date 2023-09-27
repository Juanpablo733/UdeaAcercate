import mongoose, { Schema } from "mongoose";

interface usuario {
    email: string,
    password: string,
}

const usuarioSchema = new mongoose.Schema<usuario>({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UsuarioModel = mongoose.models.Usuario || mongoose.model("Usuario", usuarioSchema);

export { UsuarioModel };