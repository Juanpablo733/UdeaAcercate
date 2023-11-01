import { User } from "../models/User";
export declare class Profile {
    faculty?: string | null;
    career?: string | null;
    type?: "Estudiante" | "Profesor" | "Administrativo" | "Egresado" | null;
    campus?: "Ciudad_Universitaria" | "Antigua_Escuela_de_Derecho" | "Edificio_Suramericana_del_Centro" | "Sede_Posgrados_Universidad_de_Antioquia" | "Paraninfo" | "Liceo_Francisco_Restrepo_Molina" | "Seccional_Oriente" | "Seccional_Occidente_de_la_Universidad_de_Antioquia" | "Seccional_Bajo_Cauca" | "Sede_Sonson_de_la_Universidad_de_Antioquia" | null;
    userId: string;
    user?: User;
    description?: string | null;
    hobbies?: string | null;
    socialLinks: string[];
}
