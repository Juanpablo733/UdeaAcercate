"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserTypeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserTypeNullableFilter_1 = require("../inputs/NestedEnumUserTypeNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const UserType_1 = require("../../enums/UserType");
let NestedEnumUserTypeNullableWithAggregatesFilter = class NestedEnumUserTypeNullableWithAggregatesFilter {
};
exports.NestedEnumUserTypeNullableWithAggregatesFilter = NestedEnumUserTypeNullableWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableWithAggregatesFilter)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter)
], NestedEnumUserTypeNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumUserTypeNullableWithAggregatesFilter = NestedEnumUserTypeNullableWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumUserTypeNullableWithAggregatesFilter", {})
], NestedEnumUserTypeNullableWithAggregatesFilter);
