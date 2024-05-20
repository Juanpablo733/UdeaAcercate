import { NestedEnumCampusNullableFilter } from "../inputs/NestedEnumCampusNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumCampusNullableWithAggregatesFilter {
    equals?: "Ciudad_Universitaria" | "Antigua_Escuela_de_Derecho" | "Edificio_Suramericana_del_Centro" | "Sede_Posgrados_Universidad_de_Antioquia" | "Paraninfo" | "Liceo_Francisco_Restrepo_Molina" | "Seccional_Oriente" | "Seccional_Occidente_de_la_Universidad_de_Antioquia" | "Seccional_Bajo_Cauca" | "Sede_Sonson_de_la_Universidad_de_Antioquia" | undefined;
    in?: Array<"Ciudad_Universitaria" | "Antigua_Escuela_de_Derecho" | "Edificio_Suramericana_del_Centro" | "Sede_Posgrados_Universidad_de_Antioquia" | "Paraninfo" | "Liceo_Francisco_Restrepo_Molina" | "Seccional_Oriente" | "Seccional_Occidente_de_la_Universidad_de_Antioquia" | "Seccional_Bajo_Cauca" | "Sede_Sonson_de_la_Universidad_de_Antioquia"> | undefined;
    notIn?: Array<"Ciudad_Universitaria" | "Antigua_Escuela_de_Derecho" | "Edificio_Suramericana_del_Centro" | "Sede_Posgrados_Universidad_de_Antioquia" | "Paraninfo" | "Liceo_Francisco_Restrepo_Molina" | "Seccional_Oriente" | "Seccional_Occidente_de_la_Universidad_de_Antioquia" | "Seccional_Bajo_Cauca" | "Sede_Sonson_de_la_Universidad_de_Antioquia"> | undefined;
    not?: NestedEnumCampusNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumCampusNullableFilter | undefined;
    _max?: NestedEnumCampusNullableFilter | undefined;
}
