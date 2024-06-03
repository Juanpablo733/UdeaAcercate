"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCampusNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCampusNullableFilter_1 = require("../inputs/NestedEnumCampusNullableFilter");
const Campus_1 = require("../../enums/Campus");
let EnumCampusNullableFilter = class EnumCampusNullableFilter {
};
exports.EnumCampusNullableFilter = EnumCampusNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCampusNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCampusNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCampusNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableFilter_1.NestedEnumCampusNullableFilter)
], EnumCampusNullableFilter.prototype, "not", void 0);
exports.EnumCampusNullableFilter = EnumCampusNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCampusNullableFilter", {})
], EnumCampusNullableFilter);
