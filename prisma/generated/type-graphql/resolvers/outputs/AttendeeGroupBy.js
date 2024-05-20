"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttendeeCountAggregate_1 = require("../outputs/AttendeeCountAggregate");
const AttendeeMaxAggregate_1 = require("../outputs/AttendeeMaxAggregate");
const AttendeeMinAggregate_1 = require("../outputs/AttendeeMinAggregate");
let AttendeeGroupBy = exports.AttendeeGroupBy = class AttendeeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeGroupBy.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AttendeeGroupBy.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeCountAggregate_1.AttendeeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeCountAggregate_1.AttendeeCountAggregate)
], AttendeeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeMinAggregate_1.AttendeeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeMinAggregate_1.AttendeeMinAggregate)
], AttendeeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttendeeMaxAggregate_1.AttendeeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttendeeMaxAggregate_1.AttendeeMaxAggregate)
], AttendeeGroupBy.prototype, "_max", void 0);
exports.AttendeeGroupBy = AttendeeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttendeeGroupBy", {})
], AttendeeGroupBy);
