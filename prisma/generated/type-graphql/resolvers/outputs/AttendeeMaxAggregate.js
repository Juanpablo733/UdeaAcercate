"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeMaxAggregate = exports.AttendeeMaxAggregate = class AttendeeMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeMaxAggregate.prototype, "eventId", void 0);
exports.AttendeeMaxAggregate = AttendeeMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttendeeMaxAggregate", {})
], AttendeeMaxAggregate);
