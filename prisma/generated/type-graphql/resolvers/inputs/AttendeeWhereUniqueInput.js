"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeUserIdEventIdCompoundUniqueInput_1 = require("../inputs/AttendeeUserIdEventIdCompoundUniqueInput");
const AttendeeWhereInput_1 = require("../inputs/AttendeeWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EventRelationFilter_1 = require("../inputs/EventRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AttendeeWhereUniqueInput = exports.AttendeeWhereUniqueInput = class AttendeeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeUserIdEventIdCompoundUniqueInput_1.AttendeeUserIdEventIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeUserIdEventIdCompoundUniqueInput_1.AttendeeUserIdEventIdCompoundUniqueInput)
], AttendeeWhereUniqueInput.prototype, "userId_eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereInput_1.AttendeeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereInput_1.AttendeeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereInput_1.AttendeeWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AttendeeWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AttendeeWhereUniqueInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AttendeeWhereUniqueInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AttendeeWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventRelationFilter_1.EventRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventRelationFilter_1.EventRelationFilter)
], AttendeeWhereUniqueInput.prototype, "event", void 0);
exports.AttendeeWhereUniqueInput = AttendeeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeWhereUniqueInput", {})
], AttendeeWhereUniqueInput);
