"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProfileScalarFieldEnum;
(function (ProfileScalarFieldEnum) {
    ProfileScalarFieldEnum["faculty"] = "faculty";
    ProfileScalarFieldEnum["career"] = "career";
    ProfileScalarFieldEnum["type"] = "type";
    ProfileScalarFieldEnum["campus"] = "campus";
    ProfileScalarFieldEnum["userId"] = "userId";
    ProfileScalarFieldEnum["description"] = "description";
    ProfileScalarFieldEnum["hobbies"] = "hobbies";
    ProfileScalarFieldEnum["socialLinks"] = "socialLinks";
})(ProfileScalarFieldEnum || (exports.ProfileScalarFieldEnum = ProfileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProfileScalarFieldEnum, {
    name: "ProfileScalarFieldEnum",
    description: undefined,
});
