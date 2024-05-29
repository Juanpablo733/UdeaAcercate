"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumRoleTagFilter_1 = require("../inputs/EnumRoleTagFilter");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleWhereUniqueInput = exports.RoleWhereUniqueInput = class RoleWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoleWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRoleTagFilter_1.EnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRoleTagFilter_1.EnumRoleTagFilter)
], RoleWhereUniqueInput.prototype, "role", void 0);
exports.RoleWhereUniqueInput = RoleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoleWhereUniqueInput", {})
], RoleWhereUniqueInput);
