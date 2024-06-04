"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCampusNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCampusNullableFilter_1 = require("../inputs/NestedEnumCampusNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Campus_1 = require("../../enums/Campus");
let NestedEnumCampusNullableWithAggregatesFilter = class NestedEnumCampusNullableWithAggregatesFilter {
};
exports.NestedEnumCampusNullableWithAggregatesFilter = NestedEnumCampusNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableWithAggregatesFilter)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter)
], NestedEnumCampusNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumCampusNullableWithAggregatesFilter = NestedEnumCampusNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCampusNullableWithAggregatesFilter", {})
], NestedEnumCampusNullableWithAggregatesFilter);
