"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCampusNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Campus_1 = require("../../enums/Campus");
let NestedEnumCampusNullableFilter = class NestedEnumCampusNullableFilter {
};
exports.NestedEnumCampusNullableFilter = NestedEnumCampusNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Campus_1.Campus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCampusNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCampusNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Campus_1.Campus], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCampusNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCampusNullableFilter)
], NestedEnumCampusNullableFilter.prototype, "not", void 0);
exports.NestedEnumCampusNullableFilter = NestedEnumCampusNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCampusNullableFilter", {})
], NestedEnumCampusNullableFilter);
