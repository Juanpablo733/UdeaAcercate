"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AttendeeMinAggregate = exports.AttendeeMinAggregate = class AttendeeMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeMinAggregate.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AttendeeMinAggregate.prototype, "dateTime", void 0);
exports.AttendeeMinAggregate = AttendeeMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AttendeeMinAggregate", {})
], AttendeeMinAggregate);
