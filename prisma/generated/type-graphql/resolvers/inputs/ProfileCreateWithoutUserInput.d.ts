import { ProfileCreatehobbiesInput } from "../inputs/ProfileCreatehobbiesInput";
import { ProfileCreatesocialLinksInput } from "../inputs/ProfileCreatesocialLinksInput";
export declare class ProfileCreateWithoutUserInput {
    faculty?: string | undefined;
    career?: string | undefined;
    type?: "Estudiante" | "Profesor" | "Administrativo" | "Egresado" | undefined;
    campus?: "Ciudad_Universitaria" | "Antigua_Escuela_de_Derecho" | "Edificio_Suramericana_del_Centro" | "Sede_Posgrados_Universidad_de_Antioquia" | "Paraninfo" | "Liceo_Francisco_Restrepo_Molina" | "Seccional_Oriente" | "Seccional_Occidente_de_la_Universidad_de_Antioquia" | "Seccional_Bajo_Cauca" | "Sede_Sonson_de_la_Universidad_de_Antioquia" | undefined;
    description?: string | undefined;
    hobbies?: ProfileCreatehobbiesInput | undefined;
    socialLinks?: ProfileCreatesocialLinksInput | undefined;
}
