"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserTypeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumUserTypeNullableFilter_1 = require("../inputs/NestedEnumUserTypeNullableFilter");
const UserType_1 = require("../../enums/UserType");
let EnumUserTypeNullableFilter = class EnumUserTypeNullableFilter {
};
exports.EnumUserTypeNullableFilter = EnumUserTypeNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumUserTypeNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumUserTypeNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableFilter_1.NestedEnumUserTypeNullableFilter)
], EnumUserTypeNullableFilter.prototype, "not", void 0);
exports.EnumUserTypeNullableFilter = EnumUserTypeNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumUserTypeNullableFilter", {})
], EnumUserTypeNullableFilter);
