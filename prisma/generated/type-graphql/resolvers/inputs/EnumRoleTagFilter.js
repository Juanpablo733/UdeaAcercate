"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleTagFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRoleTagFilter_1 = require("../inputs/NestedEnumRoleTagFilter");
const RoleTag_1 = require("../../enums/RoleTag");
let EnumRoleTagFilter = exports.EnumRoleTagFilter = class EnumRoleTagFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRoleTagFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRoleTagFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRoleTagFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter)
], EnumRoleTagFilter.prototype, "not", void 0);
exports.EnumRoleTagFilter = EnumRoleTagFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRoleTagFilter", {})
], EnumRoleTagFilter);
