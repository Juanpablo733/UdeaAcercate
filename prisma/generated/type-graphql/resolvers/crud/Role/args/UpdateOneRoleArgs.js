"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleUpdateInput_1 = require("../../../inputs/RoleUpdateInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let UpdateOneRoleArgs = exports.UpdateOneRoleArgs = class UpdateOneRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateInput_1.RoleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateInput_1.RoleUpdateInput)
], UpdateOneRoleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], UpdateOneRoleArgs.prototype, "where", void 0);
exports.UpdateOneRoleArgs = UpdateOneRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRoleArgs);
