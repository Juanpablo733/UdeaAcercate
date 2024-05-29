"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTag = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RoleTag;
(function (RoleTag) {
    RoleTag["User"] = "User";
    RoleTag["Admin"] = "Admin";
})(RoleTag || (exports.RoleTag = RoleTag = {}));
TypeGraphQL.registerEnumType(RoleTag, {
    name: "RoleTag",
    description: undefined,
});
