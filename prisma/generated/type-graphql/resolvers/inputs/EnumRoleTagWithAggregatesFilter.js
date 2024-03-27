"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleTagWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRoleTagFilter_1 = require("../inputs/NestedEnumRoleTagFilter");
const NestedEnumRoleTagWithAggregatesFilter_1 = require("../inputs/NestedEnumRoleTagWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const RoleTag_1 = require("../../enums/RoleTag");
let EnumRoleTagWithAggregatesFilter = exports.EnumRoleTagWithAggregatesFilter = class EnumRoleTagWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRoleTagWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRoleTagWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRoleTagWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagWithAggregatesFilter_1.NestedEnumRoleTagWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagWithAggregatesFilter_1.NestedEnumRoleTagWithAggregatesFilter)
], EnumRoleTagWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumRoleTagWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter)
], EnumRoleTagWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter)
], EnumRoleTagWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumRoleTagWithAggregatesFilter = EnumRoleTagWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRoleTagWithAggregatesFilter", {})
], EnumRoleTagWithAggregatesFilter);
