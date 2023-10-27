"use strict";
var EventWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeListRelationFilter_1 = require("../inputs/AttendeeListRelationFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumTagFilter_1 = require("../inputs/EnumTagFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let EventWhereInput = exports.EventWhereInput = EventWhereInput_1 = class EventWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EventWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EventWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTagFilter_1.EnumTagFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTagFilter_1.EnumTagFilter)
], EventWhereInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], EventWhereInput.prototype, "hashtags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], EventWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], EventWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeListRelationFilter_1.AttendeeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeListRelationFilter_1.AttendeeListRelationFilter)
], EventWhereInput.prototype, "attendees", void 0);
exports.EventWhereInput = EventWhereInput = EventWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("EventWhereInput", {})
], EventWhereInput);
