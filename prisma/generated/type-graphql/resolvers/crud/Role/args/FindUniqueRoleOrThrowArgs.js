"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoleOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let FindUniqueRoleOrThrowArgs = exports.FindUniqueRoleOrThrowArgs = class FindUniqueRoleOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], FindUniqueRoleOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueRoleOrThrowArgs = FindUniqueRoleOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRoleOrThrowArgs);
