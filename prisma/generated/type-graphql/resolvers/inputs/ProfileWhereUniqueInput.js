"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumCampusNullableFilter_1 = require("../inputs/EnumCampusNullableFilter");
const EnumUserTypeNullableFilter_1 = require("../inputs/EnumUserTypeNullableFilter");
const ProfileWhereInput_1 = require("../inputs/ProfileWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProfileWhereUniqueInput = exports.ProfileWhereUniqueInput = class ProfileWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProfileWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1.ProfileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1.ProfileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1.ProfileWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProfileWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereUniqueInput.prototype, "faculty", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereUniqueInput.prototype, "career", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumUserTypeNullableFilter_1.EnumUserTypeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumUserTypeNullableFilter_1.EnumUserTypeNullableFilter)
], ProfileWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCampusNullableFilter_1.EnumCampusNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCampusNullableFilter_1.EnumCampusNullableFilter)
], ProfileWhereUniqueInput.prototype, "campus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereUniqueInput.prototype, "hobbies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProfileWhereUniqueInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ProfileWhereUniqueInput.prototype, "user", void 0);
exports.ProfileWhereUniqueInput = ProfileWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProfileWhereUniqueInput", {})
], ProfileWhereUniqueInput);
