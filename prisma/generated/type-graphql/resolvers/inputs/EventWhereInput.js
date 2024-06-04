"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeListRelationFilter_1 = require("../inputs/AttendeeListRelationFilter");
const InformationRelationFilter_1 = require("../inputs/InformationRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let EventWhereInput = class EventWhereInput {
};
exports.EventWhereInput = EventWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EventWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventWhereInput], {
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
], EventWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "infoId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EventWhereInput.prototype, "place", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], EventWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InformationRelationFilter_1.InformationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InformationRelationFilter_1.InformationRelationFilter)
], EventWhereInput.prototype, "info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeListRelationFilter_1.AttendeeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeListRelationFilter_1.AttendeeListRelationFilter)
], EventWhereInput.prototype, "attendees", void 0);
exports.EventWhereInput = EventWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventWhereInput", {})
], EventWhereInput);
