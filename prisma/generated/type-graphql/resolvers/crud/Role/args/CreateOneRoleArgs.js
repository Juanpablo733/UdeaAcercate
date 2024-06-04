"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateInput_1 = require("../../../inputs/RoleCreateInput");
let CreateOneRoleArgs = class CreateOneRoleArgs {
};
exports.CreateOneRoleArgs = CreateOneRoleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateInput_1.RoleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateInput_1.RoleCreateInput)
], CreateOneRoleArgs.prototype, "data", void 0);
exports.CreateOneRoleArgs = CreateOneRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRoleArgs);
