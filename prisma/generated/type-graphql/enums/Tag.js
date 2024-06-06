"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tag;
(function (Tag) {
    Tag["Deportivo"] = "Deportivo";
    Tag["Academico"] = "Academico";
    Tag["Cultural"] = "Cultural";
    Tag["Noticia"] = "Noticia";
})(Tag || (exports.Tag = Tag = {}));
TypeGraphQL.registerEnumType(Tag, {
    name: "Tag",
    description: undefined,
});
