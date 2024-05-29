"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventCreateNestedOneWithoutAttendeesInput_1 = require("../inputs/EventCreateNestedOneWithoutAttendeesInput");
const UserCreateNestedOneWithoutAttendeesInput_1 = require("../inputs/UserCreateNestedOneWithoutAttendeesInput");
let AttendeeCreateInput = exports.AttendeeCreateInput = class AttendeeCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AttendeeCreateInput.prototype, "dateTime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAttendeesInput_1.UserCreateNestedOneWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAttendeesInput_1.UserCreateNestedOneWithoutAttendeesInput)
], AttendeeCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventCreateNestedOneWithoutAttendeesInput_1.EventCreateNestedOneWithoutAttendeesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EventCreateNestedOneWithoutAttendeesInput_1.EventCreateNestedOneWithoutAttendeesInput)
], AttendeeCreateInput.prototype, "event", void 0);
exports.AttendeeCreateInput = AttendeeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttendeeCreateInput", {})
], AttendeeCreateInput);
