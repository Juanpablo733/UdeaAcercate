"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCampusNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCampusNullableFilter_1 = require("../inputs/NestedEnumCampusNullableFilter");
const NestedEnumCampusNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumCampusNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Campus_1 = require("../../enums/Campus");
let EnumCampusNullableWithAggregatesFilter = exports.EnumCampusNullableWithAggregatesFilter = class EnumCampusNullableWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCampusNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCampusNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCampusNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableWithAggregatesFilter_1.NestedEnumCampusNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableWithAggregatesFilter_1.NestedEnumCampusNullableWithAggregatesFilter)
], EnumCampusNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumCampusNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter)
], EnumCampusNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter)
], EnumCampusNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumCampusNullableWithAggregatesFilter = EnumCampusNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCampusNullableWithAggregatesFilter", {})
], EnumCampusNullableWithAggregatesFilter);
