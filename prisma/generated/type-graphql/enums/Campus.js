"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Campus;
(function (Campus) {
    Campus["Ciudad_Universitaria"] = "Ciudad_Universitaria";
    Campus["Antigua_Escuela_de_Derecho"] = "Antigua_Escuela_de_Derecho";
    Campus["Edificio_Suramericana_del_Centro"] = "Edificio_Suramericana_del_Centro";
    Campus["Sede_Posgrados_Universidad_de_Antioquia"] = "Sede_Posgrados_Universidad_de_Antioquia";
    Campus["Paraninfo"] = "Paraninfo";
    Campus["Liceo_Francisco_Restrepo_Molina"] = "Liceo_Francisco_Restrepo_Molina";
    Campus["Seccional_Oriente"] = "Seccional_Oriente";
    Campus["Seccional_Occidente_de_la_Universidad_de_Antioquia"] = "Seccional_Occidente_de_la_Universidad_de_Antioquia";
    Campus["Seccional_Bajo_Cauca"] = "Seccional_Bajo_Cauca";
    Campus["Sede_Sonson_de_la_Universidad_de_Antioquia"] = "Sede_Sonson_de_la_Universidad_de_Antioquia";
})(Campus || (exports.Campus = Campus = {}));
TypeGraphQL.registerEnumType(Campus, {
    name: "Campus",
    description: undefined,
});
