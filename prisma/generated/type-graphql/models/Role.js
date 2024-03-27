"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleTag_1 = require("../enums/RoleTag");
let Role = exports.Role = class Role {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "role", void 0);
exports.Role = Role = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Role", {})
], Role);
