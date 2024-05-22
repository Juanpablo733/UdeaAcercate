"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var InformationScalarFieldEnum;
(function (InformationScalarFieldEnum) {
    InformationScalarFieldEnum["id"] = "id";
    InformationScalarFieldEnum["title"] = "title";
    InformationScalarFieldEnum["description"] = "description";
    InformationScalarFieldEnum["date"] = "date";
    InformationScalarFieldEnum["image"] = "image";
    InformationScalarFieldEnum["tag"] = "tag";
    InformationScalarFieldEnum["hashtags"] = "hashtags";
})(InformationScalarFieldEnum || (exports.InformationScalarFieldEnum = InformationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(InformationScalarFieldEnum, {
    name: "InformationScalarFieldEnum",
    description: undefined,
});
