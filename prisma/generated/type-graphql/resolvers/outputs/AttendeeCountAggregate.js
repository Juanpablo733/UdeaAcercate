"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeCountAggregate = class AttendeeCountAggregate {
};
exports.AttendeeCountAggregate = AttendeeCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AttendeeCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AttendeeCountAggregate.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AttendeeCountAggregate.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AttendeeCountAggregate.prototype, "_all", void 0);
exports.AttendeeCountAggregate = AttendeeCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttendeeCountAggregate", {})
], AttendeeCountAggregate);
