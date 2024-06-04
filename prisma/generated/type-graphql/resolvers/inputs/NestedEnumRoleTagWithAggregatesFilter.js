"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleTagWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRoleTagFilter_1 = require("../inputs/NestedEnumRoleTagFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const RoleTag_1 = require("../../enums/RoleTag");
let NestedEnumRoleTagWithAggregatesFilter = class NestedEnumRoleTagWithAggregatesFilter {
};
exports.NestedEnumRoleTagWithAggregatesFilter = NestedEnumRoleTagWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleTag_1.RoleTag, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleTag_1.RoleTag], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagWithAggregatesFilter)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRoleTagFilter_1.NestedEnumRoleTagFilter)
], NestedEnumRoleTagWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumRoleTagWithAggregatesFilter = NestedEnumRoleTagWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRoleTagWithAggregatesFilter", {})
], NestedEnumRoleTagWithAggregatesFilter);
