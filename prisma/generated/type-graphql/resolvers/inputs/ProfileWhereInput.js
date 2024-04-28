"use strict";
var ProfileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumCampusNullableFilter_1 = require("../inputs/EnumCampusNullableFilter");
const EnumUserTypeNullableFilter_1 = require("../inputs/EnumUserTypeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProfileWhereInput = exports.ProfileWhereInput = ProfileWhereInput_1 = class ProfileWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeNullableFilter_1.EnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeNullableFilter_1.EnumUserTypeNullableFilter)
], ProfileWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCampusNullableFilter_1.EnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCampusNullableFilter_1.EnumCampusNullableFilter)
], ProfileWhereInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProfileWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProfileWhereInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ProfileWhereInput.prototype, "user", void 0);
exports.ProfileWhereInput = ProfileWhereInput = ProfileWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileWhereInput", {})
], ProfileWhereInput);
