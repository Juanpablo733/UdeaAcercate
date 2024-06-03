"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserTypeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserTypeNullableFilter_1 = require("../inputs/NestedEnumUserTypeNullableFilter");
const NestedEnumUserTypeNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumUserTypeNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const UserType_1 = require("../../enums/UserType");
let EnumUserTypeNullableWithAggregatesFilter = class EnumUserTypeNullableWithAggregatesFilter {
};
exports.EnumUserTypeNullableWithAggregatesFilter = EnumUserTypeNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableWithAggregatesFilter_1.NestedEnumUserTypeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableWithAggregatesFilter_1.NestedEnumUserTypeNullableWithAggregatesFilter)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter)
], EnumUserTypeNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumUserTypeNullableWithAggregatesFilter = EnumUserTypeNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserTypeNullableWithAggregatesFilter", {})
], EnumUserTypeNullableWithAggregatesFilter);
