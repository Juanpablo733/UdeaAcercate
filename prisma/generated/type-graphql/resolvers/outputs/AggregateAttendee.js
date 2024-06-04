"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAttendee = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCountAggregate_1 = require("../outputs/AttendeeCountAggregate");
const AttendeeMaxAggregate_1 = require("../outputs/AttendeeMaxAggregate");
const AttendeeMinAggregate_1 = require("../outputs/AttendeeMinAggregate");
let AggregateAttendee = class AggregateAttendee {
};
exports.AggregateAttendee = AggregateAttendee;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCountAggregate_1.AttendeeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCountAggregate_1.AttendeeCountAggregate)
], AggregateAttendee.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeMinAggregate_1.AttendeeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeMinAggregate_1.AttendeeMinAggregate)
], AggregateAttendee.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeMaxAggregate_1.AttendeeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeMaxAggregate_1.AttendeeMaxAggregate)
], AggregateAttendee.prototype, "_max", void 0);
exports.AggregateAttendee = AggregateAttendee = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAttendee", {})
], AggregateAttendee);
