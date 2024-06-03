"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventOrderByWithRelationInput_1 = require("../inputs/EventOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AttendeeOrderByWithRelationInput = class AttendeeOrderByWithRelationInput {
};
exports.AttendeeOrderByWithRelationInput = AttendeeOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeOrderByWithRelationInput.prototype, "eventId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttendeeOrderByWithRelationInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], AttendeeOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventOrderByWithRelationInput_1.EventOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventOrderByWithRelationInput_1.EventOrderByWithRelationInput)
], AttendeeOrderByWithRelationInput.prototype, "event", void 0);
exports.AttendeeOrderByWithRelationInput = AttendeeOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeOrderByWithRelationInput", {})
], AttendeeOrderByWithRelationInput);
