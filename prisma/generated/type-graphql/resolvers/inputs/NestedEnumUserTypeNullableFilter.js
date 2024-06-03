"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumUserTypeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserType_1 = require("../../enums/UserType");
let NestedEnumUserTypeNullableFilter = class NestedEnumUserTypeNullableFilter {
};
exports.NestedEnumUserTypeNullableFilter = NestedEnumUserTypeNullableFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserType_1.UserType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumUserTypeNullableFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeNullableFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserType_1.UserType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumUserTypeNullableFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumUserTypeNullableFilter)
], NestedEnumUserTypeNullableFilter.prototype, "not", void 0);
exports.NestedEnumUserTypeNullableFilter = NestedEnumUserTypeNullableFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumUserTypeNullableFilter", {})
], NestedEnumUserTypeNullableFilter);
