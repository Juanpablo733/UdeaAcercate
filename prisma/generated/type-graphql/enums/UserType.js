"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserType;
(function (UserType) {
    UserType["Estudiante"] = "Estudiante";
    UserType["Profesor"] = "Profesor";
    UserType["Administrativo"] = "Administrativo";
    UserType["Egresado"] = "Egresado";
})(UserType || (exports.UserType = UserType = {}));
TypeGraphQL.registerEnumType(UserType, {
    name: "UserType",
    description: undefined,
});
