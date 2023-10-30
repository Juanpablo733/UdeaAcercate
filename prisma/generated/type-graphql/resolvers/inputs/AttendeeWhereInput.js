"use strict";
var AttendeeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventRelationFilter_1 = require("../inputs/EventRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AttendeeWhereInput = exports.AttendeeWhereInput = AttendeeWhereInput_1 = class AttendeeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttendeeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AttendeeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AttendeeWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AttendeeWhereInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AttendeeWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventRelationFilter_1.EventRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventRelationFilter_1.EventRelationFilter)
], AttendeeWhereInput.prototype, "event", void 0);
exports.AttendeeWhereInput = AttendeeWhereInput = AttendeeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeWhereInput", {})
], AttendeeWhereInput);
